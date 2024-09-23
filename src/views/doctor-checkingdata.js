import React, { Fragment, useState } from "react";
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

const DoctorCheckingData = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAllergiesClick = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Fragment>
     <Tab.Container defaultActiveKey={"doctor-checking"}>
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
                        eventKey="doctor-checking"
                      >
                        Doctor Cheking Form
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill"
                        eventKey="allergies"
                      >
                        Diagnostic Tests
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill2"
                        eventKey="DiagnosticResult"
                      >
                        Diagnostic Results
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"} className="col-md-3 p-0">
                      <Nav.Link
                        className="nav-link"
                        data-bs-toggle="pill2"
                        eventKey="Medicalprescription"
                      >
                        Medical prescription
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
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

                          <Form.Group className="form-group col-sm-12">
                            <Form.Label className="mb-0">
                              Please describe the symptoms or concerns that you
                              would like to discuss during your telehealth
                              appoinment:
                            </Form.Label>
                            <div className="form-floating overflow-hidden">
                              <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                readOnly
                                id="floatingTextarea2"
                                style={{ height: 100 }}
                              ></textarea>
                              <Form.Label htmlFor="floatingTextarea2"></Form.Label>
                            </div>
                          </Form.Group>
                          <div className="title">
                            <h3 className="card-title">
                              Check-Up-Data (In Nurse Login)
                            </h3>
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
                              placeholder="120"
                              readOnly
                              required
                            />
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
                              placeholder="240"
                              readOnly
                              required
                            />
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
                              placeholder="6"
                              readOnly
                              required
                            />
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
                              placeholder="60"
                              readOnly
                              required
                            />
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
                              placeholder="90"
                              readOnly
                              required
                            />
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
                              placeholder="60 to 100 beats per min"
                              readOnly
                              required
                            />
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
                              placeholder="12 to 18 breaths per min"
                              readOnly
                              required
                            />
                          </Col>

                          <div className="title">
                            <h4 className="card-title">Allergies</h4>
                          </div>
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
                              placeholder="Allergies"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Allergy Type">
                              Allergy Type
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="  Allergies"
                              placeholder="Skin Allergy"
                              readOnly
                              required
                            />
                          </Col>
                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Allergen">
                              Allergen
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="Allergies"
                              placeholder="Cosmotics"
                              readOnly
                              required
                            />
                          </Col>

                          <Col md="4">
                            <FormLabel className="mb-0" htmlFor="Reaction">
                              Reaction
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="Reaction"
                              placeholder="Face Damage"
                              readOnly
                              id="Reaction"
                              required
                            />
                          </Col>
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

export default DoctorCheckingData;
