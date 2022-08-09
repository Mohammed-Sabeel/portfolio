import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { projectData } from "./carddata";
const Projects = () => {
  return (
    <div>
      <section className="mt-5 pt-3 mb-4">
        <Container>
          <div className="sub-title ">
            <span>/</span> My Projects
          </div>
          <div className="mt-5">
            <Row>
              {projectData.map((currEle) => {
                return (
                  <Col md={4} xs={6} className='mb-3' data-aos={currEle.aos}>
                    <a href={currEle.link} target={"_blank"}>

                    
                    <Card className='h-100'>
                      <Card.Img
                        variant="top"
                        src={currEle.images}
                        className="img-fluid w-100 "
                      />
                      <Card.Body>
                        <Col md={12} className="">
                          <div className="text-center ">
                            <Card.Title className="text-50-white">
                              {currEle.title}
                            </Card.Title>
                            <Card.Text className="">
                              {currEle.para}
                            </Card.Text>
                          </div>
                        </Col>
                      </Card.Body>
                    </Card>
                    </a>
                  </Col>
                );
              })}
              <div className="text-center mt-3">
              <h3 className="text-white">On Going Projects 3</h3>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
