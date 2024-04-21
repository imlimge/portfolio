import { Fragment, useEffect, useState } from "react";
import "../css/portfolio.css";
import { pData } from "../data/portfolio.js";

import $ from "jquery";
window.jQuery = $;

export function Portfolio() {
    const [Item, setItem] = useState(null);

    useEffect(() => {
        // 포트폴리오 아이템을 클릭할 때
        $(".portfolio__item").click(function () {
            // 현재 클릭된 요소에 대해서만 .design 클래스를 확인합니다.
            if ($(this).hasClass("design")) {
                $(this)
                    .closest(".portfolio")
                    .find(".portfolio__content-more.design")
                    .show();
                console.log("d");
            } else {
                $(this)
                    .closest(".portfolio__lists")
                    .next(".portfolio__content-more")
                    .show();
                console.log("ww");
            }
          
        });

        // 창닫기 버튼을 클릭할 때
        $(".close__btn").click(function () {
                 // 스크롤을 맨 위로 이동합니다.
                 $(".portfolio__content").scrollTop(0);  
                 
            // 부모 요소인 .portfolio__content-more를 찾아서 숨깁니다.
            $(this)
                .parent(".portfolio__content")
                .parent(".portfolio__content-more")
                .hide();

         
        });
    });



useEffect(() => {
    const setImageBoxHeight = () => {
        const pCMore = document.querySelector('.portfolio__content-more');
        const imageBox = document.querySelector('.image__box');

        // 포트폴리오 세부 내용의 높이를 가져와서 이미지 상자의 높이로 설정
        if (pCMore && imageBox) {
            const contentHeight = pCMore.clientHeight;
            imageBox.style.height = `${contentHeight}px`;
        }
    };

    // 페이지 로드 시 이미지 상자 높이 설정
    setImageBoxHeight();

    // 윈도우 리사이즈 이벤트에 대한 이미지 상자 높이 업데이트
    window.addEventListener('resize', setImageBoxHeight);

    // 컴포넌트가 unmount될 때 해당 리스너 제거
    return () => {
        window.removeEventListener('resize', setImageBoxHeight);
    };
});


useEffect(() => {
    // 포트폴리오 세부 내용의 높이를 가져오는 함수
    const getContentHeight = () => {
        const pCMore = document.querySelector('.portfolio__content-more');
        return pCMore ? pCMore.clientHeight : 0;
    };

    // 이미지 상자 높이 설정 함수
    const setImageBoxHeight = () => {
        const imageBox = document.querySelector('.image__box');
        const contentHeight = getContentHeight();

        // 이미지 상자의 높이를 포트폴리오 세부 내용의 높이로 설정
        if (imageBox && contentHeight) {
            imageBox.style.height = `${contentHeight}px`;
        }
    };

    // 페이지 로드 시 이미지 상자 높이 설정
    setImageBoxHeight();

    // 윈도우 리사이즈 이벤트에 대한 이미지 상자 높이 업데이트
    window.addEventListener('resize', setImageBoxHeight);

    // 컴포넌트가 unmount될 때 해당 리스너 제거
    return () => {
        window.removeEventListener('resize', setImageBoxHeight);
    };
}, []);

useEffect(() => {
    const pCMore = document.querySelector('.portfolio__content-more');

    // 포트폴리오 세부 내용이 있고 드래그 가능한 요소일 때
    if (pCMore) {
        let isDragging = false;
        let initialX;
        let initialY;
        let offsetX = 0;
        let offsetY = 0;

        // 드래그 시작 이벤트 핸들러
        const startDragging = (e) => {
            isDragging = true;
            initialX = e.clientX - offsetX;
            initialY = e.clientY - offsetY;
        };

        // 드래그 중 이벤트 핸들러
        const drag = (e) => {
            if (isDragging) {
                e.preventDefault();
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                offsetX = currentX;
                offsetY = currentY;
                pCMore.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        };

        // 드래그 종료 이벤트 핸들러
        const stopDragging = () => {
            isDragging = false;
        };

        // 마우스 다운 이벤트에 드래그 시작 이벤트 핸들러 연결
        pCMore.addEventListener('mousedown', startDragging);

        // 마우스 움직임 이벤트에 드래그 중 이벤트 핸들러 연결
        pCMore.addEventListener('mousemove', drag);

        // 마우스 업 이벤트에 드래그 종료 이벤트 핸들러 연결
        pCMore.addEventListener('mouseup', stopDragging);

        // 컴포넌트가 unmount될 때 이벤트 핸들러 제거
        return () => {
            pCMore.removeEventListener('mousedown', startDragging);
            pCMore.removeEventListener('mousemove', drag);
            pCMore.removeEventListener('mouseup', stopDragging);
        };
    }
}, []);







    // 아이템 만들기 함수
    const makeItem = () => {
        let temp = [];

        pData.site.map((v, i) => {
            temp[i] = (
                <Fragment key={i}>
                    {/* <!-- 프로젝트 아이템 --> */}

                    <div
                        className="portfolio__item"
                        onClick={() => itemClick(v)}
                    >
                        <div className="inner">
                            <div className="pitem__title">
                                <h4>{v.name}</h4>
                            </div>
                            <div className="pitem__img">
                                <img
                                    src={v.isrc}
                                    alt={v.name + "미리보기 이미지"}
                                />
                            </div>
                            <div className="pitem__skill">
                                {v.skill.map((v, i) => (
                                    <span key={i}>{v}</span>
                                ))}
                            </div>

                            <div className="pitem__txt">{v.txt}</div>
                        </div>
                    </div>

                    {/* <!-- portfolio__item --> */}
                </Fragment>
            );
        });

        return temp;
    };

    const makeMore = (a) => {
          
        if (!a){return null; }
        else if(a === 'wordpress'){
            
            console.log('워드프레스',pData.wordpress); 

            return(
                    <Fragment>
                        <div className="pcontent__box">
                            <div className="image__box">
                                <div className="pcontent__image">
                                    <img src={pData.wordpress.isrc} alt={pData.wordpress.name} />
                                </div>
                                <div className="pcontent__title">
                                    <h3>{pData.wordpress.name}</h3>
                                </div>
                                <button className="view__btn">
                                    <a href={pData.wordpress.link} target="_blank">
                                        view Site
                                    </a>
                                </button>
                            </div>
                            {/* image__box */}
                            <div className="content__box">
                                <div className="pcontent__skill">
                                    <div className="skill__item">
                                        <h3>사용 기술</h3>
                                        {pData.wordpress.skill.map((v, i) => (
                                            <span key={i}>{v}</span>
                                        ))}
                                    </div>
                                    <div className="skill__item">
                                        <h3>제작 기간</h3>
                                        <span>{pData.wordpress.date}</span>
                                    </div>
                                    <div className="skill__item">
                                        <h3>기여도</h3>
                                        <span>{pData.wordpress.percent}</span>
                                    </div>
                                </div>
                                {/* pcontent__skill */}
                                <div className="pcontent__text">
                                    <h3>제작 의도</h3>
                                  {pData.wordpress.explain.map((v, i) => (
                                        <p key={i}>{v}</p>
                                    ))} 
                                   
                                </div>
                            </div>
                            {/* content__box */}
                        </div>
                        {/* pcontent__box */}
                    </Fragment>
            )


          
        }
        else if(a === 'design'){
            console.log('디자인'); return null; 
        }
       

        // 아이템이 없으면 아무것도 반환하지 않음
        console.log("받아온것", a);

        return (
            <Fragment>
                <div className="pcontent__box">
                    <div className="image__box">
                        <div className="pcontent__image">
                            <img src={a.isrc} alt={a.name} />
                        </div>
                        <div className="pcontent__title">
                            <h3>{a.name}</h3>
                        </div>
                        <button className="view__btn">
                            <a href={a.link} target="_blank">
                                view Site
                            </a>
                        </button>
                    </div>
                    {/* image__box */}
                    <div className="content__box">
                        <div className="pcontent__skill">
                            <div className="skill__item">
                                <h3>사용 기술</h3>
                                {a.skill.map((v, i) => (
                                    <span key={i}>{v}</span>
                                ))}
                            </div>
                            <div className="skill__item">
                                <h3>제작 기간</h3>
                                <span>{a.date}</span>
                            </div>
                            <div className="skill__item">
                                <h3>기여도</h3>
                                <span>{a.percent}</span>
                            </div>
                        </div>
                        {/* pcontent__skill */}
                        <div className="pcontent__text">
                            <h3>제작 의도</h3>
                            <span>: {a.txt}</span>
                            {a.explain.map((v, i) => (
                                <p key={i}>{v}</p>
                            ))}

                            <div className="point__box">
                                <h3>작업 포인트</h3>
                                <div className="point__list">
                                   
                                        {a.point.map((v, i) => (
                                            <Fragment key={i}>
                                                <div className="point__item">
                                                <h4>
                                                    포인트.{i+1} - {v.title}
                                                </h4>
                                                <img
                                                    src={v.isrc}
                                                    alt={v.title}
                                                />
                                                <p>{v.cont}</p>
                                                </div>
                                            </Fragment>
                                        ))}
                                    
                                </div>
                                {/* point__list */}
                            </div>
                            {/* point__box */}
                        </div>
                    </div>{" "}
                    {/* content__box */}
                </div>
                {/* pcontent__box */}
            </Fragment>
        );
    };

    const itemClick = (v) => {
        setItem(v);
        console.log(v);
    
    };

    return (
        <>
            {/* <!-- 포트폴리오 --> */}
            <section id="portfolio">
                <div className="portfolio">
                    <h3>포트폴리오</h3>
                    <span>portfolio</span>

                    {/* <!-- 포트폴리오 전체 내용 표시 --> */}

                    <div className="portfolio__lists">
                     
                        {/* <!-- 포트폴리오 전체 내용 표시 --> */}
                        <div className="portfolio__list">
                            {makeItem(Item)}
{/* 
                            <div className="plist__title">
                                <h3>웹 개발</h3>
                            </div> */}
                        </div>
                        {/* <!-- portfolio__list --> */}


                        <div className="portfolio__list side">
                       {/*      <div className="plist__title side">
                                <h3>워드프레스 및 디자인</h3>
                            </div> */}

                            {/* <!-- 프로젝트 아이템 --> */}

                            <div className="portfolio__item"
                            onClick={() => itemClick('wordpress')}>
                                <div className="inner">
                                    <div className="pitem__title">
                                        <h4>{pData.wordpress.name}</h4>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- portfolio__item --> */}
                            {/* <!-- 프로젝트 아이템 --> */}

                            <div className="portfolio__item design"
                            onClick={() => itemClick('design')}>
                                <div className="inner">
                                    <div className="pitem__title">
                                        <h4>디자인</h4>
                                    </div>
                                </div>
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
                            {makeMore(Item)}
                        </div>
                        {/* portfolio__content */}
                    </div>
                    {/* portfolio__content-more */}

                    {/* <!-- 포트폴리오 개별 내용 새창 --> */}
                    <div className="portfolio__content-more design">
                        <h1>ddddd</h1>
                        {/* <!-- 포트폴리오 세부 내용 --> */}
                        <div className="portfolio__content">
                            {/* <!-- 창닫기 버튼 --> */}
                            <button className="close__btn">×</button>
                        </div>
                    </div>
                </div>
                {/* portfolio */}
            </section>
        </>
    );
}
