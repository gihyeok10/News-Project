import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Emoj = ({searchData}) => {
  
  let [mood,setMood] = useState("")

  let [great,setGreat] = useState(null)
  let [notWant,setNotWant] = useState(null)
  let [angry,setAngry] = useState(null)
  let [fan,setFan] = useState(null)


  const countMood = (mo) => {
     setMood(mo)
     axios.post("http://localhost:3001/checkTitle",{
      title:searchData.title    
     }).then((res)=>{
      if(res.data[0].cnt == 0){
        axios.post("http://localhost:3001/createMood",{
          title:searchData.title,
          mood:mood
        })
      }
      else{
        axios.post("http://localhost:3001/countMood",{
          title:searchData.title,
          mood:mood
        })

        axios.post("http://localhost:3001/showMood",{
          title:searchData.title,
        }).then((res)=>{
          console.log("결과는??",res.data[0])
          setGreat(res.data[0].great)
          setNotWant(res.data[0].notWant)
          setAngry(res.data[0].angry)
          setFan(res.data[0].fan)
    
        })
      }
     })
  }


  useEffect(()=>{
    axios.post("http://localhost:3001/showMood",{
      title:searchData.title,
    }).then((res)=>{
      console.log("결과는??",res.data[0])
      setGreat(res.data[0].great)
      setNotWant(res.data[0].notWant)
      setAngry(res.data[0].angry)
      setFan(res.data[0].fan)

    })
  },[])
  



  return (
    <div className="emoji_box">
    <div className="emoji">
      <div onClick={()=>countMood("great")}>
        <h1>🙂</h1>
        <p>Great</p>
        <p style={{fontWeight:"bold"}}>{great}</p>
      </div>
      <div onClick={()=>countMood("notWant")}>
        <h1>😢</h1>
        <p>I do not want</p>
        <p style={{fontWeight:"bold"}}>{notWant}</p>
      </div>
      <div>
        <h1 onClick={()=>countMood("angry")}>😡</h1>
        <p>Angry</p>
        <p style={{fontWeight:"bold"}}>{angry}</p>
      </div>
      <div>
        <h1 onClick={()=>countMood("fan")}>😍</h1>
        <p>I'm a fan</p>
        <p style={{fontWeight:"bold"}}>{fan}</p>
      </div>
    </div>
  </div>
  )
}

export default Emoj



//내일 할일: 서치 페이지나, 댓글 페이지 엔터누르면 함수 호출
//내일 할일: 이모지 테이블 만들고 , 이모지 눌렀을때 해당 이모지 카운트 보다는 컬럼을 한개 만들어서 나중에 그 타이틀에 맞는 컬럼을 세준다!
//처음에 할게: title에 맞는 컬럼이 있는지 확인한다. 없다면? insert해서 새로운 칼럼을 만들어 낸다. 있다면?   (일단 성공)