import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Happyhours() {

  return (
    <>
      <div className="happymainsec">
      <div className="row mainheading">
              <div className="col md-4" ><hr className="home-border" /></div>
              <div  className=" col md-4  allmainnheading"><span className="allmainnheadingHappy1">Happy Hours</span><span className="allmainnheadingHappy2"> Happy Hours</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>
              <Container className="happyslider">
                <Carousel responsive={responsive}>
                  <div className="sliderimg"><img 
                  alt="..."
                  className="img img-responsive"
                  src={require("assets/img/Happy1.png").default}
                  style={{ width: "100%" }}
                /></div>
                  <div className="sliderimg"> <img
                  alt="..."
                  className="img img-responsive"
                  src={require("assets/img/Happy3.png").default}
                  style={{ width: "100%" }}
                /></div>
                  <div className="sliderimg"> <img
                  alt="..."
                  className="img img-responsive"
                  src={require("assets/img/Happy1.png").default}
                  style={{ width: "100%" }}
                /></div>
                  <div className="sliderimg"> <img
                  alt="..."
                  className="img img-responsive"
                  src={require("assets/img/Happy3.png").default}
                  style={{ width: "100%" }}
                /></div>
                </Carousel>
                </Container>    


            
         
      </div>
    </>
  );
}

export default Happyhours;
