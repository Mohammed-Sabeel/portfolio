import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ImLinkedin} from 'react-icons/im';
import {AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
const About = () => {
  return (
    <div className="mt-3">
      <Container>
        <div className="sub-title">
          <span>/</span> ABOUT ME
        </div>
        <Row>
          <Col md={6} data-aos="fade-up">
            <div className="about_content">
              <h3 className="dispaly_2 mb-5">
                I’ve been developing websites since 2021
              </h3>
              <p className="text-white text-justify">
                Front-End Developer with 1 year experience working with
                javascript, HTML/CSS, Bootstrap, React JS to deliver exceptional
                customer experienc. Adept at contributing to a highly
                collaborative work environment,finding solutions, and
                determining customer satisfaction.
              </p>
            </div>
          </Col>
          <Col md={6} data-aos="fade-down">
            <div className="mb-5 text-center">
                <div className="text-200"> FOLLOW ME ON SOCIAL MEDIA</div>
              <div className="d-inline-flex">
                    
                        <li><a href="https://in.linkedin.com/in/mohammed-sabeel-s-79911820a?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer"><ImLinkedin className="linkedin"/></a></li>
                        <li><a href="https://github.com/Mohammed-Sabeel" target="_blank" rel="noopener noreferrer"><AiFillGithub className="github"/></a>  </li>
                        <li><AiOutlineInstagram className="insta" onClick={()=>alert("sorry i don't link the instagram 😏")}/></li>

                    
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
