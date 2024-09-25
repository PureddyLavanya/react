import React, { Fragment,useState ,useEffect,createContext } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import APIChart from "./modules/charts/APIChart";
import FirstChart from './modules/charts/FirstChart';
import SecondChart from './modules/charts/SecondChart';

//apexcharts
import Chart from "react-apexcharts";

//flatpickr
import Flatpickr from "react-flatpickr";

// Img
import img from "../assets/images/user/11.png";
import user1 from "../assets/images/user/01.jpg";
import user2 from "../assets/images/user/02.jpg";
import user3 from "../assets/images/user/03.jpg";
import user4 from "../assets/images/user/04.jpg";
import user5 from "../assets/images/user/05.jpg";
import user6 from "../assets/images/user/06.jpg";
import user7 from "../assets/images/user/07.jpg";
import user8 from "../assets/images/user/08.jpg";
import user9 from "../assets/images/user/09.jpg";
import user10 from "../assets/images/user/10.jpg";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


export const context=createContext();


const Index = () => {

const bgImg = require("../assets/images/page-img//38.jpg");
const [ct,setCompletedTodos]=useState([]);
const [ict,setIncompleteTodos]=useState([]);
const [ctc, setCompletedCount] = useState();
const [ictc, setIncompleteCount] = useState();
const [tods,setTods]=useState([]);
const [compldt,setcompldt]=useState({});
const [incompldt,setincompldt]=useState({});
useEffect(() => {
  const getTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const tds = response.data;
      setTods(tds);
      const completedt = tds.filter(todo => todo.completed);
      const incompletet = tds.filter(todo => !todo.completed);
      const completec = completedt.length;
      const incompletec = incompletet.length;
      setCompletedTodos(completedt);
      setIncompleteTodos(incompletet);
      setCompletedCount(completec);
      setIncompleteCount(incompletec);
      setcompldt({'Label':'Completed','Value':completec});
      setincompldt({'Label':'Incomplete','Value':incompletec});
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  getTodos();
},[]);
  return (
    <Fragment>
     <Col lg="12">
            <Row>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-primary rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-primary">
                        <i className="ri-user-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">600</span>
                        </h2>
                        <h5 className="">Meters Count </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-warning rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-warning">
                        <i className="ri-women-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">450</span>
                        </h2>
                        <h5 className="">Active Meters</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-danger rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-danger">
                        <i className="ri-group-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">3500</span>
                        </h2>
                        <h5 className="">Deactive Meters</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-info rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-info">
                        <i className="ri-hospital-line"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">500</span>
                        </h2>
                        <h5 className="">Today Active</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="12">
            <Row>
              <Col md='4'>
                <APIChart t1={ct} t2={ict} c1={ctc} c2={ictc} allt={tods} />
              </Col>
              <Col md='4'>
                <FirstChart cmt={ct} cmtc={ctc} dt={compldt} />
              </Col>
              <Col md='4'>
                <SecondChart icmt={ict} icmtc={ictc} dt={incompldt} />
              </Col>
            </Row>
          </Col>
    </Fragment>
  );
};

export default Index;
