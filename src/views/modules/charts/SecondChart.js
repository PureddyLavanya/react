import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Dropdown,Row,Col,DropdownButton,Button,Modal,Table } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { useRef,useState } from 'react';
import * as XLSX from 'xlsx';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SecondChart = ({icmt,icmtc,dt}) => {
  const chartRef=useRef(null);
  const [clickedData,setClickedData]=useState([]);
  const [showModal,setShowModal]=useState(false);
  const data = {
    labels: ['2019','2020','2021','2022','2023'], 
    datasets: [
      {
        label: 'Never Communicated Meters', 
        data: [40,15,65,50,45],
        backgroundColor: 'rgb(173, 130, 251)', 
        borderColor: 'rgb(173, 130, 251)', 
        borderWidth: 1, 
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, 
        position: 'top', 
      },
      title: {
        display: true, 
        text: 'Never Communicated Meters Data', 
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const datasetIndex = elements[0].datasetIndex;
        const index = elements[0].index;
        const label = data.labels[index];
        const value = data.datasets[datasetIndex].data[index];
        setClickedData({ label, value });
        setShowModal(true);
      }
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };
  function downloadCSV(){
    const labels = data.labels;
    const dta = data.datasets[0].data;
    const csvContent =`Never Communicated Meters Data during:2019-2023\nLabel,Value\n` + labels.map((label, idx) => `${label},${dta[idx]}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'nevercomm_meters.csv');
  }
  function downloadPDF(){
    const doc=new jsPDF();
      doc.text(`Never Communicated Meters Data during:2019-2023`, 10, 10);
      html2canvas(chartRef.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 120, 120);
        doc.save(`nevercomm_meters.pdf`);
      });
  }
  function downloadPNG(){
    html2canvas(chartRef.current.canvas).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'nevercomm_meters.png';
      link.click();
    });
  }
  const DataModal=({onClose, canvasref, dt})=>{
    function dCSV(){
      const csvContent = `Never Communicated Meters Data for year:${dt.label}\n,Label,Value\n,${dt.label},${dt.value}`;
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, `${dt.label}_nevercomm_meters.csv`);
    }
    function dPDF(){
      const doc=new jsPDF();
      doc.text(`Never Communicated Meters Data for year: ${dt.label}`, 10, 10);
      html2canvas(canvasref.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 60, 180, 180);
        doc.save(`${dt.label}_nevercomm_meters.pdf`);
      });
    }
    function dExcel(){
      const data = [
        { Label: 'Never Communicated Meters Data:', Value:`${dt.label}`  }, 
        { Label: 'Year', Value: 'Meters Count' }, 
        {Label:`${dt.label}`,Value:`${dt.value}`}
      ];
    
      const ws = XLSX.utils.json_to_sheet(data, { skipHeader: true }); 
      const wscols = Object.keys(data[0]).map(key => {
        const maxLength = data.reduce((max, record) => {
          return Math.max(max, record[key] ? record[key].toString().length : 0);
        }, key.length); 
        return { width: maxLength + 2 }; 
      });
    
      ws['!cols'] = wscols; 
    
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, `Meters Data:${dt.label}`);
    
      XLSX.writeFile(wb, `${dt.label}_meters.xlsx`);

    }
    return (
        <Modal show={showModal} onHide={onClose} size="xl" centered className='p-4'>
          <Modal.Header closeButton>
            <Col md='10'>
              <Row >
                <Col md='8' className='d-flex'>
                  <Modal.Title>
                    <p>Meters Data for year:{dt.label}</p>
                  </Modal.Title>
                </Col>
                <Col md='2' className="d-flex justify-content-end">
                  <DropdownButton id="dropdown-basic-button" title="Export Options" >
                  <Dropdown.Item onClick={dCSV}>CSV</Dropdown.Item>
                  <Dropdown.Item onClick={dPDF}>PDF</Dropdown.Item>
                  <Dropdown.Item onClick={dExcel}>Excel</Dropdown.Item>
                </DropdownButton>
                </Col>
              </Row>
            </Col>         
          </Modal.Header>
          <Modal.Body>
            <Table hover bordered striped size='lg'>
              <thead className='text-center'>
                <tr>
                  <th>Year</th>
                  <th>Meters Count</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td>{dt.label}</td>
                  <td>{dt.value}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" className="m-2" onClick={onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  };
  return (
    <div className="mx-auto">
      <Row lg='12'>
        <Col column lg='8' className='d-flex'>
          <Bar data={data} options={options} style={{ height: '420px', width: '300px' }} ref={chartRef} />
        </Col>
        <Col column lg='2' className='d-flex justify-content-end'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <FaBars />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={downloadCSV}>CSV</Dropdown.Item>
              <Dropdown.Item onClick={downloadPDF}>PDF</Dropdown.Item>
              <Dropdown.Item onClick={downloadPNG}>PNG</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {showModal && (
        <DataModal onClose={() => setShowModal(false)} dt={clickedData} canvasref={chartRef}/>
      )}
    </div>
  );
  
}

export default SecondChart;
