import { useState } from "react";

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
                        <img src="" alt="포트폴리오 로고" />
                    </a>
                </h1>
                <button
                    className={isMenuActive ? "menu_btn active" : "menu_btn"}
                    onClick={handleMenuClick}
                >
                    <span className="sr_only">메뉴 버튼</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isNavActive ? "active" : ""}>
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
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
