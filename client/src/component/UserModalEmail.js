import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button,Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const UserModalEmail = (props) => {
  const [email, setEmail] = useState("");
  const [ckEm, setCkEm] = useState(false);
  const [existEm, setExistEm] = useState(true);

  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
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

  const changeEmail = () => {
    if (ckEm && existEm) {
      axios
        .post("http://localhost:3001/changeEmail", {
          email: email,
          id: props.id,
        })
        .then((res) => {
          alert("이메일이 변경되었습니다!");
          props.onHide();
          window.location.reload();
        });
    } else {
      alert("이미 있는 이메일이 또는 이메일 형식을 확인해주세요");
    }
  };
  return (
    <Modal
      className="wjj"
      style={{ margin: 0 }}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          이메일 변경
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>변경하실 이메일을 입력하세요</h4>
        <Form>
        <Form.Control
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={checkEmail}
        ></Form.Control>
        {existEm ? (
          <div>
            {ckEm ? (
              <p>사용이 가능합니다!</p>
            ) : (
              <p>해당 이메일 형식을 준수해주세요 / Ex:gh9812301@naver.com</p>
            )}
          </div>
        ) : null}
        {existEm ? null : <p>해당 이메일은 이미 사용중인 이메일입니다.</p>}
        </Form>
        <div className="center">
        <Button onClick={changeEmail}>변경</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UserModalEmail;
