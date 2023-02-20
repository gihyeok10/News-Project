import React from 'react'
import { useSelector } from 'react-redux'

const MyPage = () => {
  const {user} = useSelector((state)=> state.userInfo)
  console.log("나의 정보:",user)
  return (
    <div>MyPage</div>
  )
}

export default MyPage



//전화번호,비밀번호,email  바꿀수 있게끔.