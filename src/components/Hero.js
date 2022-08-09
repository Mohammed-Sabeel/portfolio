import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Hero = () => {
  return (
    <div className="">

      <div className="mt-5">
        <Container>
          <Row>
            <Col md={6} className=" order-md-2">
              <div className="text-center mb-3 box" data-aos="fade-up">
                <img
                  src="images/sabeel.jpg"
                  alt=""
                  className="img-fluid rounded-circle w-100"
                />
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="">
                <div className="text-center " data-aos="fade-up">
                  <h3 className="dispaly_2 mb-2">
                    Nice to meet you,
                    <br /> I'm Mohammed Sabeel
                  </h3>
                  <h4 className="dispaly_3 mb-4">Front-End Developer</h4>
                  <br />
                  <p className="text-white">
                    Expert in developing responsive & interactive website.expert
                    in CSS3, HTML5, Bootstrap, JavaScript , React Js, Python and GitHub.
                  </p>
                  <br />
                  <hr />
                  <div className="mt-5">
                    <Row>
                      <Col md={6}>
                        <h3 className="dispaly_4 mb-2">
                          1 <span>+</span> Year of experience
                        </h3>
                      </Col>
                      <Col md={6}>
                        <h3 className="dispaly_4 mb-2">
                          10 <span>+</span> Successful projects
                        </h3>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="mt-3 pt-5 ">
                <a className="btn-grad" href="resume/MOHAMMED_SABEEL's_Resume.pdf" target="_blank">HIRE ME</a>
              </div>
              </div>
              
            </Col>
            
          </Row>
         
        </Container>
      </div>
    </div>
  );
};

export default Hero;
