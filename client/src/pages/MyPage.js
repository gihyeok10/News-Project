import React from "react";
import { useSelector } from "react-redux";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faUserPen } from "@fortawesome/free-solid-svg-icons";
import UserModal from "../component/UserModal";
import UserModalEmail from "../component/UserModalEmail";
import { useState, useEffect } from "react";
import axios from "axios";
const MyPage = () => {
  const [pwModal, setPwModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  let { user } = useSelector((state) => state.userInfo);

  console.log(pwModal);
  console.log("나의 정보:", user);
  return (
    <div className="tile">
    <Container className="joinForm">
      <div className="wjj">
        <div className="h1">
          <h1>
            <FontAwesomeIcon icon={faUserPen} />
          </h1>
          <h2>User Information</h2>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">아이디:</Form.Label>
            <div>{user.id}</div>
            <hr></hr>
            <Form.Label className="label">비밀번호:</Form.Label>
            <Row>
              <Col> {user.password}</Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => setModalShow2(true)}
                  className="btn2"
                >
                  비밀번호 변경
                </Button>
              </Col>
            </Row>

            <hr></hr>
            <UserModal
              id={user.id}
              pw={user.password}
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />

            <Form.Label className="label">이메일:</Form.Label>
            <Row>
            <Col>
              {user.email}
              </Col>
              <Col>
              <Button
                variant="danger"
                onClick={() => setModalShow(true)}
                className="btn3"
              >
                이메일 변경
              </Button>
              </Col>
              </Row>
            <hr></hr>
            <UserModalEmail
              id={user.id}
              email={user.email}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Form.Label className="label">전화번호:</Form.Label>
            <div>{user.phone_number}</div>
            <hr></hr>
            <div className="btn_center">
              <Button onClick={() => window.location.reload()}>저장</Button>
            </div>
          </Form.Group>
          <div className="btn_center"></div>
        </Form>
      </div>
    </Container>
    </div>
  );
};

export default MyPage;

//전화번호,비밀번호,email  바꿀수 있게끔. clear
// 비밀번호,email 유효성 검사. clear
// 모달창 디자인  clear, ,저장하면 화면 리프레시, 변경 누르면 ALERT 변경 되었습니다. 저장을 눌러주세요 하면서 모달창 닫음. clear
//마이페이지 UI디자인
//조인창 이메일 유효성 검사.
//로그인 했을때 로그인 join창 없애기