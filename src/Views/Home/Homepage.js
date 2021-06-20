import React from 'react'
import classes from "./Homepage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {Link} from 'react-router-dom';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import Bitmap from "../../asset/Bitmap.png";
import Bitmap2 from "../../asset/Bitmap2.png";
import Bitmap3 from "../../asset/Bitmap3.png";
import Bitmap4 from "../../asset/Bitmap4.png";
import RDJ from "../../asset/RDJ.png";

function Homepage() {

 
    return (
        <div >
            
         <Container fluid style={{paddingBottom:"50px"}}>
         <Row>
          
            
               
               <div  className={classes.con}>
               <Header/>
               
                 
               <Row style={{paddingLeft:'5rem',paddingRight:'5rem'}}>
              <Col xl={4} lg={4} >
                   
                  </Col>

                  
                  <Col xl={8} lg={8}  >
                     
              

                      <p className={classes.mainhead}>Your thing that makes you,you.<br/>So, keep going.</p>
                      
                      <p className={classes.mainhead2}>The world is watching. Your thing can be their thing too!<br/>Go. Do your thing!!</p>
 
                      <Link to='/form' >
                      <button const path='' style={{ outline:'none' }} class="btn btn-primary" className={classes.getbtn}><p style={{color:"#FFFFFF",fontSize:"1.8rem",outline:'none'}}>GET STARTED</p></button>
                      </Link>
                    
                  </Col>

               </Row>
                </div>
                
            </Row>

           
           <Row className={classes.row2}>

               <Col xl={2} lg={2}>
                </Col>

                
               <Col xl={4} lg={4}>
               <p className={classes.square}>2,345</p>
               <p className={classes.squaretext}>BILLS COUNT</p>
                </Col>

                
               <Col style={{border:"2px"}} xl={4} lg={4}>
               
               <p className={classes.square}>2,345</p>
               <p className={classes.squaretext}>USERS</p>
               
                </Col>

                
               <Col xl={2} lg={2}>
                </Col>

               

           </Row>
             
{/* row 3 */}
             <Row>
                 <Col xl={2} lg={2}>
                 </Col>

               <Col xl={8} lg={8}>

               <Row style={{paddingTop:'3rem',paddingBottom:'3rem',paddingLeft:'1rem',paddingRight:'1rem'}}>
               <p className={classes.r3sub}>You get to do what you love. Period. You spread the word about brand, 
               causes, products, topics, issues and charities and earn from it!</p>
               </Row>

              
               </Col>  

               
               <Col xl={2} lg={2}>
                 </Col>
             </Row>

{/*row 4 */}
             <Row className={classes.row}>
                 <Col xl={1} lg={1}>
                </Col>
                   <Col xl={5} lg={{span:5,order:1}} md={{span:12,order:2}} sm={{span:12,order:2}} xs={{span:12,order:2}}>
                      
                      <div className={classes.img1} >
                      <img src={Bitmap}  class="img-thumbnail"></img>
                      </div>
                    </Col>

                    
                   <Col style={{paddingBottom:'2rem'}} xl={5} lg={{span:5,order:2}} md={{span:12,order:1}} sm={{span:12,order:1}} xs={{span:12,order:1}}>
                       <p className={classes.r4sub}>Paid Camapign</p>

                       <p className={classes.r4par}>There are no free lunches, right?
                     With these campaigns, you earn through your content. Every. Single. Time.</p>
                    </Col>
                </Row>



                <Row className={classes.row}>
                 <Col xl={1} lg={1}>
                </Col>
                   <Col xl={5} lg={5} style={{paddingBottom:'2rem'}}>
                   <p className={classes.r4sub}>Barter Camapign</p>

                   <p className={classes.r4par}>Creator life begins with trade-offs, right?
                  With these campaigns, you swap your skill with another creator or brand.</p>
                    </Col>

                    
                   <Col xl={5} lg={5}>
                
                <div className={classes.img2}>
                   <img src={Bitmap2} class="img-thumbnail"></img>
                </div>
                    </Col>
                </Row>




                <Row className={classes.row}>
                 <Col xl={1} lg={1}>
                </Col>
                   <Col xl={5} lg={{span:5,order:1}} md={{span:12,order:2}} sm={{span:12,order:2}} xs={{span:12,order:2}} >
                   <div className={classes.img1}>
                      <img src={Bitmap3}  class="img-thumbnail"></img>
                      </div>
                    </Col>

                    
                   <Col style={{paddingBottom:'2rem'}} xl={5} lg={{span:5,order:2}} md={{span:12,order:1}} sm={{span:12,order:1}} xs={{span:12,order:1}}>
                       <p className={classes.r4sub}>Content for DYT</p>

                       <p className={classes.r4par}>There are no free lunches, right?
                     With these campaigns, you earn through your content. Every. Single. Time.</p>
                    </Col>
                </Row>



                <Row className={classes.row}>
                 <Col xl={1} lg={1}>
                </Col>
                   <Col xl={5} lg={5} style={{paddingBottom:'2rem'}}>
                   <p className={classes.r4sub}>Social for Good</p>

                     <p className={classes.r4par}>Everyone has content worth something, right?
                     Sell custom content to us (exclusively or not) and earn some more moolah!
                      </p>
                    </Col>

                    
                   <Col xl={5} lg={5}>
                      
                   <div className={classes.img2}>
                   <img src={Bitmap4} class="img-thumbnail"></img>
                   </div>
                    </Col>
                </Row>

{/* row5 */}

                <Row style={{paddingTop:'10rem',paddingLeft:'1.5rem',paddingRight:'1.5rem'}}>
                <p className={classes.r5head}>Meet the team</p>
                </Row>

            <Row align="center" className={classes.teamimg}>
            
                <Col xl={3} lg={3} md={6} sm={6} className={classes.colimg} >
                <Card style={{ width: '25rem',borderRadius:'3rem',boxShadow:'0 0 15px gray'}}>
                <Card.Img variant="top" style={{borderRadius:'3rem'}} src={RDJ}/>
                 <Card.Body>
                   <Card.Title style={{fontSize:"2.4rem"}}>Laukik Chavan</Card.Title>
                  <Card.Text style={{fontSize:"2rem"}}>CEO</Card.Text>
                 </Card.Body>
                </Card>

                                
                </Col>


                <Col xl={3} lg={3} md={6} sm={6} className={classes.colimg}>
                
                <Card style={{ width: '25rem' ,borderRadius:'3rem',boxShadow:'0 0 15px gray' }}>
               <Card.Img variant="top" style={{borderRadius:'3rem'}} src={RDJ}/>
              <Card.Body>
                <Card.Title style={{fontSize:"2.4rem"}}>Shreyas Chaudhari</Card.Title>
                <Card.Text style={{fontSize:"2rem"}}>Campaign Manager</Card.Text>
    
             </Card.Body>
             </Card>
                   
                </Col>

                <Col xl={3} lg={3} md={6} sm={6} className={classes.colimg}>
                
                <Card style={{ width: '25rem' ,borderRadius:'3rem',boxShadow:'0 0 15px gray'}}>
            <Card.Img variant="top" style={{borderRadius:'3rem'}} src={RDJ}/>
             <Card.Body>
               <Card.Title style={{fontSize:"2.4rem"}}>Abhishek Mhamane</Card.Title>
             <Card.Text style={{fontSize:"2rem"}}>Product Designer</Card.Text>
    
             </Card.Body>
                </Card>
                                
                </Col>

                <Col xl={3} lg={3} md={6} sm={6} className={classes.colimg}>
                
                <Card style={{width:'25rem',borderRadius:'3rem'
                ,boxShadow:'0 0 15px gray' }}>
                   <Card.Img variant="top" style={{borderRadius:'3rem'}} src={RDJ}/>
                   <Card.Body>
                  <Card.Title style={{fontSize:"2.4rem"}}>Pooja Kumbharkar</Card.Title>
                  <Card.Text style={{fontSize:"2rem"}}>Product Designer</Card.Text>
    
                  </Card.Body>
                 </Card>
                                
                </Col>
           
            </Row>

         
        </Container>

        <Footer/> 
              
        </div>
    )
}

export default Homepage
