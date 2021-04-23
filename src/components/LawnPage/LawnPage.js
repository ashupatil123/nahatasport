
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col, Button} from "reactstrap";
import Footer from "views/index-sections/Footer";

function LawnPage() {
  return (
   
        <div>
          <div className="row mainheading" style={{paddingTop:'10%'}}>
              <div className="col md-4"><hr className="home-border"/></div>
              <div  className=" col md-4  allmainnheading"><span className="allmainnheading1">Lawns</span><span className="allmainnheading2">Lawns</span></div>
              <div className="col  md-4 " ><hr className="home-border"/></div>
            </div>
            <div  className=" lawnpagesubheading col md-4" style={{textAlign:'center',paddingRight:'5%' ,font:'Myanmar',color:'#2F3077'}}><h6>Home/Lawns</h6></div>
          <Container className="Lawnpagebanner" style={{maxWidth:'100%'}}>
            <Row>
              <img
                    alt="..."
                    className="img img-responsive"
                    src={require("assets/img/LawnsPagebanner.png").default}
                    style={{ width: "100%",height:'100%' }}
                  />
            
            </Row>
      
        </Container>

        <Container>

            <Container className="lawnsection1">
                  <Row xs="1" sm="2" md="2" >
                      <Col md="8" className="lawnpage-video-text">
                        <span>Nahata Lawns is spread over a area of 2 Acers which welcomes you embellished with Palm trees and beautifully landscaped grass.Delightfully charming lights creates an amazing romantic atmosphere which enlightens the inner lights in everyone.
                            </span>
                            <div><Row>&nbsp;</Row></div>
                            <span>It is a perfect location for all priceless memorable occasions, may it be weddings,receptions , parties , exhibitions , corporate events etc. Nahata Lawns has a lush green lawn area spread over an area of 22000 square feet and two indoor halls ,with a separate outdoor dining or buffet area.</span>
                            <div><Row>&nbsp;</Row></div>
                            <span>The inner halls can accommodate 200 guests while the whole premises can hosts more then 1500 guests.</span>
                      </Col>
                      <Col md="4">
                      <div class="vid-borderlawns">
                        <iframe width="100%" height="250px" border-radius="3%" src={require("assets/img/Lawnvideo.mp4").default}></iframe>
                      </div>
                      </Col>
                  </Row>
              </Container> 

              
              <Container>
                  <Row xs="1" sm="2" md="2">
                      <Col md="4">
                        <img
                          alt="..."
                          className="img1 img-responsive1"
                          src={require("assets/img/homepagelawn1.png").default}
                          style={{ width:"100%" }}
                        />
                        <div className="comlawnstext">
                          <h6 className="comcardheading">Wedding,Reception,Parties</h6>
                          <span className="cardtxt" >A wedding is a ceremony where two people united in marriage.Wedding traditions and...</span>
                          <div><Row>&nbsp;</Row></div>
                          <span className="comcardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span>
                          </div>
                      
                      </Col>
                      <Col md="8" style={{textAlign:'center', paddingTop:'7%'}}>
                          <h3 className="lawnspageplanning" style={{paddingTop:'5%',color:'#680112'}}>Wedding Planning</h3>
                          <div><Row>&nbsp;</Row></div>
                          <span className="lawnsection3txt">Marriage is a significant event in life that needs to be marked with grandeur.And we are all about grandeur.We infuse the celebrations with charm and emotions that perfectly portray the start of a new age.</span>
                          <div><Row>&nbsp;</Row></div>
                          <Button className="morebtn" style={{backgroundColor:'#FFBE14',borderColor:'white'}}> Packages </Button>  
                      </Col>
                  </Row>
              </Container> 

              <Container>
                  <Row xs="1" sm="2" md="2">
                      <Col md="8" style={{textAlign:'center', paddingTop:'7%'}}>
                      <h3 className="lawnspageplanning" style={{paddingTop:'5%',color:'#680112'}}>Decor</h3>
                          <div><Row>&nbsp;</Row></div>
                          <span className="lawnsection3txt">Decorations in Indian weddings have surpassed the typical standards of simple hanging or scrunched up drapes and clichéd floral arrangements a long time back. With constant newness brimming up and creative minds of wedding decorators curating unique and fresh trends.</span>
                          <div><Row>&nbsp;</Row></div>
                          <Button className="morebtn" style={{backgroundColor:'#FFBE14',borderColor:'white'}}> More </Button> 
                      </Col>
                      <Col md="4">
                      <img
                          alt="..."
                          className="img1 img-responsive1"
                          src={require("assets/img/homepagelawn 2.png").default}
                          style={{ width:"100%" }}
                        />
                  <div className="lawnstext">
                    <h6 className="decorcardheading1" style={{paddingRight:'20%'}}>Decor</h6>
                    <p  className="cardtxt" style={{color:"black", paddingRight:'10%'}}>Wedding Decoration is a signicant viewpoint when you plan your fantasy wedding...</p>
                    <span className="cardreadbtn" style={{paddingTop:'10%'}}>Read More <i class="fa fa-angle-double-right"></i> </span>
                    </div>    
                      </Col>
                  </Row>
              </Container> 
            
              <Container>
                  <Row xs="1" sm="2" md="2">
                      <Col md="4">
                      <img
                          alt="..."
                          className="img1 img-responsive1"
                          src={require("assets/img/homepagelawn 3.png").default}
                          style={{ width:"100%" }}
                        />
                  <div className="lawnstext">
                    <h6 className="comcateredheading">Caterer</h6>
                    <p className="cardtxt"  style={{color:"black", paddingRight:'20%'}}>A wedding is a ceremony two people are united in marriage.Wedding traditions and..</p>
                    <span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span>
                    </div>
                      
                      </Col>
                      <Col md="8" style={{textAlign:'center', paddingTop:'7%'}}>
                      <h3 className="lawnspageplanning" style={{paddingTop:'5%',color:'#680112'}}>Caterer</h3>
                          <div><Row>&nbsp;</Row></div>
                          <span className="lawnsection3txt">India is having a nice blend of various cultures. Every culture has it’s own customs for celebrations and food.Parties,Weddings, Birthdays, Anniversaries or even Small Gatherings, any celebration is incomplete without delicious and taste lingering food, with charm and emotions that perfectly portray the start of a new age.</span>
                          <div><Row>&nbsp;</Row></div>
                          <Button className="morebtn" style={{backgroundColor:'#FFBE14',borderColor:'white'}}> More </Button> 
                      </Col> 

                  </Row>
              </Container> 
             
              <Container>
                  <Row xs="1" sm="2" md="2">
                      <Col md="8" style={{textAlign:'center', paddingTop:'7%'}}>
                      <h3 className="lawnspageplanning" style={{paddingTop:'5%',color:'#680112'}}>Event Management</h3>
                          <div><Row>&nbsp;</Row></div>
                          <span className="lawnsection3txt">EventEvent Management Involves Planning, Organizing And Execution Of Live Events, There Are Different Types Of Event Management Services Which Could Include A Brand/Products Launch, An Exhibition, A Concert Or Even A Conference. … <br></br>This Involves The Organization Of A Personal Or A Professional Event. </span>
                          <div><Row>&nbsp;</Row></div>
                          <Button className="morebtn" style={{backgroundColor:'#FFBE14',borderColor:'white'}}> More </Button> 
                      </Col>
                      <Col md="4">
                      <img
                          alt="..."
                          className="img1 img-responsive1"
                          src={require("assets/img/homepagelawn 4.png").default}
                          style={{ width:"100%" }}
                        />
                  <div className="lawnstext">
                    <h6 className="cardheading" style={{paddingLeft:'20%'}}>Event Management</h6>
                    <p  className="cardtxt" style={{color:"black",paddingRight:'10%'}}>specialize in event management work with budgets,schedules, and vendors to create the best possible events for their clients..</p>
                    <span className="cardreadbtn">Read More <i class="fa fa-angle-double-right"></i> </span>
                    </div>    
                      </Col>
                  </Row>
              </Container> 
          
        
            </Container>
            <Footer/>
          </div>        
  );
}

export default LawnPage;
