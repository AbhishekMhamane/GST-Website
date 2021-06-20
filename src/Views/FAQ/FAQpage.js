import React, { useState } from 'react'
import { Col, Container ,Row,Card, Form, Button,Accordion,Tab,Nav} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './FAQpage.module.css';


function FAQpage() {

  const [toggle,setToggle]=useState(1);
  const [card,setCard]=useState(true);

  const generaldata=[
    {key:"0",title:"Lorem ipsum dolor sit amet,consectetur adipiscing elit ?"
    ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},

    {key:"1",title:"Lorem ipsum dolor sit amet,consectetur adipiscing elit ?"
    ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},

    {key:"2",title:"Lorem ipsum dolor sit amet,consectetur adipiscing elit ?"
    ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},

    {key:"3",title:"Lorem ipsum dolor sit amet,consectetur adipiscing elit ?"
    ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
  ];

  const handle=(data)=>{
   
    setToggle(data);
   
  };




    return (
        <div>
            <Container fluid style={{paddingLeft:"0px",paddingRight:"0px"}}>
           <div className={classes.back}>
           
           <Header/>
           </div>

           <Row className={classes.back2}>

            <Col xl={1} lg={1} md={1} sm={1}>
            </Col>
           
            <Col xl={5} lg={5} md={5} sm={12}>
            <h1  align="left" style={{color:"white",
            fontSize:"5rem",marginLeft:"4rem"}}>FAQs</h1>

            </Col>

            <Col xl={5} lg={5} md={5} sm={12} className={classes.btncol}>
            <button  class="btn btn-primary" style={{outline:'none'}} className={classes.getbtn}>
            <p style={{color:"#FFFFFF",fontSize:"1.8rem"}}>ASK SUPPORT</p></button>

            </Col>

            <Col xl={1} lg={1} md={1} sm={1}>
            </Col>
           
           </Row>
            

            <Row style={{marginTop:"-10rem",paddingBottom:"5rem"}}>
                
            <Col xl={1} lg={1} md={0} sm={0}>
                
            </Col>
           
            <Col xl={10} lg={10} >

                
            
            <Card  style={{boxShadow:'0 0 15px gray',borderRadius:"3rem",
            borderSize:"2rem",paddingTop:'3rem',paddingBottom:"3rem"}} >
            
            <Row style={{paddingLeft:'2rem',paddingRight:'2rem'}}>

            <Col xl={12} lg={12} align="left">
            <h1 style={{fontSize:'2.5rem',fontWeight:'bold'}}>Table of contents</h1>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
             <Row  style={{marginTop:'3rem'}}>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">

                <Nav.Item style={{marginTop:'-1rem'}}>
                <Nav.Link eventKey="first" onClick={()=>handle(1)} 
                style={{background:'white',margin:'0'}}> <p style={{fontSize:'2rem',
                color:toggle===1 ? "rgba(255, 0, 113, 1)":"rgba(145, 145, 145, 1)",fontWeight:'bold'}}>
                  {toggle===1 ? ">":""} General</p></Nav.Link>
                 </Nav.Item>

                <Nav.Item style={{marginTop:'-1rem'}}>
                 <Nav.Link eventKey="second" onClick={()=>handle(2)} 
                 style={{background:'white'}}>
                 <p style={{fontSize:'2rem',padding:'0',
                 color:toggle===2 ? "rgba(255, 0, 113, 1)":"rgba(145, 145, 145, 1)",fontWeight:'bold'}}>
                   {toggle===2 ? ">":""} Trust & safety</p></Nav.Link>
                </Nav.Item>

                <Nav.Item style={{marginTop:'-1rem'}}>
                 <Nav.Link eventKey="third" onClick={()=>handle(3)} style={{background:'white'}}>
                 <p style={{fontSize:'2rem',padding:'0',flex:'1',display:'flex',
                 color:toggle===3 ? "rgba(255, 0, 113, 1)":"rgba(145, 145, 145, 1)",fontWeight:'bold'}}>
                 {toggle===3 ? ">":""} Service</p></Nav.Link>
                </Nav.Item>

                <Nav.Item style={{marginTop:'-1rem'}}>
                 <Nav.Link eventKey="four" onClick={()=>handle(4)} style={{background:'white'}}>
                 <p style={{fontSize:'2rem',padding:'0',flex:'1',display:'flex',
                 color:toggle===4 ? "rgba(255, 0, 113, 1)":"rgba(145, 145, 145, 1)",fontWeight:'bold'}}>
                 {toggle===4 ? ">":""} Billing</p></Nav.Link>
                </Nav.Item>

                </Nav>
                </Col>

                <Col sm={8}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                
                  <Accordion defaultActiveKey="0"  >

                   {
                    generaldata.map((i)=>{

                    return(
      
                    <Card style={{paddingTop:'1rem',paddingBottom:'1rem',backgroundColor:'white',boxShadow:'0 0 2px gray',
                    borderRadius:'2rem', marginBottom:'2rem'}}> 
                    <Accordion.Toggle 
                    as={Card.Header} style={{backgroundColor:'white',border:'none',position:'relative'}}
                    eventKey={i.key}>
                    <h1 style={{fontSize:'1.8rem',fontWeight:'bold',marginLeft:'1rem',textAlign:"left"}}>{i.title}</h1> <div style={{fontSize:'2rem',float:'right',position:'absolute',
                    right:'1.5rem',top:'0.3rem'}}>+</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i.key} >
                    <Card.Body ><p style={{fontSize:'1.5rem',marginLeft:'1rem'}}>{i.content}</p></Card.Body>
                     </Accordion.Collapse>
                    </Card>
                    ) 
                    })}
                
                    </Accordion>
                    
                     </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <h1>Refer General Tab</h1>

                     </Tab.Pane>

                     <Tab.Pane eventKey="third">
                     <h1>Refer General Tab</h1>
                     </Tab.Pane>

                     <Tab.Pane eventKey="four">
                    <h1>Refer General Tab</h1>

                     </Tab.Pane>

                     </Tab.Content>
                     </Col>
                     </Row>
                     </Tab.Container>

            </Col>


           
            </Row>
     
            </Card>
 


            </Col>

            <Col xl={1} lg={1} md={0} sm={0}>
            </Col>
           
            
            </Row>
            <Footer/> 
         
           </Container>
        </div>
    )
}

export default FAQpage
