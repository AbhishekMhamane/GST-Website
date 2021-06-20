import React from 'react'
import { Col, Container ,Row,Card, Form, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Contactpage.module.css';
import map from '../../asset/map.png';
function Contactpage() {

    const {register,reset,handleSubmit,formState:{errors}, }=useForm();

    const onSubmit = (data,e) =>{
      console.log(data);
      reset();
  
    }

    return (
        <div>
            <Container fluid style={{paddingLeft:"0px",paddingRight:"0px"}}>
           <div className={classes.back}>
           
           <Header/>
           </div>

           <Row className={classes.back2}>

            <Col xl={1} lg={1} md={1} sm={1}>
            </Col>
           
            <Col xl={10} lg={10} md={10} sm={10}>
            <h1  align="left" style={{color:"white",
            fontSize:"5rem",marginTop:"5rem",marginLeft:"4rem"}}>Contact</h1>

            </Col>

            <Col xl={1} lg={1} md={1} sm={1}>
            </Col>
           
           </Row>
            

            <Row style={{marginTop:"-10rem",paddingBottom:"5rem"}}>
                
            <Col xl={1} lg={1} md={0} sm={0}>
                
            </Col>
           
            <Col xl={10} lg={10} >

                
            
            <Card  style={{boxShadow:'0 0 15px gray',borderRadius:"3rem",borderSize:"2rem",paddingBottom:"2rem"}} >
              
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>

                <Col lg={{span:7,order:2}} lg={{span:5,order:1}} md={{span:12,order:2}} 
                sm={{span:12,order:2}} xs={{span:12,order:2}}>
                <img src={map} style={{borderRadius:"3rem"}} class="img-thumbnail"></img>
                </Col>

                <Col lg={{span:7,order:2}} lg={{span:7,order:2}} md={{span:12,order:1}} 
                sm={{span:12,order:1}} xs={{span:12,order:1}}>

                    <Row align="left" xl={12} lg={12} style={{paddingTop:'2rem',paddingLeft:'3rem',paddingRight:'3rem'}}>
                        <Col>
                         <p style={{textAlign:'left',fontSize:'4rem',fontWeight:'bold'}}>Get in touch</p>
                        </Col>
                    </Row>

                   <Row align="left" style={{paddingLeft:'3rem',paddingRight:'3rem'}}>

                    <Col xl={6} lg={6}>
                    <Form.Group controlId="name" style={{fontSize:"2rem",marginTop:"3rem"}}>
                      <Form.Label  >Name</Form.Label>
                      <Form.Control type="name" placeholder="" {...register('name', { required: "this is required",pattern: {
                      value: /^[a-zA-Z].*[\s\.]*$/,
                       message: "Name should be in alphabets"
                        }})} style={{fontSize:"2rem"}}/>
                       <p className={classes.msg}>{errors.name?.message}</p>
                          </Form.Group>
                    </Col>

                    
                    <Col xl={6} lg={6}>
                    <Form.Group controlId="email" style={{fontSize:"2rem",marginTop:"3rem"}}>
                    <Form.Label  >Email Address</Form.Label>
                    <Form.Control type="email" placeholder="" {...register('email', { required: "this is required",pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "invalid email address"
                     } })} style={{fontSize:"2rem"}}/>
                     <p className={classes.msg}>{errors.email?.message}</p>

                      </Form.Group>
                    
                    </Col>
                    </Row>

                    <Row align="left" style={{paddingLeft:'3rem',paddingRight:'3rem'}}>
                    
                    <Col xl={12} lg={12}>
                    <Form.Group controlId="address" style={{fontSize:"2rem",marginTop:"3rem"}}>
                     <Form.Label  >Address</Form.Label>
                     <Form.Control type="text" as="textarea" placeholder="" {...register('address', { required: "this is required",pattern: {
                     value: /^[a-zA-Z0-9\s,'-]*$/,
                      message: "invalid address"
                     } })}rows={3} style={{fontSize:"2rem"}}/>
                     <p className={classes.msg}>{errors.address?.message}</p>
                    </Form.Group>
                    </Col>

                    </Row>

                    <Row align="center" style={{paddingTop:"4rem",paddingBottom:'3rem',marginLeft:"3rem",marginRight:"3rem"}}>
             
             <Col >
             <button style={{
               color:'white',
               fontSize:'2rem',
               fontWeight:'bold',
               border:"none",
               borderRadius:"1rem",backgroundColor:"#FF0071",
               outline:'none'}} 
               className={classes.button}
             
               >SEND MESSAGE</button>   
             </Col>
          
            </Row>

                </Col>
    
              </Row>
             
             </Form>
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

export default Contactpage
