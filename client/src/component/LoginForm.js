import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import {useDispatch,useSelector} from 'react-redux';
import { userInfoAction } from "../redux/aciton/userInfoAction";
import axios from "axios"
const LoginForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let userInformation = {}
  const checkLogin = () => {
   axios.post("http://localhost:3001/checkLogin",{
      id:id,
      password:password
    }).then((res)=> {
      console.log(res.data)
       if(res.data[0].cnt == 1){
        console.log("로그인됌!")
        alert("로그인되었습니다!")
        sessionStorage.setItem('user_id', id)
        userInfo();
        
        navigate('/')
      }
      else{
        alert("아이디 및 비밀번호가 다릅니다.")
      }
    })
  };


  const userInfo = () => {
    axios.post("http://localhost:3001/userInfo",{
      id:id,
      password:password
    }).then((res)=> {
      console.log(res.data[0])
      userInformation = res.data[0]
      dispatch(userInfoAction.getUserInfo(userInformation));
    })
  }
  return (
    <Container className="joinForm">
      <div className="wjj">
        <div className="h1">
          <h1>
            <FontAwesomeIcon icon={faUserLock} />
          </h1>
          <h2>User Login</h2>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">아이디</Form.Label>
            <Form.Control
              className="input_box"
              type="text"
              placeholder="아이디를 입력해주세요"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />

            <Form.Label className="label">비밀번호</Form.Label>
            <Form.Control
              className="input_box"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyPress={(e)=> {if(e.key == "Enter"){
                checkLogin();
              }}}
            />
          </Form.Group>
          <div className="btn_center">
            <Button onClick={checkLogin}>로그인</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;
