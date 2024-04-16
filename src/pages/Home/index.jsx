import React from "react";
import bot_icon from "../../assets/img/bot.png";
import user_icon from "../../assets/img/user.png";
import dtu_logo from "../../assets/img/dtu_logo.png";
import "./index.scss";
import { Search } from "lucide-react";

const Home = () => {
    return (
        <div className="chat-content">
            <div>
                <a id="navbar" className="bar-button" href="#!">
                    <i className="fa-solid fa-bars-staggered" />
                </a>
                <div className="mobile_dtu_logo">
                    <img src={dtu_logo} alt="dtu" />
                </div>
                <div className="header">
                    ChatDTU Tư Vấn Tuyển Sinh Đại Học Duy Tân
                </div>
                <div className="chat-list">
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span> Xin chào, tôi có thể giúp gì cho bạn!</span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành công nghệ phần mềm năm nay bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học Duy Tân năm học 2023 – 2024 dao động
                            trong khoảng từ 11.000.000 – 31.000.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học Duy Tân, sinh viên cần phải đóng học phí cố
                            định 16 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Ngành này có tổng cộng bao nhiêu tín chỉ?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span> 250 tín chỉ</span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Ngành này yêu cầu bằng ngoại ngữ nào?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>Toeic hoặc Ielts</span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Toeic yêu cầu tối thiểu bao nhiêu điểm?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>400</span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành kỹ thuật điện tử viễn thông năm nay là bao
                        nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học ABC năm học 2023 – 2024 dao động
                            trong khoảng từ 10.000.000 – 30.000.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học ABC, sinh viên cần phải đóng học phí cố định
                            15 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành kinh doanh quốc tế năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học XYZ năm học 2023 – 2024 dao động
                            trong khoảng từ 12.000.000 – 32.000.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học XYZ, sinh viên cần phải đóng học phí cố định
                            18 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành y học cổ truyền năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học MNO năm học 2023 – 2024 dao động
                            trong khoảng từ 9.000.000 – 29.000.000 đồng/1 học kỳ
                            cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học MNO, sinh viên cần phải đóng học phí cố định
                            14 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành kỹ thuật môi trường năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học PQR năm học 2023 – 2024 dao động
                            trong khoảng từ 11.500.000 – 31.500.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học PQR, sinh viên cần phải đóng học phí cố định
                            17 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành khoa học máy tính năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học STU năm học 2023 – 2024 dao động
                            trong khoảng từ 13.000.000 – 33.000.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học STU, sinh viên cần phải đóng học phí cố định
                            20 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành kỹ thuật ô tô năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học UVW năm học 2023 – 2024 dao động
                            trong khoảng từ 10.500.000 – 30.500.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học UVW, sinh viên cần phải đóng học phí cố định
                            16 tín chỉ/học kỳ.
                        </span>
                    </div>
                    <div className="user">
                        <img src={user_icon} alt="user" />
                        Học phí ngành luật năm nay là bao nhiêu?
                    </div>
                    <div className="bot">
                        <img src={bot_icon} alt="bot" />
                        <span>
                            Học phí Đại Học XYZ năm học 2023 – 2024 dao động
                            trong khoảng từ 12.000.000 – 32.000.000 đồng/1 học
                            kỳ cho từng chương trình học. Lưu ý: Đối với học phí
                            Đại học XYZ, sinh viên cần phải đóng học phí cố định
                            18 tín chỉ/học kỳ.
                        </span>
                    </div>
                </div>
                <div className="non" />
                <div className="chat-search">
                    <input
                        className="search"
                        type="text"
                        placeholder="Đặt Câu Hỏi"
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
