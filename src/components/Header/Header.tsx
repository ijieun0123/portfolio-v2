import { useState } from "react";
import "./Header.scss";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
        setIsMenuActive(!isMenuActive);
    };

    const handleLogoClick = () => {
        setIsNavActive(false);
    };

    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <a href="#intro" onClick={handleLogoClick}>
                        <img
                            src="/portfolio-v2/img/header_logo.png"
                            alt="이지은 포트폴리오 로고"
                        />
                    </a>
                </h1>
                <div className="github_blog_menu_wrap">
                    <a
                        className="github"
                        href="https://github.com/ijieun0123"
                        target="_blank"
                        title="이지은 깃허브 새창"
                    ></a>
                    <a
                        className="blog"
                        href="https://velog.io/@cock321/posts"
                        target="_blank"
                        title="이지은 블로그 새창"
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
                <nav
                    className={isNavActive ? "active" : ""}
                    onClick={handleMenuClick}
                >
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#moments">Moments</a>
                        </li>
                        <li>
                            <a href="#philosophy">Philosophy</a>
                        </li>
                        <li>
                            <a href="#history">History</a>
                        </li>
                        <li>
                            <a href="#skill">Skill</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
