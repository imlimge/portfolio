import { useEffect } from "react";
import "../css/portfolio.css";

import $ from "jquery";
window.jQuery = $;



export function Portfolio() {

    useEffect(()=>{
        // 포트폴리오 아이템을 클릭할 때
        $(".portfolio__item").click(function() {
            // 현재 클릭된 요소에 대해서만 .design 클래스를 확인합니다.
            if($(this).hasClass('design')){
                $(this).closest(".portfolio").find(".portfolio__content-more.design").show();
                console.log('d');
            } else {
                $(this).closest(".portfolio__lists").next(".portfolio__content-more").show();
                console.log('ww');
            }
        });
    
        // 창닫기 버튼을 클릭할 때
        $(".close__btn").click(function() {
            // 부모 요소인 .portfolio__content-more를 찾아서 숨깁니다.
            $(this).parent(".portfolio__content").parent(".portfolio__content-more").hide();
        });
           
    })
   


  return (
<>

{/* <!-- 포트폴리오 --> */}
            <section id="portfolio">
                <div className="portfolio">
                        <h3>포트폴리오</h3>
                        <span>portfolio</span>

                 
                        {/* <!-- 포트폴리오 전체 내용 표시 --> */}

                        <div className="portfolio__lists">
                        <div className="portfolio__list side">

                        <div className="plist__title side">
                             <h3>워드프레스 및 디자인</h3>
                           </div>   
                        

                            {/* <!-- 프로젝트 아이템 --> */}
                            
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
                            
                            {/* <!-- portfolio__item --> */}
                            {/* <!-- 프로젝트 아이템 --> */}
                            
                                <div className="portfolio__item design">
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
                            
                       
                           
                    </div>
                    {/* <!-- portfolio__list --> */}



                    {/* <!-- 포트폴리오 전체 내용 표시 --> */}
                    <div className="portfolio__list">
                      
                     


                        {/* <!-- 프로젝트 아이템 --> */}
                        
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
                        
                        {/* <!-- portfolio__item --> */}
                        {/* <!-- 프로젝트 아이템 --> */}
                        
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
                        
                        {/* <!-- portfolio__item --> */}
                        
                        {/* <!-- 프로젝트 아이템 --> */}
                        
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
                        
                        {/* <!-- portfolio__item --> */}

                           <div className="plist__title">
                             <h3>웹 개발</h3>
                           </div>   
                    </div>
                    {/* <!-- portfolio__list --> */}

                    </div>   
                    {/* <!-- portfolio__lists --> */}




                    {/* <!-- 포트폴리오 개별 내용 새창 --> */}
                    <div className="portfolio__content-more">

                        
                        {/* <!-- 포트폴리오 세부 내용 --> */}
                        <div className="portfolio__content">
                            {/* <!-- 창닫기 버튼 --> */}
                            <button className="close__btn">×</button>
                           
                            <div className="pcontent__box">
                                <div className="image__box">
                                    <div className="pcontent__image">
                                      
                                    </div>
                                    <div className="pcontent__title">
                                        <h3>햄버거 사이트</h3>
                                    </div>
                                    <button className="view__btn">
                                        <a href="https://imlimge.github.io/LKE-burger/">view Site</a>
                                    </button>
                                </div>{/* image__box */}

                                <div className="content__box">
                                    <div className="pcontent__skill">
                                        <h3>사용 기술</h3>
                                        
                                            <span>html</span>
                                            <span>css</span>
                                            <span>javascript</span>
                                            <span>jquery</span>
                                        
                                    </div>
                                    <div className="pcontent__text">
                                        <h3>제작 의도</h3> 
                                        <span>사이트 구현하기</span>
                                        <p>- 버거킹 사이트를 직접 구현해보며 html,css,javascript,jquery 사용법을 배움</p>
                                        <p>- 버거킹 사이트를 직접 구현해보며 html,css,javascript,jquery 사용법을 배움</p>

                                        <div className="point__box">
                                            <h3>작업 포인트</h3> 
                                            <div className="point__list">
                                            <div className="point__item">
                                                <h4>포인트.01</h4>
                                                <img src="" alt="" />
                                                <p>이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.</p>
                                            </div>
                                            <div className="point__item">
                                                <h4>포인트.02</h4>
                                                <img src="" alt="" />
                                                <p>이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.</p>
                                            </div>
                                            <div className="point__item">
                                                <h4>포인트.03</h4>
                                                <img src="" alt="" />
                                                <p>이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.</p>
                                            </div>
                                            <div className="point__item">
                                                <h4>포인트.04</h4>
                                                <img src="" alt="" />
                                                <p>이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.이건 이렇게 해서 그렇게 했습니다.</p>
                                            </div>
                                            </div>{/* point__list */}
                                        </div>{/* point__box */}


                                    </div>
                                </div> {/* content__box */}
                            </div>{/* pcontent__box */}

                        </div> {/* portfolio__content */}

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



                    </div>{/* portfolio__content-more */}


                    {/* <!-- 포트폴리오 개별 내용 새창 --> */}
                    <div className="portfolio__content-more design">
                    <h1>ddddd</h1>
                            {/* <!-- 포트폴리오 세부 내용 --> */}
                            <div className="portfolio__content">
                            {/* <!-- 창닫기 버튼 --> */}
                            <button className="close__btn">×</button>
                           </div>

                    </div>




                </div>{/* portfolio */}

            </section>


</>
  )

}