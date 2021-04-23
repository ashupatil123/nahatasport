import React from "react";
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
} from "reactstrap";

function About() {
 
  return (
    <>
         
         <div className="row mainheading">
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheading"><span className="allmainnheading1">About</span><span className="allmainnheading2"> About</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>   
            
      <div className="aboutmain">
       
           
        <Container className="aboutcontainer1">
            <Row xs="1" sm="2" md="2">
              <Col md="6">
                  <div className="abouthead">Nahata Sports</div>

                    <p className="Abouttext">
                    Since 1997 Nahata Sports have been designing, manufacturing,trading and installing in India and internationally,a wide range of sports infrastructure facilities.This enables the customers to entirely equip,not only the sports infrastructure solution but any spoing venue’s through our nonparallel guidance from start till the end of the project.Best product quality and best after sales service helps us to develop close relationships with all our clients.
                    </p>

                    <div className="row mainheadingbtn">
                      <div  className=" col md-4 home1">  
                      <Button style={{backgroundColor:'#2F3077'}}>Get A Quote</Button> <Button style={{backgroundColor:'#FFBE14',borderColor:'white'}}>Get More Info</Button></div>
                    </div>
                    </Col>
                    <Col md="6" className="aboutvideo">
                      <div class="vid-border">
                      <iframe width="100%" height="290px" border-radius="3%" src={require("assets/img/Homeaboutvideo.mp4").default}></iframe>
                  </div>
                    </Col>

            </Row>
        </Container>
      </div>
    </>
  );
}
export default About;
