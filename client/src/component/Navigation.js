import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPen,
  faHouse,
  faMagnifyingGlass,
  faCircleUser,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar, NavDropdown,Form,Button } from "react-bootstrap";
const Navigation = () => {
  const navigate = useNavigate()
  const [now,setNow] = useState(true)

  const userName = sessionStorage.getItem("user_id") 
  const loginState = () => {
 

  }
  return (
    <Navbar bg="light" variant="dark" expand="lg" className='nav-bar'>
    <Container fluid>
      <Navbar.Brand><h2 onClick={() => navigate('/')}>News World</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to='/' className='nav-item'><FontAwesomeIcon icon={faHouse}/> Home</Link>
          <Link to='/search' className='nav-item'><FontAwesomeIcon icon={faMagnifyingGlass}/>Search</Link>
          <Link to='/login' className='nav-item'><FontAwesomeIcon icon={faUser}/>Login</Link>
          <Link to='/join' className='nav-item'><FontAwesomeIcon icon={faUserPen}/>Join</Link>


        </Nav>
        <Form  className="drop_down">
     {now ?    
   <NavDropdown title={userName} id="basic-nav-dropdown">
    <NavDropdown.Item href="/mypage"><FontAwesomeIcon icon={faCircleUser} /> 내정보</NavDropdown.Item>
    <NavDropdown.Item href="/join">
      <FontAwesomeIcon icon={faUserPen} />내가 쓴글</NavDropdown.Item>
   
   
    
    <NavDropdown.Divider />
    <NavDropdown.Item href="/login">
      <FontAwesomeIcon icon={faRightFromBracket} /> 로그아웃
    </NavDropdown.Item>
  </NavDropdown> 
     : null}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
  };

  export default Navigation;
