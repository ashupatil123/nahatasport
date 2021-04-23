
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col, Button} from "reactstrap";
import Footer from "views/index-sections/Footer";

function Gallary() {
  return (

      <div>
         <div className="row mainheading" style={{paddingTop:'20%'}} >
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheading"><span className="allmainnheading1Gallary">Gallary</span><span className="allmainnheading2Gallary">Gallary</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>
            <div className="row mainheading">
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheadinggallary"><span className="allmainnheadinggallary1">Sport Complex</span><span className="allmainnheading2">Sport Complex</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>

            <Container>
              <Row style={{paddingBottom:'3%'}}>
                <Col md="12">
                <img
                      alt="..."
                      className="img img-responsive"
                      src={require("assets/img/Gallarybanimg1.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
              </Row>
              
              <Row xs="1" sm="2" md="3" style={{paddingBottom:'3%', }}>
                <Col>
                <img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/Gallaryimg2.png").default}
                  style={{ width: "100%" }}
                />
                </Col>
                <Col>
                    <Row xs="1" sm="2" md="1">
                    <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg3.png").default}
                      style={{ width: "100%" }}
                    />


                    </Row>
                    <Row xs="1" sm="2" md="1" style={{paddingBottom:'3%', }}>
                    <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg4.png").default}
                      style={{ width: "100%" }}
                    />
                    </Row>
                </Col>
                <Col><img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/Gallaryimg5.png").default}
                  style={{ width: "100%" }}
                /></Col>
              </Row>

              <Row Row xs="1" sm="2" md="3" style={{paddingBottom:'3%',}}>
                <Col style={{ paddingLeft:'2%', paddingBottom:'2%'}}>
                <div class="vid-borderlawns1">
                        <iframe width="100%" height="250px" border-radius="3%" src={require("assets/img/Gallaryvideo1.MP4").default}></iframe>
                      </div>
                </Col>
                <Col  style={{ paddingLeft:'2%' , paddingBottom:'2%'}}>
                <div class="vid-borderlawns1">
                        <iframe width="100%" height="250px" border-radius="3%" src={require("assets/img/Gallaryvideo2.MP4").default}></iframe>
                      </div>
                </Col>
                <Col  style={{ paddingLeft:'2%', paddingBottom:'2%'}}>
                <div class="vid-borderlawns1">
                        <iframe width="100%" height="250px" border-radius="3%" src={require("assets/img/Gallaryvideo3.mp4").default}></iframe>
                      </div>
                </Col>
              </Row>

              <div className="row mainheading">
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheadinggallary"><span className="allmainnheadinggallary1">Sport Infra</span><span className="allmainnheading2">Sport Infra</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>

            <Row Row xs="1" sm="2" md="3" style={{paddingBottom:'3%', }}>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg10.png").default}
                      style={{ width: "100%" }}
                    />
                     <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg13.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg11.png").default}
                      style={{ width: "100%" }}
                    />
                     <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg14.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg12.png").default}
                      style={{ width: "100%" }}
                    />
                     <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg15.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
              </Row>


              <Row Row xs="1" sm="2" md="3" style={{paddingBottom:'3%', }}>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg16.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg17.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg18.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
              </Row>

          
            <Row style={{paddingBottom:'3%', }}>
            <Col md="12">
                <img
                      alt="..."
                      className="img img-responsive"
                      src={require("assets/img/Gallaryimg9.png").default}
                      style={{ width: "100%", height:"100%"}}
                    />
                </Col>
            </Row>
            <Row Row xs="1" sm="2" md="3" style={{paddingBottom:'3%', }}>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg6.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg7.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
                <Col>
                <img
                      alt="..."
                      className="img1 img-responsive1"
                      src={require("assets/img/Gallaryimg8.png").default}
                      style={{ width: "100%" }}
                    />
                </Col>
              </Row>




            </Container>
            <Footer/> 
      </div>   
     
            
  );
}

export default Gallary;
