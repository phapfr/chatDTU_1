import React from "react";
import { botIcon, userIcon } from "../../assets/img";

function ChatDetailList(props) {
    const { chatDetailList } = props;

    return (
        <div className="chat-list">
            {chatDetailList.length ? chatDetailList.map(request => (
                <div>
                    <div className="user">
                        <img src={userIcon} alt="user" />
                        {request.question}
                    </div>
                    <div className="bot">
                        <img src={botIcon} alt="bot" />
                        <span>
                            {request.answer}
                        </span>
                    </div>
                </div>
            )) : <div className="bot">
                    <img src={botIcon} alt="bot" />
                    <span>
                    "Hãy hỏi tôi điều gì đó về trường đại học Duy Tân"
                    </span>
                </div>}
        </div>
    )
}

export default ChatDetailList