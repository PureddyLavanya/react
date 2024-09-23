import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Table,
  Form,
  Nav,
  Row,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const NurseBooking = () => {
  // form validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossOrigin="anonymous"
      ></script>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="iq-card">
        <div className="iq-card-body">
          <Form
            className="needs-validation w-100"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Col md="3">
                <FormLabel className="mb-0" htmlFor="validationCustom02">
                  Reg.No
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              <Col md="3">
                <FormLabel className="mb-0" htmlFor="validationCustom01">
                  Patient Name
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              <Col md="3">
                <FormLabel className="mb-0" htmlFor="validationCustom03">
                  Mobile No
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </Col>
              <Col md="3">
                <Button
                  type="submit"
                  className="me-1 mb-3 btn btn-primary"
                  style={{ marginTop: "27px" }}
                >
                  <i className="ri-search-line"></i> Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className="iq-card">
        <div className="iq-card-body p-0">
          <div className="iq-edit-list">
            <Nav
              as={"ul"}
              className="iq-edit-profile nav nav-pills list-inline mb-0 flex-md-row flex-column "
            >
              <Nav.Item as={"li"} className="col-md-3 p-0">
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="pill"
                  eventKey="Patient-information"
                >
                  New Patient(2)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"} className="col-md-3 p-0">
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="pill"
                  eventKey="Nurse Seen"
                >
                  Nurse Seen(1)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"} className="col-md-3 p-0">
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="pill"
                  eventKey="doctor-checking"
                >
                  Doctor Seen(0)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"} className="col-md-3 p-0">
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="pill"
                  eventKey="Visit Complete"
                >
                  Visit Complete(0)
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>

      <Row>
        <Col sm="12">
          <div className="iq-card">
            <div className="iq-card-body">
              <div id="table" className="table-editable">
                <div className="table-responsive-md w-100">
                  <Table className="text-center" bordered striped>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Patient Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Assigned</th>
                        <th>Visit Date and Time</th>
                        
                        <th>view Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>111</td>
                        <td>ramana</td>
                        <td>25</td>
                        <td>Admin</td>
                        <td>06-Jun-2024:10:00AM</td>
                        
                       
                        <td>
                          <Link to="/nurse-sectionapoinment">
                            <i className="fa-solid fa-hand-pointer"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>112</td>
                        <td>ravi</td>
                        <td>45</td>
                        <td>admin</td>
                        <td>06-Jun-2024:10:10AM</td>
                        
                        <td>
                          <Link to="/nurse-sectionapoinment">
                            <i className="fa-solid fa-hand-pointer"></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default NurseBooking;
