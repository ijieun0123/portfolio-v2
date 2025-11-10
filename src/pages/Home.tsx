const Home = () => {
    return (
        <main>
            <section className="intro_section">
                <div className="container">
                    <div className="text_box">
                        <h2 className="sr_only">intro</h2>
                        <p className="paragraph">언제나 성장하는 퍼블리셔</p>
                        <h3>
                            HELLO
                            <br /> I’M JIEUN
                            <br /> WEB PUBLISHER
                        </h3>
                    </div>
                    <div className="bg_box">
                        <div className="bg_photo"></div>
                        <div className="bg_yellow_box"></div>
                    </div>
                </div>
            </section>
            <section className="about_section">
                <div className="container">
                    <div className="circle_text_photo">
                        <img src="" alt="publisher, designer, ISTP" />
                        <div className="bg_photo"></div>
                    </div>
                    <div className="text_box">
                        <h2 className="title">About me</h2>
                        <ul>
                            <li>
                                <b className="paragraph">이름</b>
                                <p className="paragraph">이지은</p>
                            </li>
                            <li>
                                <b className="paragraph">이메일</b>
                                <p className="paragraph">
                                    ijieun0123@gmail.com
                                </p>
                            </li>
                            <li>
                                <b className="paragraph">전화번호</b>
                                <p className="paragraph">01050154750</p>
                            </li>
                            <li>
                                <b className="paragraph">주소</b>
                                <p className="paragraph">
                                    선지봉로 20번길 4-1 103호
                                </p>
                            </li>
                            <li>
                                <b className="paragraph">생년월일</b>
                                <p className="paragraph">19940123</p>
                            </li>
                            <li>
                                <b className="paragraph">취미</b>
                                <p className="paragraph">
                                    혼자 코인노래방에 가기
                                </p>
                            </li>
                            <li>
                                <b className="paragraph">MBTI</b>
                                <p className="paragraph">ISTP</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="moments_section">
                <h2 className="title">
                    Defining <br />
                    Moments
                </h2>
                <div className="defining_photo_box">
                    <div className="bg_photo_1"></div>
                    <p>
                        CURIOUS
                        <br />
                        CREATIVE
                        <br />
                        EXPLORING
                        <br />
                        PASSIONATE
                    </p>
                </div>
                <div className="bg_photo_2"></div>
                <div className="bg_photo_3"></div>
            </section>
            <section className="philosophy_section">
                <div className="container">
                    <div className="bg_orange_box"></div>
                    <p className="about_me">ABOUT ME</p>
                    <div className="img_text_box">
                        <div className="bg_photo"></div>
                        <div className="text_box">
                            <h2 className="title">
                                My Publishing <br />
                                Philosophy
                            </h2>
                            <p className="paragraph">
                                <strong>
                                    저는 견고한 시멘틱 마크업을 중요시하고,
                                </strong>
                                <br className="hide_on_mobile" /> 웹 접근성과 웹
                                표준을 신경써서 퍼블리싱을 합니다.
                                <br className="hide_on_mobile" />
                                <strong>팀원과 소통에 신경쓰며</strong> 사용자
                                니즈에 맞는
                                <br className="hide_on_mobile" />
                                웹사이트를 구축하겠습니다.
                            </p>
                            <p className="paragraph">
                                <strong>
                                    퍼블리셔로 일하면서 개발도 함께 공부해
                                    왔습니다.
                                </strong>
                                <br className="hide_on_mobile" />
                                디자이너와 개발자 사이에서 매끄러운 협업이
                                가능하며, <br className="hide_on_mobile" />
                                사용자 중심의 퍼블리싱을 위해 웹 표준과 접근성을
                                지속적으로 익히고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="history_section">
                <div className="container">
                    <h2 className="title">History</h2>
                    <div className="history_boxes">
                        <div className="history_box history_box_1">
                            <strong className="history_title">
                                그린 컴퓨터 아카데미 수료
                            </strong>
                            <p className="history_year">2021.03 - 2021.07</p>
                            <p className="paragraph">
                                포토샵, 일러스트, XD, html, css, Jquery 를
                                배웠습니다. 시멘틱 태그 사용법과 웹표준,
                                웹접근성에 대해 공부하였습니다.
                            </p>
                        </div>
                        <div className="history_box history_box_2">
                            <strong className="history_title">
                                라이언랩 근무
                            </strong>
                            <p className="history_year">2021.08 - 2023.01</p>
                            <p className="paragraph">
                                컨설팅 및 소프트웨어 개발 및 공급업,
                                광고대행법을 행하는 SI 업체입니다. 퍼블리셔로써
                                근무했고, 주로 유지보수를 담당하였습니다. html,
                                css jquery, JS, 그누보드를 사용하였습니다.
                            </p>
                        </div>
                        <div className="history_box history_box_3">
                            <strong className="history_title">
                                비플러스 근무
                            </strong>
                            <p className="history_year">2023.02 - 2023.09</p>
                            <p className="paragraph">
                                소셜임팩트를 기업가치에 반영한 소셜벤처적용 P2P
                                대출 서비스 회사입니다. 개발자로써 근무하였고,
                                도커, 깃허브, JS 를 사용하였습니다.
                            </p>
                        </div>
                        <div className="history_box history_box_4">
                            <strong className="history_title">
                                스파르타코딩클럽
                            </strong>
                            <p className="history_year">2024.12 - 2025.05</p>
                            <p className="paragraph">
                                실무 중심 커리큘럼으로 Java와 Spring Boot 기반
                                백엔드 개발을 집중 학습하였습니다. API 개발, DB
                                연동, 인증/인가 등 실제 서비스 구축에 필요한
                                기술을 프로젝트 기반으로 익혔습니다.
                            </p>
                        </div>
                    </div>
                    <span className="stick"></span>
                </div>
            </section>
            <section className="skill_section">
                <div className="container">
                    <h2 className="title">Skill</h2>
                    <div className="swiper_wrap">
                        <div className="swiper">
                            <div className="slide">
                                <div className="bg_icon"></div>
                                <b>Figma</b>
                                <p className="paragraph">
                                    컴포넌트를 활용하여
                                    <br /> 워크프레임, 웹 디자인을
                                    <br />
                                    작성할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio_section">
                <div className="container">
                    <h2 className="title">Portfolio</h2>
                    <div className="swiper_wrap">
                        <div className="swiper">
                            <div className="slide">
                                <div className="bg_photo"></div>
                                <div className="text_box">
                                    <b className="portfolio_title">
                                        미니 쿠퍼 리뉴얼 ( 데모 )
                                    </b>
                                    <ul className="info_skill_contribution">
                                        <li>
                                            <b>소개</b>
                                            <p>
                                                반응형 디자인과 향상된 사용자
                                                경험을 위한 리뉴얼 프로젝트
                                            </p>
                                        </li>
                                        <li>
                                            <b>기술</b>
                                            <p>
                                                React, Typescript, AOS,
                                                Styled-Components, SCSS, Swiper
                                            </p>
                                        </li>
                                        <li>
                                            <b>작업 기여도</b>
                                            <p>디자인 100%, 퍼블리싱 100%</p>
                                        </li>
                                    </ul>
                                    <ul className="icons_box">
                                        <li>
                                            <a
                                                href="#"
                                                target="_blank"
                                                title="github"
                                            ></a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                target="_blank"
                                                title="mini"
                                            ></a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                target="_blank"
                                                title="figma"
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact_section">
                <div className="container">
                    <h2 className="title">Contact me</h2>
                    <div className="bg_photo"></div>
                    <span className="line"></span>
                    <a href="#">ijieun0123@gmail.com</a>
                </div>
            </section>
        </main>
    );
};

export default Home;
