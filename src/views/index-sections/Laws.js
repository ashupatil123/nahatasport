
import React from "react";

// reactstrap components
import {
  Container, Row,Button,Col
} from "reactstrap";

// core components

function Laws() {
  return (
    <>
   
            <div className="row mainheading">
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheading"><span className="allmainnheading1">Lawns</span><span className="allmainnheading2">Lawns</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>
            
 
            <Row xs="1" sm="2" md="4" style={{paddingRight:'5%',paddingLeft:'5%'}}>
              <Col> 
              <img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/homepagelawn1.png").default}
                  style={{ width: "100%" }}
                />
                <div className="lawnstext">
                  <h6 className="homecardheading" >Wedding,Reception,Parties</h6>
                  <p className="lawncard1">A wedding is a ceremony two people are united in marriage.Wedding traditions and..</p>
                  <div><Row>&nbsp;</Row></div>
                  <span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span>
                  </div>
                
                </Col>
              <Col>
              <img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/homepagelawn 2.png").default}
                  style={{ width: "100%" }}
                />
                <div className="lawnstext">
                  <h6  className="homecardheading" style={{textAlign:'center',paddingRight:'20%'}}>Decor</h6>
                  <p className="lawncard2">Wedding Decoration is a signicant viewpoint when you plan your fantasy wedding...</p>
                  <div className="homereadmorebtn" ><span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span></div>
                  </div>
                </Col>
                <Col> 
                <img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/homepagelawn 3.png").default}
                  style={{ width: "100%" }}
                />
                <div className="lawnstext">
                  <h6  className="homecardheading" style={{textAlign:'center',paddingRight:'20%'}}>Caterer</h6>
                  <p className="lawncard2">Wedding is a once in a life time auspicious occasion in India and we aim to help you create...</p>
                  <div className="homereadmorebtncreter" ><span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span></div>
                  </div>
                </Col>
              <Col>
              <img
                  alt="..."
                  className="img1 img-responsive1"
                  src={require("assets/img/homepagelawn 4.png").default}
                  style={{ width: "100%" }}
                />
                <div className="lawnstext">
                  <h6 className="homecardheading" style={{paddingLeft:'10%'}}>Event Management</h6>
                  <p className="lawncard2" >Wedding Decoration is a signicant viewpoint when you plan your fantasy wedding...</p>
                  <div className="homereadmorebtn" ><span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span></div>
                  </div>
                </Col> 
                <Col>
                </Col>
            </Row>
            <div className="row mainheading1">
                <div  className=" col  home1">  
                <Button className="morebtn" style={{backgroundColor:'#FFBE14',borderColor:'white', textAlign:'center'}}> More </Button></div>
              </div>

         
             
        
     
    </>
  );
}

export default Laws;
