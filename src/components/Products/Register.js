import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Header from '../Header'
import Footer from '../Footer'
import './Register.css'

export default class Register extends Component {
  render() {
    return (
      <>
        <Header />
        <Container fluid={true} className="register-main">
          <h4 className="register-heading">Seller's Registeration Form</h4>
          <Form className="form ">
            <Row>
              <Col lg={12}>
                <FormGroup>
                  <Label for="exampleSelect" sm={3}>
                    Identity Type
                  </Label>
                  <Col lg={9}>
                    <Input type="select" name="select">
                      <option selected>Select Identity Type</option>
                      <option value="aadhar">Aadhar card</option>
                      <option value="pancard">Pan Card</option>
                      <option value="voter">Voter Id</option>
                      <option value="passport">Passport</option>
                    </Input>
                  </Col>
                  {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <FormGroup>
                  <Label for="identity" sm={3}>Identity number</Label>
                  <Col lg={9}>
                    <Input
                      type="name"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter your Id number"
                      required
                    />
                  </Col>
                </FormGroup>
                <div className="valid-feedback">valid.</div>
                <div className="invalid-feedback">Please enter user id</div>
              </Col>
            </Row>
            <Row>
              <Col>

                <button type="submit" className="btn btn-primary mt-3 ml-3">
                  Register
                </button>
              </Col></Row>

          </Form>

        </Container>
        <Footer />
      </>
    );
  }
}

