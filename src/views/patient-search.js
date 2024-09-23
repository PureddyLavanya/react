import React, { Fragment, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Table,
  Col,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";

const PatientSearch = () => {
  // form validation
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

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
                <Button type="submit" className="me-1 mb-3 btn btn-primary"style={{ marginTop: '27px' }}>
                  <i className="ri-search-line"></i> Search
                </Button>
              </Col>
            </Row>
          </Form>
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Appointment</th>
                        <th>Edit Patient</th>
                        <th>View Patient</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>12345</td>
                        <td>ramana</td>
                        <td>rapaka</td>
                        <td>1234567890</td>
                        <td>
                          <Link to="/doctor-apoinment">
                            <i className="ri-stethoscope-fill"></i>
                          </Link>
                        </td>
                        <td>
                          <Link to="/nurse-sectionap1111">
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                        </td>
                        <td>
                          <Link to="/sampledata">
                            <i className="fa-solid fa-hand-pointer"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>12345</td>
                        <td>ramana</td>
                        <td>rapaka</td>
                        <td>1234567890</td>
                        <td>
                          <Link to="/doctor-apoinment">
                            <i className="ri-stethoscope-fill"></i>
                          </Link>
                        </td>
                        <td>
                          <Link to="/nurse-sectio1233">
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                        </td>
                         <td>
                          <Link to="/sampledata">
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

export default PatientSearch;
