import React from "react";
import ScrollToTop from "views/index-sections/UpArrow.js";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
  ListGroup, ListGroupItem 
} from "reactstrap";

function Footer() {
 
  return (
    <>
        <div className="footerimg">
        <Container>   
                <Row  className="footerrow2" xs="1" sm="2" md="4">
                  <Col className="" style={{paddingTop:'5%'}}>
                      <Row>
                      <img
                            alt="..."
                            className="img1 img-responsive1"
                            src={require("assets/img/Nahatalogo.png").default}
                            style={{ width: "70%" }}
                        />
                      </Row>
                      <Row  className="footerrow3" >
                      <i class="fa fa-facebook-square" style={{ fontSize:'20px',width:'25px',height:'20px',backgroundColor:'white',color:'#FFBE14',borderRadius:'2px'}} ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-twitter" style={{fontSize:'20px',width:'20px',height:'20px',backgroundColor:'white',color:'#FFBE14',borderRadius:'2px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-google" style={{fontSize:'20px',color:'#FFBE14',width:'20px',height:'20px',backgroundColor:'white',color:'#FFBE14',borderRadius:'2px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-linkedin" style={{fontSize:'20px',width:'20px',height:'20px',backgroundColor:'white',color:'#FFBE14',borderRadius:'2px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </Row>
                  </Col>
                  <Col>
                    <ul className="footerul" >
                        <li className="footerlinks"> <i class="fa fa-angle-double-right"></i>Quick Links</li>
                        <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Lawns</li>
                        <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Sports Complex</li>
                        <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Sport Infra</li>
                        <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Contact</li>
                    </ul>
                  </Col>
                  <Col>
                  <ul className="footerul">
                      <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Services</li>
                      <li className="footerlinks"><i class="fa fa-angle-double-right"></i>Blog</li>
                  </ul>
                  </Col>


                  <Col>
                      <Row className="footerrow4">
                      <div className="footerres"><i className="fa fa-building " style={{fontSize:'25px',width:'40px',height:'40px',backgroundColor:'white',borderRadius:'50px',paddingTop:'2%',color:'#2F3077'}} /><span  className="footeraddressinfo">Address<div className="innertxt">29/1B,Sinhgad Road Before Wadgaon highway Bridge, next to Vidya Sahakari Bank,Vadgaon Budruk,Pune,Maharashtra 411041</div></span></div> 
                      </Row>
                      <Row>
                      <div className="footerres"><i className="fa fa-phone-square " style={{fontSize:'25px',width:'40px',height:'40px',backgroundColor:'white',borderRadius:'50px',paddingTop:'2%',color:'#2F3077'}} /><span  className="footeraddressinfo">contact<div  className="innertxt1" >+919822259458/7798467678</div></span></div> 
                      </Row>
                      <Row>
                      <div className="footerres"><i className="fa fa-facebook-square" style={{fontSize:'25px',width:'40px',height:'40px',backgroundColor:'white',borderRadius:'50px',paddingTop:'2%',color:'#2F3077'}} /><span  className="footeraddressinfo">Mail<div  className="innertxt2" >nahatasports@gmail.com</div></span></div>
                      </Row>
                  </Col>
                </Row>    
        </Container>
        </div>
          <Container className="footercontainer2">
            <Row xs="1" sm="2" md="2">
              <Col>
              <p className="footercontainer2txt">We’re the one stop material supplier in India for high quality sports materials,such as synthetic court,running track,artficial grass,sports infrastructure equipment’s and we’re also engaging in the construction of sports venues.
              </p>
              </Col>
              
              <Col>
                <Row xs="1" sm="2" md="2" style={{backgroundColor:'#FFBE14'}}>
                  <Col className="footerstaycol">
                  <i className="fa fa-envelope-o"style={{fontSize:'25px',width:'40px',height:'40px',backgroundColor:'#2F3077',borderRadius:'50px',paddingTop:'2%',color:'white'}}/>
                  <span  className="stayupdatetxt" >Stay Updated With Us</span>
  
                  </Col>
                  <Col className="inputbtntxt" style={{paddingTop:'3%'}}>
                  <Input className="footerinput" placeholder="Your Mail Here" type="email"></Input>
                  <Button className="footersubmitbtn" >Submit</Button>
                  </Col>
                  <div><Row>&nbsp;</Row></div>
                  <div><Row>&nbsp;</Row></div>
                </Row>
              </Col>
            </Row>
          </Container>
          
          <Row  xs="1" sm="2" md="6" className="footerrow6" >
              <Col className="lastcol" style={{color:'white',paddingTop:'2%',paddingBottom:'1%',fontFamily:'sans-serif'}}>Terms & Conditions </Col>
              <Col style={{color:'white',paddingTop:'2%',paddingBottom:'1%',fontFamily:'sans-serif'}}>Privacy Policy</Col>
              <Col style={{color:'white',paddingTop:'2%',paddingBottom:'1%',fontFamily:'sans-serif'}}>Sitemap</Col>
              <Col style={{color:'white',paddingTop:'1%',paddingBottom:'1%',fontFamily:'sans-serif'}}>
                  <ScrollToTop/>
              </Col>
              <Col style={{color:'white',paddingTop:'2%',paddingBottom:'1%',fontFamily:'sans-serif'}}> Developed by <span style={{color:'#FFBE14'}}>DATAVERSITY IT PVT.LTD</span> </Col>
              <Col style={{color:'white',paddingTop:'2%',paddingBottom:'1%',fontFamily:'sans-serif'}}>©2021.All Rights Reserved.</Col>
          </Row>
              
             
      
    </>
  );
}
export default Footer;
