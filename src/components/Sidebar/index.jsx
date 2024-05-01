import React, { useState, useEffect } from "react";
import "./index.scss";
import dtu_logo from "../../assets/img/dtu_logo.png";
import hau_account from "../../assets/img/hau_account.png";
import { SquarePen } from "lucide-react";
import dataSidebar from "../../data/dataSidebar";
import { Link } from "react-router-dom";

function ChatList(props) {
    const { chatList } = props;

    return (
        <div>
            {chatList.length ? chatList.map(request => (
                <>
                    <li key={request.id}>
                        <Link to={`/chats/${request.id}`}>{request.name}</Link>
                    </li>
                </>
            )) : <div>
                    
                </div>}
        </div>
    )
}


const SideBar = () => {
    const [history, setHistory] = useState(dataSidebar);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let chats = []
        console.log("LocalStorage:", localStorage.getItem('chats'))
        chats = [JSON.parse(localStorage.getItem('chats'))]
        setHistory([...chats])
    }, []);

    function handleCreateNewChat(props) {
        const { value } = event.target; 
        console.log(value)
        setHistory((prevState) => {
            let temp = [{id: "123", name: "NewChat1"}, ...prevState]
            console.log("Temp:", temp)
            return temp;
        })
    }
    
    
    return (
        <div>
            <div id="sidebar" className="sidebar">
                <div className="header">
                    <div className="dtu_logo">
                        <a href="index.html">
                            <img
                                className="logo"
                                src={dtu_logo}
                                alt="dtu_logo"
                            />
                        </a>
                    </div>
                    <div className="new_chat" onClick={(event) => handleCreateNewChat(event)}>
                        <a href="#!">
                            <SquarePen color="black" fontSize={"200px"} />
                        </a>
                    </div>
                </div>
                <ul className="history">
                    <p className="subtitle">Lịch sử hội thoại</p>
                    <hr />
                    {history.map((value) => {
                        // return (
                        //     <>
                        //         <li key={value.id}>
                        //             <a href="#!">{value.text}</a>
                        //         </li>
                        //     </>
                        // );
                        return <ChatList chatList={value} />
                    })}
                </ul>
                <a href="#!" className="account">
                    <img src={hau_account} alt="account" />
                    <span>Võ Trần Hải Hậu</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;
