import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Dropdown,Row,Col } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FirstChart = ({ct,ctc}) => {
  const data = {
    labels: ['Completed Todos'], 
    datasets: [
      {
        label: 'Completed Todos', 
        data: [ctc],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1, 
      },
    ],
  };

  const options = {
    responsive: true, 
    plugins: {
      legend: {
        display: true, 
        position: 'top', 
      },
      title: {
        display: true, 
        text: 'Completed Todos Data', 
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  function downloadCSV(){

  }
  function downloadPDF(){

  }
  function downloadPNG(){

  }
  return (
    <div className="mx-auto p-2">
      <Row lg='12'>
        <Col column lg='8' className='d-flex'>
          <Bar data={data} options={options} style={{height:'1200px'}} />
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
    </div>
  );
  
}

export default FirstChart;
