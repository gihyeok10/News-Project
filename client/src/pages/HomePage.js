import React from 'react'
import { useSelector } from 'react-redux'
const HomePage = () => {
  const {user} = useSelector((state)=> state.userInfo)
  console.log(" dbwudw",user)
  return (
    <div>HomePage</div>
  )
}

export default HomePage