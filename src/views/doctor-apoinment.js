import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FormLabel,
  FormSelect,
  FormControl,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import "./styles.css";

const DoctorApoinmentForm = () => {
  const [careGiver, setCareGiver] = useState("");

  const handleCareGiverChange = (event) => {
    setCareGiver(event.target.value); // Update state based on selection
  };

  return (
    <Fragment>
      {/* Doctor Appointment Heading Row */}
      <Row className="justify-content-center mb-4"> {/* Separate Row for heading */}
        <Col md="8">
          <div className="iq-card-header d-flex justify-content-center">
            <div className="iq-header-title">
              <h3 className="card-title">Doctor Appointment</h3>
            </div>
          </div>
        </Col>
      </Row>

      {/* Form Row */}
      <Row className="justify-content-center"> {/* Separate Row for form */}
        <Col md="12">
          <Form>
            <Row className="form-group align-items-center">
              {/* Form Fields */}
              <Col md="4">
                <FormLabel className="mb-0" htmlFor="validationCustom02">
                  Patient ID
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="PatientID"
                />
                <div className="invalid-feedback">
                  Please select a Patient ID.
                </div>
              </Col>
              <Col md="4">
                <FormLabel className="mb-0" htmlFor="validationCustom01">
                  Patient Name
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="PatientName"
                  required
                />
                <div className="invalid-feedback">
                  Please select Patient Name.
                </div>
              </Col>
              <Col md="4">
                <FormLabel className="mb-0" htmlFor="validationCustom02">
                  Mobile No
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="MobileNo"
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Mobile No.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="VisitType">
                  Visit Type
                </FormLabel>
                <FormSelect id="VisitType" aria-label="Visit Type" required>
                  <option value="">Select Visit Type</option>
                  <option value="Out Patient">Out Patient</option>
                  <option value="In Patient">In Patient</option>
                </FormSelect>
                <div className="invalid-feedback">
                  Please select a Visit Type.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="AppointmentType">
                  Appointment Type
                </FormLabel>
                <FormSelect
                  id="AppointmentType"
                  aria-label="Appointment Type"
                  required
                >
                  <option value="">Select Appointment Type</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Non-Emergency">Non-Emergency</option>
                </FormSelect>
                <div className="invalid-feedback">
                  Please select an Appointment Type.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="Department">
                  Department
                </FormLabel>
                <FormSelect id="Department" aria-label="Department" required>
                  <option value="">Select Department</option>
                  <option value="General">General</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Gynecologist">Gynecologist</option>
                </FormSelect>
                <div className="invalid-feedback">
                  Please select a Department.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="DoctorName">
                  Doctor Name
                </FormLabel>
                <FormSelect id="DoctorName" aria-label="Doctor" required>
                  <option value="">Select Doctor Name</option>
                  <option value="Dr.Lakshmi">Dr.Lakshmi</option>
                  <option value="Dr.Kiran Kumar">Dr.Kiran Kumar</option>
                  <option value="Dr.Pooja">Dr.Pooja</option>
                  <option value="Dr.Mahesh">Dr.Mahesh</option>
                  <option value="Dr.Krishna Mohan">Dr.Krishna Mohan</option>
                </FormSelect>
                <div className="invalid-feedback">
                  Please select a Doctor.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="Datepage">
                  Appointment Date
                </FormLabel>
                <FormControl
                  type="date"
                  className="form-control"
                  id="Datepage"
                  required
                />
                <div className="invalid-feedback">
                  Please Select a valid Date.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="Time">
                  Time
                </FormLabel>
                <FormControl
                  type="time"
                  className="form-control"
                  id="Time"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Time.
                </div>
              </Col>

              <Col md="4">
                <FormLabel className="mb-0" htmlFor="MakeAppointment">
                  Which procedure do you want to make an appointment for?
                </FormLabel>
                <FormSelect
                  id="MakeAppointment"
                  aria-label="Make an appointment"
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Medical Examination">Medical Examination</option>
                  <option value="Doctor Check">Doctor Check</option>
                  <option value="Result Analysis">Result Analysis</option>
                  <option value="Check-Up">Check-Up</option>
                </FormSelect>
                <div className="invalid-feedback">Make an appointment.</div>
              </Col>
            </Row>
            <FormGroup className="form-group col-sm-12">
              <FormLabel className="mb-0">
                Please describe the symptoms or concerns that you would like to
                discuss during your telehealth appointment:
              </FormLabel>
              <div className="form-floating overflow-hidden">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                ></textarea>
                <FormLabel htmlFor="floatingTextarea2"></FormLabel>
              </div>
            </FormGroup>
            <FormGroup className="form-group mb-3">
              <FormCheck>
                <FormCheck.Input
                  className="form-check-input"
                  type="checkbox"
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
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DoctorApoinmentForm;
