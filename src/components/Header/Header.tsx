import { useState } from "react";
import "./Header.scss";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <a href="#">
                        <img
                            src="/portfolio-v2/img/header_logo.png"
                            alt="이지은 포트폴리오 로고"
                        />
                    </a>
                </h1>
                <div className="github_blog_menu_wrap">
                    <a
                        className="github"
                        href="#"
                        target="_blank"
                        title="이지은 깃허브"
                    ></a>
                    <a
                        className="blog"
                        href="#"
                        target="_blank"
                        title="이지은 블로그"
                    ></a>
                    <button
                        className={
                            isMenuActive ? "menu_btn active" : "menu_btn"
                        }
                        onClick={handleMenuClick}
                    >
                        <span className="sr_only">메뉴 버튼</span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav className={isNavActive ? "active" : ""}>
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Moments</a>
                        </li>
                        <li>
                            <a href="#">Philosophy</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Skill</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
