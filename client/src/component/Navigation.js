import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { userInfoAction } from "../redux/aciton/userInfoAction";
import axios from "axios";
import {
  faUser,
  faUserPen,
  faHouse,
  faMagnifyingGlass,
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { zeroAction } from "../redux/aciton/zeroAction";
const Navigation = () => {
  const [checkLogin, setCheckLogin] = useState(true);
  const dispatch = useDispatch();

  const zero = () => {
    dispatch(zeroAction.zero());
  };
  useEffect(() => {
    const checkLoginState = () => {
      if (sessionStorage.getItem("user_id")) {
        setCheckLogin(false);
      }
    };
    checkLoginState();
  }, [sessionStorage.getItem("user_id")]);

  const onLogout = () => {
    sessionStorage.removeItem("user_id");
    setCheckLogin(true);
    // App 으로 이동(새로고침)
    document.location.href = "/";
  };
  const navigate = useNavigate();
  const [now, setNow] = useState(false);
  const userName = sessionStorage.getItem("user_id");
  const loginState = () => {
    if (sessionStorage.getItem("user_id")) {
      setNow(true);
    } else {
      setNow(false);
    }
  };

  useEffect(() => {
    loginState();
  }, [sessionStorage.getItem("user_id")]);
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand>
          <h2 onClick={() => navigate("/")}>PureNews</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
            <Link to="/search" className="nav-item" onClick={zero}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search
            </Link>
            {checkLogin ? (
              <div>
                <Link to="/login" className="nav-item">
                  <FontAwesomeIcon icon={faUser} />
                  Login
                </Link>
                <Link to="/join" className="nav-item">
                  <FontAwesomeIcon icon={faUserPen} />
                  Join
                </Link>
              </div>
            ) : null}
          </Nav>
          <Form className="drop_down">
            {now ? (
              <NavDropdown title={userName} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("myPage")}>
                  <FontAwesomeIcon icon={faCircleUser} /> 내정보
                </NavDropdown.Item>
                <NavDropdown.Item href="/write">
                  <FontAwesomeIcon icon={faUserPen} />
                  내가 쓴글
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>
                  <FontAwesomeIcon icon={faRightFromBracket} /> 로그아웃
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
