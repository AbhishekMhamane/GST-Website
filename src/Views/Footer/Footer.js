import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import classes from "./Footer.module.css";

import facebook from "../../asset/facebook.png";
import instagram from "../../asset/instagram.png";
import linkedin from "../../asset/linkedin.png";
import twitter from "../../asset/twitter.png";

function Footer() {
    return (
        <div>
            <Container fluid className={classes.con}>
                
                
             <Row >


             <Col xl={1} lg={1} md={1} sm={0} >
                 </Col>
               
                 <Col xl={6} lg={6} md={6} sm={12} >
                 <p className={classes.head}>GST</p>
                 </Col>

                 <Col xl={4} lg={4} md={4} sm={12} className={classes.icons} >
                   <Table borderless >
                       
                       <tr>
                           <td><img src={facebook}/></td>
                           <td><img src={facebook}/></td>
                           <td><img src={facebook}/></td>
                           <td><img src={facebook}/></td>
                       </tr>

                   </Table>

                 </Col>
                 
                 <Col xl={1} lg={1} md={1} sm={0} >
                 </Col>
                </Row>


                <Row className={classes.border}>
  

               <Col xl={3} lg={3}   >
                 <p className={classes.sub}>TEAM</p>
                 </Col>

                 <Col  xl={3} lg={3} >
                 <p className={classes.sub}>HOW IT WORKS</p>
                 </Col>
                 
                 <Col xl={3} lg={3}   >
                 <p className={classes.sub}>Q&A</p>
                 </Col>

                 <Col xl={3} lg={3}  >
                 <p className={classes.sub}>CONTACT</p>
                 </Col>

                 
             

                
               </Row>


               <Row >
  

              <Col xl={5} lg={5}   >
              <p style={{fontSize:"1.8rem",color:"#FFFFFF",paddingTop:"4rem",paddingBottom:"4rem"}}>© 2020 GST. ALL RIGHTS RESERVED</p>
              </Col>

               </Row>



               <Row  style={{paddingBottom:"2rem",marginLeft:"5rem",marginRight:"5rem"}}>
               <Col xl={3} lg={2}  >
               <p style={{fontSize:"1.8rem",color:"#FFFFFF"}}>TERMS & CONDITION</p>

                </Col>

                <Col xl={2} lg={2}   >
                <p style={{fontSize:"1.8rem",color:"#FFFFFF"}}>PRIVACY POLICY</p>

                </Col>

                <Col xl={2} lg={2}   >
                <p style={{fontSize:"1.8rem",color:"#FFFFFF"}}>COOKIE POLICY</p>

                </Col>

                <Col xl={5} lg={5}>
                <p style={{fontSize:"1.8rem",color:"#FFFFFF"}}>Any Questions? Drop Us A Line At howdy@gst.com</p>
                </Col>

                </Row>




            </Container>
        </div>
    )
}

export default Footer
