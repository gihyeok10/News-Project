import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Delete = ({item}) => {
    const commentDelete = () => {
            axios.post("http://localhost:3001/deleteComment",{
                id:item.id
            }).then((res)=>{
                alert("삭제되었습니다.")
                window.location.reload();
            })
    }
  return (
    <div className='delete_box'>
        <button onClick={commentDelete}>Delete</button>
    </div>
  )
}

export default Delete