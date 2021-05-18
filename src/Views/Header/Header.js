import React from 'react'
import { Navbar,Nav,NavDropdown,Button } from 'react-bootstrap'
import classes from "./Header.module.css";

function Header() {
    return (
      
          
<div>

<Navbar  expand="lg">
  <Navbar.Brand href="#"><h2 className={classes.heading}>GST</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
      <div className={classes.div}>
    <Nav
      className="mr-auto my-2 my-lg-0"
      navbarScroll
    >
      <Nav.Link href="#action1"><p className={classes.head1}>REVIEW</p></Nav.Link>
      <Nav.Link href="#action2"><p className={classes.head2}>Q&A</p></Nav.Link>
      <Nav.Link href="#action3"><p className={classes.head2}>CONTACT</p></Nav.Link>
    </Nav>
    </div>
   
  </Navbar.Collapse>
</Navbar>
  
</div>

          


       
    )
}

export default Header
