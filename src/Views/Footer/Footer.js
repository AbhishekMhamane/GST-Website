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
                
                
             <Row style={{paddingLeft:'5rem',paddingRight:'5rem'}}>


             
               
                 <Col xl={8} lg={8} md={12} sm={12} >
                 <p className={classes.head}>GST</p>
                 </Col>

                 <Col xl={4} lg={4} md={12} sm={12} className={classes.icons} >
                   <Table borderless >
                       
                       <tr>
                           <td><img style={{width:'4rem'}} src={facebook}/></td>
                           <td><img style={{width:'4rem'}} src={twitter}/></td>
                           <td><img style={{width:'4rem'}} src={instagram}/></td>
                           <td><img style={{width:'4rem'}} src={linkedin}/></td>
                       </tr>

                   </Table>

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
  

              <Col xl={5} lg={5} >
              <p className={classes.rights}>© 2020 GST. ALL RIGHTS RESERVED</p>
              </Col>

               </Row>



               <Row  style={{paddingBottom:"2rem",marginLeft:"4rem",marginRight:"4rem"}}>
               <Col xl={2} lg={2} >
               <p className={classes.termsmenu}>TERMS & CONDITION</p>

                </Col>

                <Col xl={2} lg={2}   >
                <p className={classes.termsmenu}>PRIVACY POLICY</p>

                </Col>

                <Col xl={2} lg={2}   >
                <p className={classes.termsmenu}>COOKIE POLICY</p>

                </Col>

                <Col xl={6} lg={6}>
                <p className={classes.anyquestion}>Any Questions? Drop Us A Line At howdy@gst.com</p>
                </Col>

                </Row>



        </Container>
        </div>
    )
}

export default Footer
