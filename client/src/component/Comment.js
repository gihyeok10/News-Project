import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Comment = ({ searchData }) => {
  const [checkPoint, setCheckPoint] = useState(true);
  const [comment, setComment] = useState(""); //보낼 코멘트값
  let title = searchData.title; // 보낼 타이틀값
  const id = sessionStorage.getItem("user_id"); //유저 아이디값
  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const week = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  let dayOfWeek = week[now.getDay()];
  let today = todayYear + "-" + todayMonth + "-" + todayDate + "-" + dayOfWeek; //오늘 날짜
  const [commentData, setCommentData] = useState([]);

  const writeComment = (write) => {
    const client_id = "ryy3bh3ehm";
    const client_secret = "fHQulJQp9Pqo4e2I23e2u1kS4S0DWPh5DN3PGXaF";
    const con = { content: write };

    axios({
      url: "/v1/analyze",
      method: "post",
      data: JSON.stringify(con),
      headers: {
        "X-NCP-APIGW-API-KEY-ID": client_id,
        "X-NCP-APIGW-API-KEY": client_secret,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.document.sentiment);
      if (res.data.document.sentiment === "negative") {
        alert("입력하신 댓글을 분석한 결과 부정도가 높습니다. 긍정적인 댓글 부탁드립니다.");
      } else {
        if (sessionStorage.getItem("user_id")) {
          axios
            .post("http://localhost:3001/writeComment", {
              title: title,
              date: today,
              comment: comment,
              user_id: id,
            })
            .then((res) => {
              console.log("결과요", res);
              setCheckPoint(!checkPoint);
            });
        } else {
          alert("로그인이 필요합니다.");
        }
      }
    });
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/title", {
        title: title,
      })
      .then((res) => {
        setCommentData(res);
      });
  }, [checkPoint]);

  return (
    <div className="comment_box">
      <h2>Comment</h2>
      <hr></hr>
      {commentData.data &&
        commentData.data.map((item, index) => {
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
              <hr></hr>
            </div>
          );
        })}

      <div>
        <form>
          <input
            className="input_box3"
            type="text"
            placeholder="Please enter a comment"
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                writeComment(comment);
              }
            }}
          ></input>
          <div className="writeButton">
            <button type="reset" onClick={() => writeComment(comment)}>
              Comment
            </button>
          </div>
        </form>
        <div style={{ height: 20 }}></div>
      </div>
    </div>
  );
};

export default Comment;
