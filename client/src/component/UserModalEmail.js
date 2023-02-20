import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
const UserModalEmail = (props) => {
    const [email,setEmail] = useState("")
    const changeEmail = () => {
        axios.post("http://localhost:3001/changeEmail",{
            email:email,
            id:props.id
        }).then((res) => {
            console.log("돌아온데이타",res)
        })
    }
  return (
    <Modal
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
        <input type="text" onChange={(e) => {setEmail(e.target.value)}}></input>
        <Button onClick={changeEmail}>변경</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModalEmail;
