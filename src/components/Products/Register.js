import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Header from '../Header'
import Footer from '../Footer'
import './Register.css'

const Register = (props) => {
  const initialInputValue = {
    idType: '',
    idNumber: ''
  }
  const [registerInput, setRegisterInput] = useState(initialInputValue);

  const inputHandle = (e) => {
    e.preventDefault();
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value
    })
  }

  const registerHandle = (e) => {
    e.preventDefault();
    const { idType, idNumber } = registerInput;
    let type;
    if (idType === "aadhar") {
      type = 0
    }
    else if (idType === "pancard") {
      type = 1
    }
    else if (idType === "voter") {
      type = 2
    }
    else {
      type = 3
    }
    props.register(type, idNumber);
    setRegisterInput(initialInputValue);
    console.log("register input value", idType, idNumber);
  }
  return (
    <>
      <Header />
      <Container fluid={true} className="register-main">
        <h4 className="register-heading">Seller's Registeration Form</h4>
        <Form className="form " onSubmit={registerHandle}>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <FormGroup>
                <Label for="exampleSelect" lg={3} sm={3} md={3}>
                  Identity Type
                </Label>
                <Col lg={9} sm={9} md={9}>
                  <Input type="select" name="idType" onChange={inputHandle} value={registerInput.idType}>
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
              <FormGroup className="align-items-center">
                <Label for="identity" sm={3} lg={3} md={3}>Identity number</Label>
                <Col lg={9} md={9} sm={9}>
                  <Input
                    type="name"
                    name="idNumber"
                    id="firstname"
                    placeholder="Enter your ID number"
                    required
                    value={registerInput.idNumber}
                    onChange={inputHandle}
                  />
                </Col>
              </FormGroup>
              <div className="valid-feedback">valid.</div>
              <div className="invalid-feedback">Please enter user id</div>
            </Col>
          </Row>
          <Row>
            <Col className="regBtn">

              <button type="submit" className="btn btn-primary mt-3 ml-3" >
                Register
              </button>
            </Col></Row>

        </Form>

      </Container>
      <Footer />
    </>
  );

}


export default Register;