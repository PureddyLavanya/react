import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Form,
  Nav,
  Row,
  Tab,
  FormLabel,
  FormSelect,
  FormControl,
} from "react-bootstrap";
import "./styles.css";

// Image

import user from "../assets/images/user/11.png";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [careGiver, setCareGiver] = useState("");

  const handleCareGiverChange = (event) => {
    setCareGiver(event.target.value); // Update state based on selection
  };

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <div className="iq-edit-list-data">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-center ">
                <div className="iq-header-title">
                  <h3 className="card-title">Patient Registration</h3>
                </div>
              </div>

              <div className="iq-card-body">
               

                <Row className="align-items-center">
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      Title:
                    </Form.Label>
                    <FormSelect id="title" aria-label="Title" required>
                      <option value="">Select Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                    </FormSelect>

                    <Form.Control.Feedback type="invalid">
                      Please select a title.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      First Name:
                    </Form.Label>
                    <Form.Control type="text" className="my-2" id="fname" />
                  </Form.Group>

                  <Form.Group className=" form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="lname">
                      Last Name:
                    </Form.Label>
                    <Form.Control type="text" className=" my-2" id="lname" />
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0">Gender:</Form.Label>
                    <select
                      className="form-control my-2"
                      id="exampleFormControlSelect1"
                    >
                      <option defaultValue>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="dob">
                      Date Of Birth:
                    </Form.Label>
                    <Form.Control className="my-2" id="dob" type="date" />
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0">Age:</Form.Label>
                    <Form.Control className="my-2" id="Age" />
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0">Marital Status:</Form.Label>
                    <select
                      className="form-control my-2"
                      id="exampleFormControlSelect1"
                    >
                      <option defaultValue>Single</option>
                      <option>Married</option>
                      <option>Widowed</option>
                      <option>Divorced</option>
                      <option>Separated </option>
                    </select>
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      Aadhar:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="aadhar"
                      defaultValue=""
                    />
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      Mobile Number:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="Mobile Number"
                      defaultValue=""
                    />
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      Email ID:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="Email ID"
                      defaultValue=""
                    />
                  </Form.Group>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      Emergency Contact Phone Number:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="Emergency Contact Phone Number"
                      defaultValue=""
                    />
                  </Form.Group>

                  <div className="title">
                    <h4 className="card-title">Patient Address</h4>
                  </div>

                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      HouseNo:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="HouseNo"
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      City:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="City"
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      District:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="District"
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0">State/UT:</Form.Label>
                    <select
                      className="form-control my-2"
                      id="exampleFormControlSelect1"
                    >
                      <option defaultValue>State/UT</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Kerala</option>
                      <option>Assam </option>
                    </select>
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0">Country</Form.Label>
                    <select
                      className="form-control my-2"
                      id="exampleFormControlSelect1"
                    >
                      <option defaultValue>Country</option>
                      <option>India</option>
                      <option>France</option>
                      <option>Austrila</option>
                      <option>Russia </option>
                    </select>
                  </Form.Group>
                  <Form.Group className="form-group col-sm-4">
                    <Form.Label className="mb-0" htmlFor="fname">
                      PinCode:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="my-2"
                      id="PinCode"
                      defaultValue=""
                    />
                  </Form.Group>
                  <Col md="4">
                    <div className="title">
                      <h4 className="card-title">CareGiver</h4>
                    </div>
                    <Form.Group>
                      <FormSelect
                        id="careGiver"
                        aria-label="Care Giver"
                        required
                        value={careGiver}
                        onChange={handleCareGiverChange}
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </FormSelect>
                      <Form.Control.Feedback type="invalid">
                        Please select a care giver.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {careGiver === "yes" && (
                    <>
                      <h5 className="mb-3">Care Giver Details</h5>
                      <Row>
                        <Col md="6">
                          <Form.Group>
                            <FormLabel className="mb-0" htmlFor="Name">
                              Name
                            </FormLabel>
                            <FormControl
                              type="text"
                              id="Name"
                              placeholder="Name"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a name.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <FormLabel className="mb-0" htmlFor="maritalStatus">
                              Relation Status
                            </FormLabel>
                            <FormSelect
                              id="relationStatus"
                              aria-label="Marital Status"
                              required
                            >
                              <option value="">Select Relation</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Uncle">Uncle</option>
                              <option value="Aunty">Aunty</option>
                            </FormSelect>
                            <Form.Control.Feedback type="invalid">
                              Please select a Relation status.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <FormLabel className="mb-0" htmlFor="mobileNo">
                              Mobile Number
                            </FormLabel>
                            <FormControl
                              type="text"
                              id="mobileNo"
                              placeholder="Mobile Number"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a mobile number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <FormLabel className="mb-0" htmlFor="aadhar">
                              Aadhar Number
                            </FormLabel>
                            <FormControl
                              type="text"
                              id="aadhar"
                              placeholder="Aadhar Number"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Aadhar number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  )}
                </Row>

                <Button type="submit" className="btn btn-primary me-2 mt-3">
                  Submit
                </Button>
                <Button
                  type="reset"
                  variant="none"
                  className="btn iq-bg-danger mt-3"
                >
                  cancel
                </Button>
                {/* </Form> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default RegistrationForm;
