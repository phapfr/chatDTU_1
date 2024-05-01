import React from "react";
import bot_icon from "../../assets/img/bot.png";
import user_icon from "../../assets/img/user.png";
import dtu_logo from "../../assets/img/dtu_logo.png";
import "./index.scss";
import { Search } from "lucide-react";
import { useState } from "react";
import ChatDetailList from "./ChatDetailList";
import axios from "axios";
import api from "../../api";
import Typewriter from 'typewriter-effect'
import { ReactTyped } from 'react-typed'
import { useLocation } from "react-router-dom"
//import ChatDetailList from "../../components/ChatDetail";

function QuestionAnswer({ request }) {
  return (
    <div>
      <div className="user">
        <img src={user_icon} alt="user" />
        {request.question}
      </div>
      <div className="bot">
        <img src={bot_icon} alt="bot" />
        <span className="hehe">
          
        </span>
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(request.answer)
              .pauseFor(2000)
              .start();
            }}
          />
      </div>
    </div>
  );
}

const Home = () => {
  const [chatDetailList, SetChatDetailList] = useState([]);
  const [valueAnswer, setValueAnswer] = useState("");
  const location = useLocation();
  console.log(location.state);

  function createAnswer(questionAnswerData) {
    SetChatDetailList((prevState) => [...prevState, questionAnswerData]);
    //setValueAnswer("");
  }

  function UpdateAnswer(questionAnswerData) {
    SetChatDetailList((prevState) => {
      prevState[prevState.length-1].answer = questionAnswerData.answer
      return [...prevState]
    })
  }

  function handlePostMsg(event) {
    const { key } = event;
    const { value } = event.target; 
    const tempQuestion = value;

    if (key !== "Enter") {
      console.log("Hello");
      return;
    }

    setValueAnswer("")
    const data = {
      question: value,
      answer: "..."
      //answer: "hellosd sdfsdf sdafsd fsdafsdf dsafsad dsfasdaf sdafsd"
  }
    createAnswer(data);

    api
      .post("/query?query=" + value)
      //.post("/posts")
      .then((res) => {
        console.log({res});
        const newData = {
          question: value,
          answer: res.data.response
          //answer: "hellosd sdfsdf sdafsd fsdafsdf dsafsad dsfasdaf sdafsd"
        }
        console.log(newData)
        UpdateAnswer(newData)
      })
      .catch(() => {});
  }

  return (
    <div className="chat-content">
      <div>
        <a id="navbar" className="bar-button" href="#!">
          <i className="fa-solid fa-bars-staggered" />
        </a>
        <div className="mobile_dtu_logo">
          <img src={dtu_logo} alt="dtu" />
        </div>
        <div className="header">ChatDTU Tư Vấn Tuyển Sinh Đại Học Duy Tân</div>
        <ChatDetailList chatDetailList={chatDetailList} />
        <div className="non" />
        <div className="chat-search">
          <input
            onChange={(event) => setValueAnswer(event.target.value)}
            className="search"
            value={valueAnswer}
            type="text"
            placeholder="Đặt Câu Hỏi"
            onKeyDown={(event) => handlePostMsg(event)}
          />
          <a className="search-btn" href="#!">
            {/* <i className="fa-solid fa-magnifying-glass" /> */}
            <Search />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
