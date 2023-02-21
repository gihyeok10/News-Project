import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { newsAction } from '../redux/aciton/newsAction'
const HomePage = () => {

  const [category,setCategory] = useState("sport")
  const dispatch = useDispatch();
  const {newsData} = useSelector((state)=> state.news)
  useEffect(()=> {
    dispatch(newsAction.getNews(category))
  },[])

  console.log("뉴스데이타~",newsData)

  return (
    <div>HomePage</div>
  )
}

export default HomePage




//메인은 사진,타이틀 정도
// 나머지 기사는 크롤링을 해서 가져오자.