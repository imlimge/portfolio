import "../css/about.css";


import $ from "jquery";
window.jQuery = $;


export function About(props) {


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
                                    >건국대학교(서울캠퍼스) 커뮤니케이션 디자인
                                    (14.졸업)</span>
                            </div>
                            <div className="about__item-name">
                                <span>학력</span>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-content">
                                <span
                                    >중개자, 사람과 사람 사이의 갈등 해결,
                                    새로운 거 배우기 좋아함</span>
                            </div>
                            <div className="about__item-name">
                                <span>성향</span>
                            </div>
                        </div>
                        <div className="about__item">
                            <div className="about__item-content stxt">
                                <span>Just keep swimming</span>
                                <span>-니모를 찾아서</span>
                            </div>
                            <div className="about__item-name">
                                <span>좋아하는 문구</span>
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

                              {/* <!-- 소제목: html --> */}
                              <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>html</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        웹 규격을 잘 지키며 표준 규약을 잘
                                        지키며 html 구조를 잘 하고 마크업어쩌구
                                        저쩌구
                                    </span>
                                </div>
                                </div>

                                {/* <!-- 소제목: CSS --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>CSS</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        웹 규격을 잘 지키며 표준 규약을 잘
                                        지키며 html 구조를 잘 하고 마크업어쩌구
                                        저쩌구
                                    </span>
                                </div>
                                </div>
                                {/* <!-- 소제목: javascript --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>javascript</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        웹 규격을 잘 지키며 표준 규약을 잘
                                        지키며 html 구조를 잘 하고 마크업어쩌구
                                        저쩌구
                                    </span>
                                </div>
                                </div>
                                {/* <!-- 소제목: React --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>React</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        웹 규격을 잘 지키며 표준 규약을 잘
                                        지키며 html 구조를 잘 하고 마크업어쩌구
                                        저쩌구
                                    </span>
                                </div>
                                </div>
                                
                                {/* <!-- 소제목: React --> */}
                                <div className="item-content__box">
                                <div className="item-content__title">
                                    <span>React</span>
                                </div>
                                <div className="item-content__text">
                                    <span>
                                        웹 규격을 잘 지키며 표준 규약을 잘
                                        지키며 html 구조를 잘 하고 마크업어쩌구
                                        저쩌구
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