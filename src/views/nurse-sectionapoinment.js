import React, { Fragment, useState } from "react";
import DraggableTable from './nurse-sectiontable';
import './DraggableTable.css';
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Button,
  Col,
  Table,
  Form,
  Nav,
  Row,
  Tab,
  FormControl,
  FormGroup,
  FormSelect,
  FormLabel,
  FormCheck,
} from "react-bootstrap";
import "./styles.css";

// Image

import user from "../assets/images/user/11.png";
import { Link } from "react-router-dom";
import FormCheckbox from "./modules/forms/form-Checkbox";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const PatientApoinment = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAllergiesClick = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <Tab.Container defaultActiveKey={"check-up-data"}>
        <Row>
          <Col lg="12">
            <div className="iq-card">
              <div className="iq-card-body p-0">
                <div className="iq-edit-list">
                  <Nav
                    as={"ul"}
                    className="iq-edit-profile nav nav-pills list-inline mb-0 flex-md-row flex-column"
                  >
                    
                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        eventKey="check-up-data"
                      >
                        Check-Up Data
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        eventKey="otherdata"
                      >
                        Otherdata tab
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        eventKey="allergies"
                      >
                        Other Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill2"
                        eventKey="allergies3"
                      >
                        Other Information2
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
          </Col>

          {/* DoctorsAppointment-tab-1 */}

          

          {/* check-up-data */}
          <Col lg="12">
            <div className="iq-edit-list-data">
              <Tab.Content>
                <Tab.Pane
                  className="fade show"
                  eventKey="check-up-data"
                  role="tabpanel"
                >
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Doctor Appointment</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <Form>
                        <Row className="form-group align-items-center">
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Patient ID
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="PatientID"
                              placeholder="1111"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom01"
                            >
                              Patient Name
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="PatientName"
                              placeholder="mani"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Mobile No
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id=" Mobile No"
                              placeholder="1223556687"
                              readOnly
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Visit Type">
                              Visit Type
                            </FormLabel>
                            <FormControl
                              id="VisitType"
                              placeholder="In-patient"
                              readOnly
                              aria-label="Visit Type"
                              required
                            ></FormControl>
                          </Col>

                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="Appointment Type"
                            >
                              Appointment Type
                            </FormLabel>
                            <FormControl
                              id=" Appointment Type"
                              placeholder="Emergency"
                              readOnly
                              aria-label="Visit Type"
                              required
                            ></FormControl>
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Department">
                              Department
                            </FormLabel>
                            <FormControl
                              id=" Department"
                              placeholder="Cardiologist"
                              readOnly
                              aria-label="Visit Type"
                              required
                            ></FormControl>
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Doctor">
                              Doctor Name
                            </FormLabel>
                            <FormControl
                              id=" Doctor"
                              placeholder="Dr.Lakshmi"
                              readOnly
                              aria-label="Visit Type"
                              required
                            ></FormControl>
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="">
                              Appointment Date
                            </FormLabel>
                            <FormControl
                              className="form-control"
                              id="Datepage"
                              placeholder="02-08-2024"
                              readOnly
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Time">
                              Time
                            </FormLabel>
                            <FormControl
                              className="form-control"
                              id="  Time"
                              placeholder="12:00 AM"
                              required
                            />
                          </Col>
                          
                          <Col md="6">
                            <FormLabel
                              className="mb-0"
                              htmlFor="Which procedure do you want to make an appointment for?"
                            >
                              Which procedure do you want to make an appointment
                              for?
                            </FormLabel>
                            <FormControl
                              id="VisitType"
                              placeholder="Check-Up"
                              readOnly
                              aria-label="Visit Type"
                              required
                            ></FormControl>
                          </Col>

                          <Form.Group className="form-group col-sm-12">
                            <Form.Label className="mb-0">
                              Please describe the symptoms or concerns that you
                              would like to discuss during your telehealth
                              appoinment:
                            </Form.Label>
                            <div className="form-floating overflow-hidden">
                              
                              <FormControl
                              id="orm-control"
                              placeholder="The pain is severe, sudden"
                              readOnly
                              aria-label="paindata"
                              required
                            ></FormControl>
                              <Form.Label htmlFor="floatingTextarea2"></Form.Label>
                            </div>
                          </Form.Group>
                          <div className="title">
                            <h4 className="card-title">
                              Check-Up-Data (In Nurse Login)
                            </h4>
                          </div>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Blood Pressure(B.P)
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="BP"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Blood Pressure(B.P)
                            </div>
                          </Col>

                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Blood Sugar
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Blood Sugar"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Blood Sugar
                            </div>
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Height (cm)
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Height"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Height (cm)
                            </div>
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Weight (KG)
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Weight"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Weight (KG).
                            </div>
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Temperature
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Temperature"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Temperature
                            </div>
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Heart Rate (BPM)
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Heart Rate"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Heart Rate (BPM).
                            </div>
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Respiratory Rate (/Min)
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Respiratory Rate"
                              required
                            />
                            <br />
                            <br />
                            <div className="invalid-feedback">
                              Please Enter Respiratory Rate (/Min)
                            </div>
                          </Col>

                          {/* Allergies */}

                          <Col md="12">
                            <div className="title">
                              <h4 className="card-title">Allergies</h4>
                            </div>
                            <Form.Group>
                              

                              <FormLabel htmlFor="color">
                                <FormCheckInput
                                  type="checkbox"     
                                  onClick={handleAllergiesClick}
                                />{'\t'}
                                YES
                              </FormLabel>
                              </Form.Group>
                                 
                              
                          </Col>

                          {isChecked && (
                            <div>
                              <h5 className="mb-3">Allergies Details</h5>
                              <Row>
                                <Col md="4">
                                  <FormLabel
                                    className="mb-0"
                                    htmlFor="validationCustom02"
                                  >
                                    Allergies
                                  </FormLabel>
                                  <FormControl
                                    type="text"
                                    className="form-control"
                                    id="  Allergies"
                                    required
                                  />
                                  <div className="invalid-feedback">
                                    Please select a Patient ID.
                                  </div>
                                </Col>
                                <Col md="4">
                                  <FormLabel
                                    className="mb-0"
                                    htmlFor="Allergy Type"
                                  >
                                    Allergy Type
                                  </FormLabel>
                                  <FormSelect
                                    id="Allergy Type"
                                    aria-label="Allergy Type"
                                    required
                                  >
                                    <option value="">
                                      Select Allergy Type
                                    </option>
                                    <option value="Drug Allergy">
                                      Drug Allergy
                                    </option>
                                    <option value="Dust Allergy">
                                      Dust Allergy
                                    </option>
                                    <option value="Food Allergy">
                                      Food Allergy
                                    </option>
                                    <option value="Skin Allergy">
                                      Skin Allergy
                                    </option>
                                  </FormSelect>
                                  <div className="invalid-feedback">
                                    Please select a Allergy Type
                                  </div>
                                </Col>
                                <Col md="4">
                                  <FormLabel
                                    className="mb-0"
                                    htmlFor="Allergen"
                                  >
                                    Allergen
                                  </FormLabel>
                                  <FormSelect
                                    id="Allergen"
                                    aria-label="Allergen"
                                    required
                                  >
                                    <option value="">
                                      Select Allergen Type
                                    </option>
                                    <option value="cosmetics">cosmetics</option>
                                    <option value="Fragrances">
                                      Fragrances
                                    </option>
                                    <option value="Sulfa Drugs">
                                      Sulfa Drugs
                                    </option>
                                    <option value="Fish">Fish</option>
                                  </FormSelect>
                                  <div className="invalid-feedback">
                                    Please select a Allergen.
                                  </div>
                                </Col>

                                <Col md="4">
                                  <FormLabel
                                    className="mb-0"
                                    htmlFor="Reaction"
                                  >
                                    Reaction
                                  </FormLabel>
                                  <FormControl
                                    type="text"
                                    className="Reaction"
                                    id="  Reaction"
                                    required
                                  />
                                  <div className="invalid-feedback">
                                    Please select Reaction
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          )}
                        </Row>
                        <FormGroup className="form-group mb-3">
                          <FormCheck>
                            <FormCheck.Input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="invalidCheck"
                              required
                            />
                            <FormCheck.Label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              Agree to terms and conditions
                            </FormCheck.Label>
                            <FormControl.Feedback className="invalid-feedback">
                              You must agree before submitting.
                            </FormControl.Feedback>
                          </FormCheck>
                        </FormGroup>
                        <Button
                          type="submit"
                          className="btn btn-primary me-2 mt-3"
                        >
                          Confirm
                        </Button>
                        <Button
                          type="reset"
                          variant="none"
                          className="btn iq-bg-danger mt-3"
                        >
                          cancel
                        </Button>{" "}
                      </Form>
                    </div>
                  </div>
                  <h3>Patient Check-up- Details</h3>
                  <Row>
                  <DraggableTable />
                 </Row>
                  
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>

          {/* Doctor Cheking Form */}

          <Col lg="12">
            <div className="iq-edit-list-data">
              <Tab.Content>
                <Tab.Pane
                  className="fade show"
                  eventKey="doctor-checking"
                  role="tabpanel"
                >
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Doctor Appointment</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <Form>
                        <Row className="form-group align-items-center">
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Patient ID
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id=" Patient ID"
                              placeholder="333"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom01"
                            >
                              Patient Name
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id=" Patient Name"
                              placeholder="Mani"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="validationCustom02"
                            >
                              Mobile No
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id=" Mobile No"
                              placeholder="9933445566"
                              readOnly
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Visit Type">
                              Visit Type
                            </FormLabel>
                            <FormControl
                              id="VisitType"
                              placeholder="In Patient"
                              readOnly
                              aria-label="Visit Type"
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel
                              className="mb-0"
                              htmlFor="Appointment Type"
                            >
                              Appointment Type
                            </FormLabel>
                            <FormControl
                              id=" Appointment Type"
                              placeholder="Emergency"
                              readOnly
                              aria-label=" Appointment Type"
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Department">
                              Department
                            </FormLabel>
                            <FormControl
                              id=" Department"
                              placeholder="General"
                              readOnly
                              aria-label=" Department"
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Doctor">
                              Doctor Name
                            </FormLabel>
                            <FormControl
                              id=" DoctorName"
                              placeholder="Dr.Lakshmi"
                              readOnly
                              aria-label=" Doctor"
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Datepage">
                              Appointment Date
                            </FormLabel>
                            <FormControl
                              className="form-control"
                              placeholder="21-8-2024"
                              readOnly
                              id="Datepage"
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Time">
                              Time
                            </FormLabel>
                            <FormControl
                              className="form-control"
                              placeholder="11:00am"
                              readOnly
                              id="Time"
                              required
                            />
                          </Col>

                          <Col md="6">
                            <FormLabel
                              className="mb-0"
                              htmlFor="Which procedure do you want to make an appointment for?"
                            >
                              Which procedure do you want to make an appointment
                              for?
                            </FormLabel>
                            <FormControl
                              className="form-control"
                              placeholder="Medical-check-up"
                              readOnly
                              id=" Make an appointment"
                              required
                            />
                          </Col>

                          
                          

                          
                          
                         

                          <div className="title">
                            <h4 className="card-title">Allergies</h4>
                          </div>
                          
                          
                        </Row>
                        <Button
                          type="submit"
                          className="btn btn-primary me-2 mt-3"
                        >
                          Confirm
                        </Button>
                        <Button
                          type="reset"
                          variant="none"
                          className="btn iq-bg-danger mt-3"
                        >
                          cancel
                        </Button>{" "}
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

export default PatientApoinment;
