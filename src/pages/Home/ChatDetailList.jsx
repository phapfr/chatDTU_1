import React, { useEffect } from "react";
import { botIcon, userIcon } from "../../assets/img";
import { useLocation, useParams } from "react-router-dom";

function ChatDetailList(props) {
  const { chatDetailList } = props;
  const location = useLocation();
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    console.log("Change Chat, Send api")
    // 
  }, [location.pathname]);

  // const handleSubmit = (content) => {
  //   let dataLocal = localStorage.get("");

  //   dataLocal = JSON.parse(dataLocal ?? []);

  //   dataLocal.map((data) => [
  //     ...data,
  //     {
  //       id: id,
  //       content: content,
  //     },
  //   ]);
  // };

  return (
    <div className="chat-list">
      {chatDetailList.length ? (
        chatDetailList.map((request) => (
          <div>
            <div className="user">
              <img src={userIcon} alt="user" />
              {request.question}
            </div>
            <div className="bot">
              <img src={botIcon} alt="bot" />
              <span>{request.answer}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="bot">
          <img src={botIcon} alt="bot" />
          <span>"Hãy hỏi tôi điều gì đó về trường đại học Duy Tân"</span>
        </div>
      )}
    </div>
  );
}

export default ChatDetailList;
