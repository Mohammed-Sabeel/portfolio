import React, { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import FloatingLabel from "react-bootstrap/FloatingLabel";


const Contact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mvoyopyk");
  if (state.succeeded) {
    return alert("Your form is submited successfully 😊");

  }
 

 

  return (
    <div>
      <section className="mt-5 pt-3 mb-5">
        <Container>
        <div className="sub-title">
          <span>/</span> CONTACT ME
        </div>
          <Row>
            <Col md={6} className="d-flex align-items-center justify-content-center mb-3">
              <div className="">
                <img src="images/contact.jpg" alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <Form
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                  
                    name="name"
                  />
                  <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    
                    name="email"
                    
                  />
                </Form.Group>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                  
                    name="mobile"
                    
                  />
                </Form.Group>
                <ValidationError
                  prefix="Mobile"
                  field="mobile"
                  errors={state.errors}
                />
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Message"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    name="message"
                   
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                   
                  />
                </FloatingLabel>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Contact Me
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
