import React from 'react'
import { Col, Container ,Row,Card, Form, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './FormPage.module.css'

function FormPage() {

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
            fontSize:"5rem",marginTop:"5rem",marginLeft:"4rem"}}>Details Form</h1>

            </Col>

            <Col xl={1} lg={1} md={1} sm={1}>
            </Col>
           
           </Row>
            

            <Row style={{marginTop:"-10rem",paddingBottom:"5rem"}}>
                
            <Col xl={1} lg={1} md={0} sm={0}>
            </Col>
           
            <Col xl={10} lg={10} >

                
            
            <Card  style={{boxShadow:'0 0 15px gray',borderRadius:"3rem",borderSize:"2rem",paddingBottom:"5rem"}} >

           <Form onSubmit={handleSubmit(onSubmit)}>

           <Row align="left" style={{marginLeft:"3rem",marginRight:"3rem"}}>
     
              
            <Col xl={6} lg={6} >
         
           <Form.Group controlId="name" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Name</Form.Label>
           <Form.Control type="name" placeholder="" {...register('name', { required: "this is required",pattern: {
           value: /^[a-zA-Z].*[\s\.]*$/,
           message: "Name should be in alphabets"
           }})} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.name?.message}</p>
           </Form.Group>

           <Form.Group controlId="mobile" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Phone Number</Form.Label>
           <Form.Control type="mobile" placeholder="" {...register('mobile', { required: "this is required",pattern: {
           value: /^(0|[+91]{3})?[7-9][0-9]{9}$/,
           message: "Mobile no should be in numbers"
           }})} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.mobile?.message}</p>

           </Form.Group>

           <Form.Group controlId="gsthh" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >GST Number</Form.Label>
           <Form.Control type="text" placeholder="" 
           {...register('gst', { required: "this is required",pattern: {
            value:/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/            ,
            message: "Invalid GST number"
            }})} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.gst?.message}</p>

           </Form.Group>
          </Col>

            <Col xl={6} lg={6} >
 
           <Form.Group controlId="comapanyname" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Company Name</Form.Label>
           <Form.Control type="companyname" placeholder="" {...register('companyname', { required: "this is required",pattern: {
           value: /^[a-zA-Z].*[\s\.]*$/,
           message: "Company name should be in alphabets"
           }})} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.companyname?.message}</p>

           </Form.Group>

           <Form.Group controlId="email" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Email Address</Form.Label>
           <Form.Control type="email" placeholder="" {...register('email', { required: "this is required",pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
            } })} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.email?.message}</p>

           </Form.Group>

           <Form.Group controlId="pan" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Pan Number</Form.Label>
           <Form.Control type="text" placeholder="" {...register('pan', { required: "this is required",pattern: {
            value: /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
            message: "invalid pan number"
            } })} style={{fontSize:"2rem"}}/>
           <p className={classes.msg}>{errors.pan?.message}</p>

           </Form.Group>
           </Col>

           </Row>
            
           <Row align="left" style={{marginLeft:"3rem",marginRight:"3rem"}}>


           <Col xl={12} lg={12} >
            
           <Form.Group controlId="address" style={{fontSize:"2rem",marginTop:"3rem"}}>
           <Form.Label  >Address</Form.Label>
           <Form.Control type="text" as="textarea" placeholder="" {...register('address', { required: "this is required",pattern: {
            value: /^[a-zA-Z0-9\s,'-]*$/,
            message: "invalid address"
            } })}rows={3} style={{fontSize:"2rem"}}/>
            <p className={classes.msg}>{errors.address?.message}</p>

           </Form.Group>

           <Form.Group controlId="termsandconditions" style={{marginTop:"3rem"}}>
           <Form.Check type="checkbox" style={{fontSize:"1.3rem"}} label="Accept Term & conditions."
           {...register('termsandconditions', { required: "Click this checkbox to accept term & conditions." })} />
            <p className={classes.msg}>{errors.termsandconditions?.message}</p>

          </Form.Group>
          
           </Col>

          

           </Row>
           

           <Row align="center" style={{marginLeft:"3rem",marginRight:"3rem"}}>
             
             <Col>
             <button style={{
               color:'white',
               fontSize:'2rem',
               fontWeight:'bold',
               marginTop:"3rem",
               border:"none",
               borderRadius:"10rem",backgroundColor:"#FF0071",outline:'none'}} 
               className={classes.button}
             
               >Submit</button>   
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

export default FormPage
