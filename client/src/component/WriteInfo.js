import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import{Container} from "react-bootstrap"
import Delete from './Delete'
const WriteInfo = () => {
   const [comment,setComment] = useState([])  
    useEffect(()=>{
        axios.post("http://localhost:3001/showWriteInfo",{
            user_id:sessionStorage.getItem('user_id')
        }).then((res)=>{
            console.log("데이터는",res.data)
            setComment(res)
            console.log("코멘트 데이타",comment)
        })
    },[])

  return (
    <Container>
    <div className="comment_box">
    <h2>Comment</h2>
    <hr></hr>
    {comment.data &&
        comment.data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <p style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.user_id.slice(0, -4) + "****"}
              </p>
            </div>
            <div>
              <p>{item.comment}</p>
            </div>

            <div>
              <p>{item.date}</p>
            </div>
              <Delete item={item}/>
            <hr></hr>
          </div>
        );
      })}
</div>
</Container>
  )
}

export default WriteInfo