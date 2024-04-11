import "../css/intro.css";

import $ from "jquery";
window.jQuery = $;

export function Intro() {
    return (
        <>
            {/* <!-- 메인 인트로 --> */}
            <section id="intro">
                <div className="intro">
                    {/* <!-- 인트로 이미지 --> */}
                    <div className="intro__img">
                        <img
                            src="./images/intro_temp.png"
                            alt="인트로 이미지"
                        />
                    </div>
                    
                    {/* <!-- 인트로 내용 --> */}
                    <div className="intro__content">
                        <div className="intro__content-me">
                            <h4>웹 개발자</h4>
                            <h2>임경은</h2>
                            <div>github</div>
                            <span>https://github.com/imlimge</span>
                            <div>mail</div>
                            <span>limge12@gmail.com</span>
                        </div>

                        {/* 가운데 흘러가는 글자 */}
                        <div className="intro__content-hello">
                            <div className="hello__item">
                                <span>Hello! welcome to my space</span>
                                <span>Hello! welcome to my space</span>
                                <span>Hello! welcome to my space</span>
                            </div>
                        </div>


                        {/* 채팅모양 인삿말 */}
                        <div className="intro__content-text">
                         
                           <div className="text__item-list">
                           
                            {/* 상단 채팅대화창  */}
                            <div className="text__item">
                                <p>안녕하세요! </p>
                            </div>
                            <div className="text__item">
                                <p>
                                    새로운 것을 좋아하고 배우는 것을 좋아하는
                                    신입 웹 개발자 임경은입니다.
                                </p>
                            </div>
                            <div className="text__item">
                                <p>
                                    사람을 더 잘 이해하고 더 나은 표현을 위해
                                    계속 노력하는 웹 개발자가 되겠습니다.
                                </p>
                            </div>
                          </div>
                              {/* 하단 채팅입력창 모양 */}
                            <div className="text__bottom">
      
                              <div className="white">
                                
                              </div>
                              <div className="send"></div>

                            </div>


                        </div>


                    </div>{/* intro__content */}
                </div>{/* intro */}
            </section>
        </>
    );
}
