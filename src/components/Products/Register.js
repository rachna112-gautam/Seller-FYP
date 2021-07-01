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
          <Row lg={12} className="register-row">
            <Col lg={12} className="form-main">
              <Form className="form">
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <Label for="exampleSelect" sm={2}>
                        Identity Type
                      </Label>
                      <Col lg={12}>
                        <Input type="select" name="select">
                          <option>Adhar card</option>
                          <option>Pan Card</option>
                          <option>Voter Id</option>
                          <option>Passport</option>
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
                      <Label for="identity">Identity number</Label>
                      <Input
                        type="name"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter your Id number"
                        required
                      />
                    </FormGroup>
                    <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div>
                  </Col>
                </Row>

                <Button className="register--btn">
                  <a href="/profile">Register As Seller</a>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

