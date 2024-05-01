import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./index.scss";
import dtu_logo from "../../assets/img/dtu_logo.png";

function Registration() {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");

    const handleNameChange = (value) => {
        setName(value);
    };
    const handlePhoneNOChange = (value) => {
        setPhoneNo(value);
    };
    const handleAddressChange = (value) => {
        setAddress(value);
    };
    const handleSave = () => {
        const data = {
            Name: name,
            phoneNo: phoneNo,
            address: address,
            ISActive: 1,
        };
        const url = "https://localhost:44335/api/Account/Register";
        axios
            .post(url, data)
            .then((result) => {
                alert(result.data);
            })
            .catch((error) => {
                alert(error);
            });
    };
    return (
        <Fragment>
            <div className="sign-in-up">
                <div className="sign-in-up-box">
                    <div className="logo">
                        <img src={dtu_logo} alt="dtu_chatbot" />
                    </div>
                    <div className="logo_responsives">
                        <img src="img/mobile_dtu_logo.png" alt="dtu_chatbot" />
                    </div>

                    <div className="title">
                        ChatDTU Tư Vấn Tuyển Sinh Đại Học Duy Tân
                    </div>
                    <div className="create-account">Tạo Tài Khoản</div>
                    <div className="group">
                        <p>Name</p>
                        <div className="box">
                            <i className="fa-solid fa-user-plus"></i>
                            <input
                                type="text"
                                id="txtName"
                                placeholder="Enter Name"
                                onChange={(e) =>
                                    handleNameChange(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="group">
                        <p>Password</p>
                        <div className="box">
                            <i class="fa-solid fa-phone"></i>
                            <input
                                type="password"
                                id="txtPhoneNo"
                                placeholder="Enter Password"
                                onChange={(e) =>
                                    handlePhoneNOChange(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="group">
                        <p>Password</p>
                        <div className="box">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <input
                                type="password"
                                id="txtAddress"
                                placeholder="Enter Password again"
                                onChange={(e) =>
                                    handleAddressChange(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <button className="sign-btn" onClick={() => handleSave()}>
                        Đăng Ký
                    </button>
                    <span className="desc">Bạn đã có tài khoản? </span>
                    {/* <a href="#!" className="sign-link">
                        Đăng Nhập
                    </a> */}
                    <Link to="/Login" className="sign-link">
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}
export default Registration;