import React from 'react'
import { useSelector } from 'react-redux'

const SearchPage = () => {
  const {user} = useSelector((state)=> state.userInfo)
  console.log("여기는 서치페이지 오바",user)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage