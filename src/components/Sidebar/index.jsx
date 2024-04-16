import React, { useState } from "react";
import "./index.scss";
import dtu_logo from "../../assets/img/dtu_logo.png";
import hau_account from "../../assets/img/hau_account.png";
import { SquarePen } from "lucide-react";
import dataSidebar from "../../data/dataSidebar";

const SideBar = () => {
    const [history, setHistory] = useState(dataSidebar);
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
                    <div className="new_chat">
                        <a href="#!">
                            <SquarePen color="black" fontSize={"200px"} />
                        </a>
                    </div>
                </div>
                <ul className="history">
                    <p className="subtitle">Lịch sử hội thoại</p>
                    <hr />
                    {history.map((value) => {
                        return (
                            <>
                                <li key={value.id}>
                                    <a href="#!">{value.text}</a>
                                </li>
                            </>
                        );
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
