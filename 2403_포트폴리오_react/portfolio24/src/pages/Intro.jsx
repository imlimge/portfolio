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
                            <h4>신입 웹 개발자</h4>
                            <h2>임경은</h2>
                            <div>github</div>
                            <span>https://github.com/imlimge</span>
                            <div>mail</div>
                            <span>limge12@gmail.com</span>
                        </div>
                        <div className="intro__content-hello">
                            <span
                                >안녕하세요<br />
                                신입 웹 개발자<br />
                                임경은 입니다.</span>
                        </div>
                    </div>
                </div>
            </section>





</>
  )
}