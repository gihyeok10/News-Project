import React from "react";
import { useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import UserModal from "../component/UserModal";
import UserModalEmail from "../component/UserModalEmail";
import { useState, useEffect } from "react";
import axios from "axios";
const MyPage = () => {
  const [pwModal, setPwModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const { user } = useSelector((state) => state.userInfo);
  
  
  console.log(pwModal);
  console.log("나의 정보:", user);
  return (
    <Container className="joinForm">
      <div className="wjj">
        <div className="h1">
          <h1>
            <FontAwesomeIcon icon={faUserLock} />
          </h1>
          <h2>User Information</h2>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">아이디:</Form.Label>
            <div>{user.id}</div>

            <Form.Label className="label">비밀번호:</Form.Label>
            <div>
              {user.password}
              <Button variant="primary" onClick={() => setModalShow2(true)}>
                비밀번호 변경
              </Button>
            </div>
            <UserModal
              id={user.id}
              pw={user.password}
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />

            <Form.Label className="label">이메일:</Form.Label>
            <div>
              {user.email} <Button onClick={() => setModalShow(true)}>이메일 변경</Button>
              
            </div>
            <UserModalEmail
              id={user.id}
              email={user.email}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Form.Label className="label">전화번호:</Form.Label>
            <div>{user.phone_number}</div>

            <div className="btn_center">
              <Button>저장</Button>
            </div>
          </Form.Group>
          <div className="btn_center"></div>
        </Form>
      </div>
    </Container>
  );
};

export default MyPage;

//전화번호,비밀번호,email  바꿀수 있게끔. clear
// 비밀번호,email 유효성 검사.
// 모달창 디자인 , 마이페이지 UI디자인 ,저장하면 화면 리프레시, 변경 누르면 ALERT 변경 되었습니다. 저장을 눌러주세요 하면서 모달창 닫음.
