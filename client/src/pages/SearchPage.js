import React from 'react'
import { useSelector } from 'react-redux'

const SearchPage = () => {
  const {user} = useSelector((state)=> state.userInfo)
  console.log(" dbwudw",user)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage