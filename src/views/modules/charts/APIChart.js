import React, { useEffect, useState, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Modal, Button, DropdownButton, Dropdown, Table, Form, Row, Col, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

const APIChart = ({t1,t2,c1,c2,allt}) => {
  const chartRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const [selectedTodoStatus, setSelectedTodoStatus] = useState('All');
  const [chartTitle, setChartTitle] = useState('All Todo Completion Status');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState();
  const [incompleteCount, setIncompleteCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [downloadTodoData, setdownloadTodoData] = useState({});
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [finalRecords,setFinalRecords]=useState([]);
  const [totalPages,settotalPages]=useState();
  const [indexOfFirstRecord,setindexOfFirstRecord]=useState();
  const [indexOfLastRecord,setindexOfLastRecord]=useState();
  
  const [defChartData, setDefChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Todos',
        data: [],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  });

  const coptions = {
    responsive: true,
    plugins: {
      legend: 
      { 
        position: 'top' 
      },
      title: 
      { 
        display: true, text: `${chartTitle}` 
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} todos`;
          },
        },
      },
      datalabels: {
        color: '#000',
        anchor:'center',
        align: 'center',
        formatter: (value, context) => {
          return ` ${value} `;
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        console.log(elements);
        const {index }= elements[0];
        if (index===0) {
          setdownloadTodoData({'Label':'Completed','Value':completedCount});
          setClickedData(completedTodos);
        } 
        else if(index===1){
          setdownloadTodoData({'Label':'Incomplete','Value':incompleteCount});
          setClickedData(incompleteTodos);
        } 
        setShowModal(true);
    }
    },
  };
  useEffect(()=>{
        setCompletedTodos(t1);
        setIncompleteTodos(t2);
        setCompletedCount(c1);
        setIncompleteCount(c2);
        setDefChartData(allt);
  },[]);

  useEffect(() => {
    
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //     const tds = response.data;
    //     const completedt = tds.filter(todo => todo.completed);
    //     const incompletet = tds.filter(todo => !todo.completed);
    //     const completec = completedt.length;
    //     const incompletec = incompletet.length;
        // setCompletedTodos(t1);
        // setIncompleteTodos(t2);
        // setCompletedCount(c1);
        // setIncompleteCount(c2);
        // console.log('Data fetched:',todos);
        if (selectedTodoStatus === 'All') {
          setDefChartData({
            labels: ['Completed', 'Incomplete'],
            datasets: [
              {
                label: 'Todos',
                data: [c1, c2],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
              },
            ],
          });
        } else if (selectedTodoStatus === 'Completed') {
          setDefChartData({
            labels: ['Completed'],
            datasets: [
              {
                label: 'Todos',
                data: [c1],
                backgroundColor: ['rgba(75, 192, 192, 0.6)'],
              },
            ],
          });
        } else if (selectedTodoStatus === 'Incomplete') {
          setDefChartData({
            labels: ['Incomplete'],
            datasets: [
              {
                label: 'Todos',
                data: ["",c2],
                backgroundColor: ['rgba(255, 99, 132, 0.6)'],
              },
            ],
          });
        }
   
  }, [selectedTodoStatus]);

  const handleTodoStatusChange = (e) => {
    setSelectedTodoStatus(e.target.value);
    setChartTitle(`${e.target.value} Todos Status`);
  };
  useEffect(() => {
    setindexOfLastRecord(currentPage * recordsPerPage);
    setindexOfFirstRecord(indexOfLastRecord - recordsPerPage);
    settotalPages(Math.ceil(clickedData.length / recordsPerPage));
  
    const currentRecords = clickedData.slice(indexOfFirstRecord, indexOfLastRecord);
    setFinalRecords(currentRecords); 
  }, [clickedData, currentPage, recordsPerPage, indexOfFirstRecord, indexOfLastRecord]);
  
  // const finalRecords = useMemo(() => {
  //   const indexOfLastRecord = currentPage * recordsPerPage;
  //   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  //   return clickedData.slice(indexOfFirstRecord, indexOfLastRecord);
  // }, [clickedData, currentPage, recordsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRecordsPerPageChange = (newLimit) => {
    setRecordsPerPage(newLimit);
    setCurrentPage(1);
  };
  const handleSort = (field) => {
    const sortedData = [...clickedData]; 
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
  
    sortedData.sort((a, b) => {
      if (order === 'asc') return a[field] > b[field] ? 1 : -1;
      else return a[field] < b[field] ? 1 : -1;
    });
  
    setSortField(field);
    setSortOrder(order);
    setClickedData(sortedData); 
  };
  const DataModal = ({ onClose, dt, canvasref }) => {
    const dCSV = () => {
      const csvContent = `Selected Todos Status:${dt.Label}\n,Label,Value\n,${dt.Label},${dt.Value}`;
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, `${dt.Label}_Todos.csv`);
    };
    const dPDF = () => {
      const doc=new jsPDF();
      doc.text(`Selected Todos Status: ${dt.Label}`, 10, 10);
      html2canvas(canvasref.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 180, 180);
        doc.save(`${dt.Label}_Todos.pdf`);
      });
    };
    
    const dExcel = () => {
      const data = [
        { Label: 'Selected Todo Status', Value: selectedTodoStatus }, 
        { Label: 'Label', Value: 'Value' }, 
        { Label: dt.Label, Value: dt.Value } 
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
      XLSX.utils.book_append_sheet(wb, ws, 'Todos Data');
    
      XLSX.writeFile(wb, `${dt.Label}_Todos_${selectedTodoStatus}.xlsx`);
    };
    
    return (
      <Modal show={showModal} onHide={onClose} size="lg" centered className='p-4' style={{width:'100%'}}>
        <Modal.Header closeButton>
          <Col lg='10'>
          <Row >
            <Col md='6'>
              <Modal.Title>Todos Status: {dt.Label}</Modal.Title>
            </Col>
            <Col md='4' className='mr-0'>
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
                <th onClick={() => handleSort('userId')}>User Id{sortField === 'userId' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('id')}>Todo Id{sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('title')}>Title{sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th>Completion Status</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {finalRecords.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.userId}</td>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{JSON.stringify(todo.completed)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
        <Row className="w-100">
            <Col xs={6}>
              <DropdownButton
                as={ButtonGroup} className="m-2"
                title={`Records per page: ${recordsPerPage}`}
                variant="secondary"
                onSelect={(e) => handleRecordsPerPageChange(Number(e))}
              >
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="20">20</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={4} className="text-end">
              <Button variant="warning" className="m-2" onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>
              <Button variant="warning" className="m-2" onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </Col>
            <Col xs={2}>
              <Button variant="primary" className="m-2" onClick={onClose}>Close</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    );
  };

  const downloadCSV = () => {
    const labels = defChartData.labels;
    const data = defChartData.datasets[0].data;
    const csvContent =`Selected Todos Status:${selectedTodoStatus}\nLabel,Value\n` + labels.map((label, idx) => `${label},${data[idx]}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'chart_data.csv');
  };

  const downloadPDF = () => {
    const labels = defChartData.labels;
    const data = defChartData.datasets[0].data;
    const doc = new jsPDF();

    doc.text(`Selected Todos Status:${selectedTodoStatus}`,10,10);
    doc.text('Chart Data', 20, 20);
    labels.forEach((label, index) => {
      doc.text(`${label}: ${data[index]} votes`, 20, 30 + index * 10);
    });

    html2canvas(chartRef.current.canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 20, 60, 180,180);
      doc.save('chart_data.pdf');
    });
  };
  const downloadPNG = () => {
      html2canvas(chartRef.current.canvas).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'chart_image.png';
        link.click();
      });
    };
    if(!defChartData){
      return(
        <h5>Fetching Data!</h5>
      );
    }
  return (
    <div className="mx-auto text-center">
      <Form as={Row} className="align-items-center m-0">
          <Form.Group as={Col} md={6} className="d-flex mr-2">
            <Form.Control as="select" value={selectedTodoStatus} onChange={handleTodoStatusChange}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </Form.Control>
          </Form.Group>
          <Col md={6} className="d-flex justify-content-end">
            <DropdownButton id="dropdown-basic-button" title="Export Options" disabled={selectedTodoStatus !== 'All'}>
              <Dropdown.Item onClick={downloadCSV}>CSV</Dropdown.Item>
              <Dropdown.Item onClick={downloadPDF}>PDF</Dropdown.Item>
              <Dropdown.Item onClick={downloadPNG}>PNG</Dropdown.Item>
            </DropdownButton>
          </Col>
      </Form>
      <Doughnut data={defChartData} options={coptions} ref={chartRef} className='m-1'/>
      {showModal && (
        <DataModal onClose={() => setShowModal(false)} data={clickedData} canvasref={chartRef} dt={downloadTodoData}/>
      )}
    </div>
  );
};

export default APIChart;
