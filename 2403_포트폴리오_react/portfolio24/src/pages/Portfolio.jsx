import "../css/portfolio.css";

import $ from "jquery";
window.jQuery = $;



export function Portfolio() {


  return (
<>

{/* <!-- 포트폴리오 --> */}
            <section id="portfolio">
                <div className="portfolio">
                        <h3>포트폴리오</h3>
                        <span>portfolio</span>

                 
                        {/* <!-- 포트폴리오 전체 내용 표시 --> */}
                        <div className="portfolio__list side">

                        <div className="plist__title side">
                             <h3>워드프레스 및 디자인</h3>
                           </div>   
                        

                            {/* <!-- 프로젝트 아이템 --> */}
                            <a href="">
                                <div className="portfolio__item">
                                    <div className="inner">
                                        <div className="pitem__title">
                                            <h4>워드프레스 사이트</h4>
                                        </div>
                                       
                                        <div className="pitem__skill">
                                            <span>html</span>
                                            <span>CSS</span>
                                            <span>javascript</span>
                                        </div>
                                        <div className="pitem__txt">
                                            프로젝트에 대한 간략 설명
                                        </div>
                                </div>
                            </div>
                            </a>
                            {/* <!-- portfolio__item --> */}
                            {/* <!-- 프로젝트 아이템 --> */}
                            <a href="">
                                <div className="portfolio__item">
                                    <div className="inner">
                                        <div className="pitem__title">
                                        <h4>디자인</h4>
                                        </div>
                                
                                    <div className="pitem__skill">
                                        <span>html</span>
                                        <span>CSS</span>
                                        <span>javascript</span>
                                    </div>
                                    <div className="pitem__txt">
                                        프로젝트에 대한 간략 설명
                                    </div>
                                </div>
                            </div>
                            </a>
                       
                           
                    </div>
                    {/* <!-- portfolio__list --> */}



                    {/* <!-- 포트폴리오 전체 내용 표시 --> */}
                    <div className="portfolio__list">
                      
                     


                        {/* <!-- 프로젝트 아이템 --> */}
                        <a href="">
                            <div className="portfolio__item">
                                <div className="inner">
                                    <div className="pitem__title">
                                        <h4>버거사이트</h4>
                                    </div>
                                    <div className="pitem__img">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="pitem__skill">
                                        <span>html</span>
                                        <span>CSS</span>
                                        <span>javascript</span>
                                    </div>
                                    <div className="pitem__txt">
                                        프로젝트에 대한 간략 설명
                                    </div>
                            </div>
                        </div>
                        </a>
                        {/* <!-- portfolio__item --> */}
                        {/* <!-- 프로젝트 아이템 --> */}
                        <a href="">
                            <div className="portfolio__item">
                                <div className="inner">
                                    <div className="pitem__title">
                                       <h4>학원 사이트</h4>
                                    </div>
                                <div className="pitem__img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="pitem__skill">
                                    <span>html</span>
                                    <span>CSS</span>
                                    <span>javascript</span>
                                </div>
                                <div className="pitem__txt">
                                    프로젝트에 대한 간략 설명
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* <!-- portfolio__item --> */}
                        
                        {/* <!-- 프로젝트 아이템 --> */}
                        <a href="">
                            <div className="portfolio__item">
                                <div className="inner">
                                    <div className="pitem__title">
                                       <h4>쇼핑몰 기능구현</h4>
                                    </div>
                                <div className="pitem__img">
                                    <img src="" alt=""/>
                                </div>
                                <div className="pitem__skill">
                                    <span>html</span>
                                    <span>CSS</span>
                                    <span>javascript</span>
                                </div>
                                <div className="pitem__txt">
                                    프로젝트에 대한 간략 설명
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* <!-- portfolio__item --> */}

                           <div className="plist__title">
                             <h3>웹 개발</h3>
                           </div>   
                    </div>
                    {/* <!-- portfolio__list --> */}

                        

              


                    {/* <!-- 포트폴리오 개별 내용 새창 --> */}
                    <div className="portfolio__content-more">

                        
                        {/* <!-- 포트폴리오 세부 내용 --> */}
                        <div className="portfolio__content">
                            {/* <!-- 창닫기 버튼 --> */}
                            <button className="close_btn">×</button>
                           
                            <div className="pcontent__box">
                                <div className="pcontent__image">
                                    <img src="" alt="" />
                                </div>
                                <div className="pcontent__title">
                                    <h3>햄버거 사이트</h3>
                                </div>
                                <div className="pcontent__skill">
                                    html, css, javascript, jquery
                                </div>
                                <div className="pcontent__text">
                                    
                                </div>

                            </div>
                        </div>

                        {/* <!-- 포트폴리오 메뉴 --> */}
                        <div className="portfolio__menu">
                                            
                            <div className="pmenu__box">
                            {/* <!-- 웹 사이트 --> */}
                            <div className="pmenu__title">
                                <h5><a href="#">웹 사이트</a></h5>
                            </div>
                            {/* <!-- menu__title --> */}

                                <ul className="pmenu-list">
                                    <li className="pmenu-list__item on"><a href="#">햄버거 사이트</a></li>
                                    <li className="pmenu-list__item"><a href="#">학원 사이트</a></li>
                                    <li className="pmenu-list__item"><a href="#">쇼핑몰 기능 구현</a></li>
                                </ul>
                                
                            {/* <!-- 워드프레스 --> */}
                            <div className="pmenu__title">
                                <h5><a href="#">워드프레스</a></h5>
                            </div>
                            {/* <!-- menu__title --> */}
                                <ul className="pmenu__list">
                                    <li className="pmenu-list__item"><a href="#">회사 사이트</a></li>
                                </ul>

                            {/* <!-- 디자인 --> */}
                            <div className="pmenu__title">
                                <h5><a href="#">디자인</a></h5>
                            </div>


                            </div>
                            {/* <!-- menu__box --> */}
                        </div>
                        {/* <!-- portfolio__menu --> */}


                          .  

                    </div>


                </div>

            </section>


</>
  )

}