import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { data } from "./carddata";

const Skills = () => {
 
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      };
  
  return (
    <div>
  
        <section className="mt-5 pt-3" data-aos="zoom-in">
        <Container>
        <div className="sub-title ">
          <span>/</span> My Skills
        </div>
        <div className="mb-4">
            <h5 className="text-white">My extensive list of skills</h5>
        </div>
        <Slider {...settings}>
        {data.map((curr) => {
            return (
                <div>
              <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Body>
              <Col md={12} className="">
                <div className="text-center mt-5 pt-2">
                    <span className="icons">{curr.image}</span>  
                </div>
                <Card.Title className="text-center">{curr.title}</Card.Title>
              </Col>
            </Card.Body>
      </Card>
      </div>
          );
        })}
     
    </Slider>
        </Container>
        </section>
      

    </div>
  )
}

export default Skills