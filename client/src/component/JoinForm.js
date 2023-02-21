import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faU, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  const navigate = useNavigate();
  const [ckPw, setCkPw] = useState(true);
  const [ckEm, setCkEm] = useState(true);
  const [ckPh, setCkPh] = useState(true);
  const [ckId, setCkId] = useState(true);
  const [existEm, setExistEm] = useState(true);

  const checkPhonenumber = (e) => {
    // '-' 입력 시
    var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("핸드폰번호 유효성 검사 :: ", regExp.test(e.target.value));

    if (regExp.test(e.target.value) == false) {
      setCkPh(false);
    } else {
      setCkPh(true);
    }
  };

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
    if (regExp.test(e.target.value) == false) {
      setCkPw(false);
    } else {
      setCkPw(true);
    }
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
    if (regExp.test(e.target.value) == false) {
      setCkEm(false);
    } else {
      setCkEm(true);
    }

    axios
      .post("http://localhost:3001/checkEmail2", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data[0].cnt >= 1) {
          setExistEm(false);
        } else {
          setExistEm(true);
        }
      });
  };

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");

  const adduser = () => {
    if(ckEm&&ckId&&ckPh&&existEm){
    axios
      .post("http://localhost:3001/adduser", {
        password: password,
        name: name,
        phone_number: phone_number,
        id: id,
        email: email,
      })
      .then((res) => {
        console.log(name);
        console.log("성공!");
        alert(`${name}님 회원가입을 축하 드립니다`);
        navigate("/login");
      });
    }else{
      alert("양식에 맞게 작성해주세요!")
    }
  };

  const selectuser = () => {
    axios
      .post("http://localhost:3001/selectid", {
        id: id,
      })
      .then((res) => {
        console.log("결과값", res.data);
        if (res.data[0].cnt === 1) {
          setCkId(false);
        } else {
          setCkId(true);
        }
      });
  };

  return (
    <Container className="joinForm">
      <div className="wjj">
        <div className="h1">
          <h1>
            <FontAwesomeIcon icon={faUserLock} />
          </h1>
          <h2>User Sign Up</h2>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label2">이름</Form.Label>
            <Form.Control
              className="input_box"
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Form.Label className="label">아이디</Form.Label>
            <Form.Control
              className="input_box"
              type="text"
              placeholder="아이디를 입력해주세요"
              onBlur={selectuser}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            {ckId ? null : <p>해당 아이디는 이미 사용중입니다.</p>}
            <Form.Label className="label">비밀번호</Form.Label>
            <Form.Control
              className="input_box"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onBlur={checkPassword}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {ckPw ? null : (
              <p>숫자+영문자+특수문자 조합으로 8자리 이상 사용해주세요</p>
            )}
            <Form.Label className="label">연락처</Form.Label>
            <Form.Control
              type="text"
              placeholder="연락처를 입력해주세요"
              onBlur={checkPhonenumber}
              onChange={(e) => {
                setPhone_number(e.target.value);
              }}
            />
            {ckPh ? null : <p>- 없이 연락처를 입력해주세요</p>}

            <Form.Label className="label">이메일</Form.Label>
            <Form.Control
              type="text"
              placeholder="이메일을 입력해주세요"
              onBlur={checkEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {existEm ? (
              <div>{ckEm ? null : <p>이메일 형식을 준수해주세요</p>}</div>
            ) : null}
            {existEm ? null : <p>해당 이메일은 이미 사용중인 이메일입니다!</p>}
          </Form.Group>
          <div className="btn_center">
            <Button onClick={adduser}>회원가입</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default JoinForm;

//회원가입 유효성 검사 오늘 및 디자인 할수있으면 하기..
