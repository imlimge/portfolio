import { Fragment, useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../css/portfolio.css";

import { pData } from "../data/portfolio.js";

import $ from "jquery";
window.jQuery = $;

export function Portfolio() {
    const [Item, setItem] = useState(null);

    useEffect(() => {
        // 포트폴리오 아이템을 클릭
        $(".portfolio__item").click(function () {
            // 현재 클릭된 요소에 대해서 .design 클래스를 확인
            if ($(this).hasClass("design")) {
                $(this)
                    .closest(".portfolio")
                    .find(".portfolio__content-more.design")
                    .show();
                // console.log("d");
            } else {
                $(this)
                    .closest(".portfolio__lists")
                    .next(".portfolio__content-more")
                    .show();
                // console.log("ww");
            }
        });

        $(".close__btn").click(function () {
            const portfolioContent = $(".portfolio__content");

            // .portfolio__content 요소 확인
            if (portfolioContent.length > 0) {
                // 스크롤을 맨 위로 이동
                portfolioContent.scrollTop(0);
            }

            // .portfolio__content-more 숨김
            $(this)
                .parent(".portfolio__content")
                .parent(".portfolio__content-more")
                .hide();
        });
    });

    useEffect(() => {
        const setImageBoxHeight = () => {
            const pCMore = document.querySelector(".portfolio__content-more");
            const imageBox = document.querySelector(".image__box");

            // .portfolio__content-more 높이를 가져와서 이미지 상자의 높이로 설정
            if (pCMore && imageBox) {
                const contentHeight = pCMore.clientHeight;
                imageBox.style.height = `${contentHeight}px`;
            }
        };

        // 페이지 로드 시 이미지 상자 높이 설정
        setImageBoxHeight();

        // 윈도우 리사이즈 이벤트에 대한 이미지 상자 높이 업데이트
        window.addEventListener("resize", setImageBoxHeight);

        // 컴포넌트가 unmount될 때 해당 리스너 제거
        return () => {
            window.removeEventListener("resize", setImageBoxHeight);
        };
    });

    useEffect(() => {
        const mover = document.querySelector(".portfolio__content-more");

        // 드래그 가능한 요소일 때
        if (mover) {
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
                    mover.style.transform = `translate(${currentX}px, ${currentY}px)`;
                }
            };

            // 드래그 종료 이벤트 핸들러
            const stopDragging = () => {
                isDragging = false;
            };

            // 마우스 다운 이벤트에 드래그 시작 이벤트 핸들러 연결
            mover.addEventListener("mousedown", startDragging);

            // 마우스 움직임 이벤트에 드래그 중 이벤트 핸들러 연결
            mover.addEventListener("mousemove", drag);

            // 마우스 업 이벤트에 드래그 종료 이벤트 핸들러 연결
            mover.addEventListener("mouseup", stopDragging);

            // 컴포넌트가 unmount될 때 이벤트 핸들러 제거
            return () => {
                mover.removeEventListener("mousedown", startDragging);
                mover.removeEventListener("mousemove", drag);
                mover.removeEventListener("mouseup", stopDragging);
            };
        }
    }, []);

    // 아이템 만들기 함수
    const makeItem = () => {
        let temp = [];

        pData.site.map((v, i) => {
            temp[i] = (
                <Fragment key={`${v.name}-${i}`}>
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
                                    src={v.thumisrc}
                                    alt={v.name + "미리보기 이미지"}
                                />
                            </div>
                            <div className="pitem__skill">
                                {v.skill.map((v, i) => (
                                    <span key={`${v}-${i}`}>{v}</span>
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


    //portfolio__content-more 정보 더 보기 새창 
    const makeMore = (a) => {
        console.log("받아온것", a);

        // 아이템이 없으면 아무것도 반환하지 않음
        if (!a) {
            return null;
        } else if (a === "wordpress") {
            console.log("워드프레스", pData.wordpress);

            return (
                <Fragment>
                    <div className="pcontent__box">
                        <div className="image__box">
                            <div className="pcontent__image">
                                <img
                                    src={pData.wordpress.isrc}
                                    alt={pData.wordpress.name}
                                />
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
                                        <span key={v+i}>{v}</span>
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
                                    <p key={v+i}>{v}</p>
                                ))}
                            </div>
                        </div>
                        {/* content__box */}
                    </div>
                    {/* pcontent__box */}
                </Fragment>
            );
        } else if (a === "design") {
            console.log("디자인");
            return null;
        }

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
                                    <span key={v+i}>{v}</span>
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
                                <p key={v+i}>{v}</p>
                            ))}

                            <div className="point__box">
                                <h3>작업 포인트</h3>
                                <div className="point__list">
                                    {a.point.map((v, i) => (
                                        <Fragment key={v+i}>
                                            <div className="point__item">
                                                <h4>
                                                    포인트.{i + 1} - {v.title}
                                                </h4>
                                                <img
                                                    src={v.isrc}
                                                    alt={v.title}
                                                />
                                                {Array.isArray(v.cont) ? (
                                                    <>
                                                        {v.cont.map(
                                                            (item, i) => (
                                                                <p key={item+i}>
                                                                    {item}
                                                                </p>
                                                            )
                                                        )}
                                                    </>
                                                ) : (
                                                    <p>{v.cont}</p>
                                                )}
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





    // 개별 항목 클릭하면 클릭 이름 새창(portfolio__content-more)에 전달
    const itemClick = (v) => {
        setItem(v);
        console.log(v);
    };



    // portfolio__content-more design 디자인용 정보 새창 
    const makeMoreDesign = () => {
        // design 객체 내부의 배열에 접근합니다.
        const designArrays = Object.values(pData.design);
    
        // 모든 design__item을 담을 배열을 생성합니다.
        const allDesignItems = designArrays.reduce((item, array) => {
            // 배열의 각 요소를 design__item으로 변환하여 합침
            return item.concat(array.map((v, i) => (
                <div className="design__item" key={`design-${v.title}-${i}`}>
                    <a href={v.isrc} target="_blank">
                        <img src={v.isrc} alt={v.title} />
                    </a>
                </div>
            )));
        }, []);
    
        // 하나의 design__box에 모든 design__item을 담음
        return (
            <div className="design__box">
                <div className="design__image">
                    {allDesignItems}
                </div>
            </div>
        );
    };








    // 상태 초기화
const [hArray, setHArray] = useState({
    web: null,
    image: null,
    drawing: null
});

// setFirstElementHeight 함수 정의
const setFirstElementHeight = (category) => {
    const firstElement = document.querySelector(`.design__item img[alt="${category}01"]`);
    if (firstElement) {
        const elementRect = firstElement.getBoundingClientRect();
        setHArray(prevState => ({
            ...prevState,
            [category]: elementRect.top + window.pageYOffset
        }));
    }
};

// 클릭한 카테고리에 대해 해당 이미지를 찾아서 스크롤
const scrollToItem = (category) => {
    // 해당 카테고리에 대한 높이 가져오기
    const height = hArray[category];
    
   // 높이가 유효한지 확인
   if (height !== null && height !== undefined) {
    // 해당 카테고리에 대한 이미지 선택자 생성
    const firstElement = document.querySelector(`.design__item img[alt="${category}01"]`);
    if (firstElement) {
        // .portfolio__item.design의 높이 가져오기
        const portfolioContentMore = document.querySelector('.portfolio__content-more.design');
        const rect = portfolioContentMore.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = rect.top + scrollTop;
        console.log("portfolio__content-more.design의 윈도우 창에서의 위치값:", top);
     
        
        // yOffset 계산하여 .portfolio__content.design의 스크롤 위치 설정
        const yOffset = height - top;

        // 스크롤 이동
        const portfolioContent = document.querySelector('.portfolio__content.design');
        portfolioContent.scrollTo({ top: yOffset, behavior: "smooth" });
    }
}
};

// pdata.design의 각 카테고리에 대해 첫 번째 요소의 높이를 저장하고, 클릭한 카테고리에 대해 스크롤 기능 활성화
useEffect(() => {
    Object.keys(pData.design).forEach(category => {
        setFirstElementHeight(category);
        
        // 클릭 이벤트 추가
        const element = document.querySelector(`.portfolio__item.${category}`);
        if (element) {
            element.addEventListener('click', () => {
                scrollToItem(category);
            });
        }
    });
}, []);

// 개별 항목 클릭하면 클릭 이름 새창(portfolio__content-more design)에 전달
const itemClick2 = (v) => {
    // 클릭한 카테고리의 이미지 높이 설정
    Object.keys(hArray).forEach(category => {
        setFirstElementHeight(category);
    });
};

console.log(hArray)



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

                            <div
                                className="portfolio__item"
                                onClick={() => itemClick("wordpress")}
                            >
                                <div className="inner">
                                    <div className="pitem__title">
                                        <h4>{pData.wordpress.name}</h4>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- portfolio__item --> */}
                            {/* <!-- 프로젝트 아이템 --> */}

                            <div
                                className="portfolio__item design"
                                onClick={() => itemClick2("design")}
                            >
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
                        {/* <!-- 포트폴리오 세부 내용 --> */}
                        <div className="portfolio__content design">
                            {/* <!-- 창닫기 버튼 --> */}
                            <button className="close__btn">×</button>

                            <div className="design__nav">
                            <span onClick={() => scrollToItem("web")}>웹</span>
                            <span onClick={() => scrollToItem("image")}>이미지</span>
                            <span onClick={() => scrollToItem("drawing")}>드로잉</span>
                            </div>

                            {makeMoreDesign()}
                        </div>
                    </div>
                </div>
                {/* portfolio */}
            </section>
        </>
    );
}
