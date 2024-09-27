import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Dropdown,Row,Col,Modal,Button,Table,DropdownButton } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { useEffect, useRef,useState } from 'react';
import * as XLSX from 'xlsx';
import './styles.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FirstChart = ({prods}) => {
  const chartRef = useRef(null);
  const [clickedData,setClickedData]=useState([]);
  const [showModal,setShowModal]=useState(false);
  const [mencloths,setmencloths]=useState([]);
  const [womencloths,setwomencloths]=useState([]);
  const [jewels,setjewels]=useState([]);
  const [elect,setelect]=useState();
  const [menclCount,setmenclCount]=useState();
  const [womenclCount,setwomenclCount]=useState();
  const [jewCount,setjewCount]=useState();
  const [electCount,setelectCount]=useState();
  const [prdcategory,setprdcategory]=useState();
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [defChartData,setDefChartData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'Categories of Products', 
        data: [],
        backgroundColor:[], 
        borderColor: [], 
        borderWidth: 1, 
      },
    ],
  });

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
        text: 'Categories Of Products', 
      },
      datalabels: {
        color: '#000',
        anchor:'center',
        align: 'center',
        formatter: (value, context) => {
          // const label = context.chart.data.labels[context.dataIndex];
          return `${value} `;
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        // const datasetIndex = elements[0].datasetIndex;
        const index = elements[0].index;
        const label = defChartData.labels[index];
        // const value = defChartData.datasets[datasetIndex].data[index];
        if(label===`Men's clothing`){
          setClickedData(mencloths);
          setprdcategory(`Men's clothing`);
        }
        else if(label===`Women's clothing`){
          setClickedData(womencloths);
          setprdcategory(`Women's clothing`);
        }
        else if(label==='Jewelery'){
          setClickedData(jewels);
          setprdcategory('Jewelery');
        }
        else if(label==='Electronic'){
          setClickedData(elect);
          setprdcategory('Electronic');
        }
        setShowModal(true);
      }
    },
    scales: {
      x:{
        grid:{
          display:false,
        },
        ticks: {
          minRotation: 45, 
          maxRotation: 45,
        }
      },
      y: {
        beginAtZero: true, 
        grid:{
          display:false,
        }
      },
    },
  };

  useEffect(()=>{
    const prds=prods;
    const d1=prds.filter(p=>p.category ===`men's clothing`);
    const d2=prds.filter(p=>p.category ===`women's clothing`);
    const d3=prds.filter(p=>p.category ==='jewelery');
    const d4=prds.filter(p=>p.category ==='electronics');
    setmencloths(d1);
    setwomencloths(d2);
    setjewels(d3);
    setelect(d4);
    setmenclCount(d1.length);
    setwomenclCount(d2.length);
    setjewCount(d3.length);
    setelectCount(d4.length);

    console.log(mencloths);
    console.log(womencloths);
    console.log(jewels);
    console.log(elect);
  },[prods]);
  useEffect(()=>{
      setDefChartData({
        labels:[`Men's clothing`,`Women's clothing`,'Jewelery','Electronic'],
        datasets:[
          {
            label:'Products',
            data:[menclCount,womenclCount,jewCount,electCount],
            backgroundColor:['rgb(249, 183, 247)'],
            borderColor:['rgb(249, 183, 247)'],
          },
        ]
      });  
  },[menclCount,womenclCount,jewCount,electCount]);
  function downloadCSV(){
    const labels = defChartData.labels;
    const dta = defChartData.datasets[0].data;
    const csvContent =`Categories of Products\nCategory,Count\n` + labels.map((label, idx) => `${label},${dta[idx]}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'products_categories.csv');
  }
  function downloadPDF(){
    const doc=new jsPDF();
      doc.text('Categories of Products', 10, 10);
      html2canvas(chartRef.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 130, 170);
        doc.save('products_categories.pdf');
      });
  }
  function downloadPNG(){
    html2canvas(chartRef.current.canvas).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');   //more width is needed
      link.download = 'products_categories.png';
      link.click();
    });
  }
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
  const DataModal=({onClose, canvasref, dt, mtitle})=>{
    function dCSV() {
      const csvContent = `Category of Product Choosen: ${mtitle}\nId,Title,Price,Rating\n` 
        + dt.map((prd) => `${prd.id},${prd.title},${prd.price},${prd.rating.rate}`).join('\n');
    
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, `${mtitle}_productsdata.csv`);
    }
    
    function dPDF(){
      const doc=new jsPDF();
      doc.text(`Category of Product Choosen: ${mtitle}`, 10, 10);
      html2canvas(canvasref.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 140, 160);
        doc.save(`${mtitle}_productsdata.pdf`);
      });
    }
    function dExcel() {
      const introRow = [{ Label: `Category of Product Choosen: ${mtitle}` }];
      const header = ['ID', 'Title', 'Price', 'Rating']; 
      const data = dt.map(record => ({
        ID: record.id,
        Title: record.title,
        Price: record.price,
        Rating: record.rating.rate
      }));
      const ws = XLSX.utils.json_to_sheet(introRow, { skipHeader: true });
      XLSX.utils.sheet_add_json(ws, data, { origin: -1, header: header });
    
      const wscols = header.map((col, index) => {
        const maxLength = Math.max(
          col.length,
          ...data.map(row => (row[col] ? row[col].toString().length : 0)) 
        );
        return { width: maxLength + 2 }; 
      });
    
      ws['!cols'] = wscols; 
    
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Product Data');
    
      XLSX.writeFile(wb, `${mtitle}_productsdata.xlsx`);
    }
    
    return (
        <Modal show={showModal} onHide={onClose} size="xl" centered className='mdl'>
          <Modal.Header closeButton>
            <Col md='10'>
              <Row >
                <Col md='8' className='d-flex'>
                  <Modal.Title>
                    <p>Product Category Choosen:{mtitle}</p>
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
                  <th onClick={() => handleSort('id')}>Id{sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('title')}>Title{sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('price')}>Price{sortField === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('rating')}>Rating{sortField === 'rating' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  dt.map(p=>(
                    <tr>
                      <td>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.price}</td>
                      <td>{p.rating.rate}</td>
                    </tr>
                  ))
                }
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
        <Col column lg='8' className='d-flex '>
          <Bar data={defChartData} options={options}  style={{ height: '400px', width: '300px' }}  ref={chartRef}/>
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
        <DataModal onClose={() => setShowModal(false)} dt={clickedData} mtitle={prdcategory} canvasref={chartRef}/>
      )}
    </div>
  );
  
}

export default FirstChart;