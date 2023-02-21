import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const UserModal = (props) => {
  const [pw, setPw] = useState("");
  const [ckPw, setCkPw] = useState(false);

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
  const changePassword = (e) => {
    if(ckPw == true){
    axios
      .post("http://localhost:3001/changePassword", {
        password: pw,
        id: props.id,
      })
      .then((res) => {
        console.log("돌아온데이타", res);
        alert("변경이 완료되었습니다.")
        props.onHide()
      });}
      else{
        alert("형식에 맞는 비밀번호를 입력해주세요")
      }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          비밀번호 변경
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>변경하실 비밀번호를 입력하세요</h4>
        <input
          type="text"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onBlur={checkPassword}
        ></input>
        {ckPw ? <p>사용가능한 비밀번호 입니다</p> :(
          <p>숫자+영문자+특수문자 조합으로 8자리 이상 사용해주세요</p>
        )}
        <Button onClick={changePassword}>변경</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
