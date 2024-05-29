import "../css/about.css";


import $ from "jquery";
window.jQuery = $;


export function About() {






  return (
<>

            {/* <!-- 자기소개 --> */}
            <section id="about">
                {/* <!-- 내 소개 --> */}
                <div className="about-me">
                    <h3>내 소개</h3>
                    <span>me</span>
                    <div className="about__item__box">
                        <div className="about__item">
                            <div className="about__item-content">
                                <span>임경은</span>
                            </div>
                            <div className="about__item-name">
                                <span>이름</span>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-content">
                                <span>1989.09</span>
                            </div>
                            <div className="about__item-name">
                                <span>출생</span>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-content">
                                <span>서울시 중랑구</span>
                            </div>
                            <div className="about__item-name">
                                <span>사는 곳</span>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-content">
                                <span
                                    >건국대학교(서울캠퍼스) - 커뮤니케이션 디자인 
                                    (14.졸업)</span>
                                <span
                                    >북원여자 고등학교 -  산업디자인
                                    (08.졸업)</span>
                            </div>
                            <div className="about__item-name">
                                <span>학력</span>
                            </div>
                        </div>

                        <div className="about__item">
                            <div className="about__item-content stxt">
                                <span>프론트엔드(React, PHP), 플러터(Flutter)활용 웹&앱개발 양성과정</span>
                                <span>2023.07 – 2024.01 (6개월, 952시간)  / 그린아카데미 (역삼)</span>
                            </div>
                            <div className="about__item-name">
                                <span>교육</span>
                            </div>
                        </div>

                        <div className="about__item">
                            <div className="about__item-content">
                                <p>안녕하세요. <br />
                                    더 많은 것을 배워가며 웹과 앱을 잘 구현하고 싶은 임경은입니다. <br /><br />
                                 
                                    우연히 웹 사이트를 제작하게 되었는데
                                    사람과 상호작용하는 웹 화면을 구현하는 것에 
                                    흥미가 생겼습니다. <br /><br />

                                    그렇게 웹 사이트를 배워가다 보니
                                    기능을 구현할 때 방법을 찾아가는 과정에서 
                                    어려운 문제를 끊임없이 고민하며 해결했을 때 퍼즐이 풀리듯 재밌었고
                                    다양한 사람들이 서로 정보를 공유하는 것이 신기했습니다. <br />
                                    또한 목표는 한 가지이지만 해결하는 방법은 
                                    여러 가지가 정답인 점이 좋습니다.<br /> <br />
                                    
                                    계속 더 배워나가며 많은 정답 중에 더 좋은 선택이 어떤 것인지 알고 싶고<br/>
                                    사람들과 소통하며 함께 일을 했을 때<br/>
                                    계속 같이 일하고 싶은 웹 개발자가 되고 싶습니다.
                                </p>
                               
                            </div>
                            <div className="about__item-name">
                                <span>소개</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- about__item__box --> */}
                </div>
                {/* <!-- about-me --> */}

                {/* <!-- 업무 능력 --> */}
                <div className="about-skill">
                    <h3>업무 능력</h3>
                    <span>skill</span>

                    {/* <!-- 웹 개발 --> */}
                    <div className="about__item__box">
                        <div className="about__item">
                            <div className="about__item-content">

                            <div className="about__item-title">
                              <span>(html, css, javascript, jQuery, react)</span>
                            </div>

                              {/* <!-- 소제목: 사이트 설계 --> */}
                              <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>사이트 설계</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                      html 단계에서 웹 접근성을 고려하여 설계합니다
                                    </span>
                               
                                </div>
                                </div>

                                {/* <!-- 소제목: 반응형 웹 --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>반응형 웹</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                      미디어 쿼리를 사용하여 PC와 모바일에서 사용 가능한 반응형 웹 제작 경험
                                    </span>
                                                                 </div>
                                </div>
                                {/* <!-- 소제목: 라이브러리 --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>라이브러리</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        스와이퍼 슬라이더를 사용한 이미지 슬라이더 구현
                                    </span>
                                    <span>
                                        제이쿼리를 사용하여 기능 구현
                                    </span>
                                    <span>
                                        리액트를 사용한 사이트 제작
                                    </span>
                                </div>
                                </div>
                                {/* <!-- 소제목: 기능구현 --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>기능구현</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        css로 화면의 모습을 구현합니다
                                    </span>
                                    <span>
                                        javascript, jQuery로 원하는 기능을 구현합니다
                                        (클릭 이벤트, 스크롤 이벤트, 움직임 등 )
                                    </span>
                                    
                                </div>
                                </div>
                                
                                {/* <!-- 소제목: 협업 --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>협업</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                       git을 사용하여 상태관리 합니다
                                    </span>
                                    <span>
                                       디자인 경험을 통해 디자이너와 원활히 소통합니다
                                    </span>
                               
                                    
                                </div>
                                </div>
                                

                            </div>
                            {/* <!-- about__item-content --> */}

                            <div className="about__item-name">
                                <span>웹 개발</span>
                            </div>
                        </div>
                        {/* <!-- about__item --> */}

                        {/* <!-- 디자인 --> */}
                        <div className="about__item">
                            <div className="about__item-content">
                                <div className="item-content__title">
                                    <span>드로잉, 일러스트레이터, 포토샵</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                      로고, 명함, 간판, 현수막, 전단지,
                                      표지, 도형, 책표지, 교재 삽화, 이모티콘,
                                      캐릭터, 일러스트 이미지 제작 
                                    </span>
                                </div>
                            </div>
                            {/* <!-- about__item-content --> */}

                            <div className="about__item-name">
                                <span>디자인</span>
                            </div>
                        </div>
                        {/* <!-- about__item --> */}
                    </div>
                    {/* <!-- about__item__box --> */}
                </div>
                {/* <!-- about-skill --> */}
            </section>




</>
  )

}