import "../css/intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import $ from "jquery";
window.jQuery = $;

export function Intro() {
    const [inputText, setInputText] = useState(""); // 입력한 텍스트 상태

    const [newMessages, setNewMessages] = useState([]); // 새로운 메시지 상태

    // input 창에 포커스를 주기 위한 ref
    const inputRef = useRef(null);

    // 컴포넌트가 마운트될 때 input 창에 포커스
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        // 모든 .text__item 숨기기
        $(".text__item-list").find(".text__item").hide();

        // 스크롤 내리기
        const introContentText = document.querySelector(".intro__content-text");

        // 각 .text__item에 대한 처리
        $(".text__item-list")
            .find(".text__item")
            .each(function (index) {
                // 현재 요소를 저장
                const currentItem = $(this);

                // 1초 간격으로 순차적으로 표시하기
                currentItem.delay(1000 * index).show(400, function () {
                    // 애니메이션 완료 후 부드럽게 스크롤 내리기
                    smoothScrollTo(
                        introContentText,
                        introContentText.scrollHeight,
                        2000
                    );

                    // 마지막 메시지가 표시된 경우에만 부드럽게 스크롤 내리기
                    if (
                        index ===
                        $(".text__item-list .text__item").length - 1
                    ) {
                        setTimeout(() => {
                            smoothScrollTo(
                                introContentText,
                                introContentText.scrollHeight,
                                1000
                            );
                        }, 1000);
                    }
                });
            });
    }, []);

    // 부드러운 스크롤 함수
    function smoothScrollTo(element, to, duration) {
        const start = element.scrollTop;
        const change = to - start;
        let currentTime = 0;
        const increment = 20;

        function animateScroll() {
            currentTime += increment;
            const val = Math.easeInOutQuad(
                currentTime,
                start,
                change,
                duration
            );
            element.scrollTop = val;
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        animateScroll();
    }

    // 이징 함수
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    //새 메세지 추가 때마다 인트로 채팅창 스크롤 항상 아래로 내리기
    useEffect(() => {
        $(".intro__content-text").animate(
            {
                scrollTop: $(".intro__content-text")[0].scrollHeight,
            },
            400
        );
    }, [newMessages]);

    // 새로운 메시지를 추가하는 함수
    const addNewMessage = (message) => {
        setNewMessages((prevMessages) => [...prevMessages, message]);
    };

    // input 창에 입력할 때마다 inputText 상태 업데이트
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    // 엔터 키를 눌렀을 때 메시지를 보내는 함수
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendClick();
        }
    };

    // 메시지를 보내는 함수
    const handleSendClick = () => {
        if (inputText.trim() !== "") {
            const newMessage = {
                id: newMessages.length + 1,
                text: inputText,
            };
            addNewMessage(newMessage);
            setInputText(""); // 입력 창 초기화
        }
    };

    // 현재 날짜
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setCurrentDate(new Date());
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const year = currentDate.getFullYear();
    const dayOfWeek = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return (
        <>
            {/* 메인 인트로 */}
            <section id="intro">
                <div className="intro">
                    {/* 인트로 이미지 */}
                    <div className="intro__img">
                        <div className="cover"></div>
                        <div className="opening">
                            <span>Hello!</span>
                        </div>

                        <img
                            src="./images/intro_back.png"
                            alt="인트로 이미지"
                        />
                        <img src="./images/intro_pc.gif" alt="인트로 이미지" />

                        <img
                            src="./images/intro_left_leg2.png"
                            alt="인트로 이미지"
                        />
                        <img
                            src="./images/intro_left_arm2.png"
                            alt="인트로 이미지"
                        />
                        <img
                            src="./images/intro_right_arm2.png"
                            alt="인트로 이미지"
                        />
                        <img
                            src="./images/intro_body.png"
                            alt="인트로 이미지"
                        />

                        <img
                            src="./images/intro_head2.png"
                            alt="인트로 이미지"
                        />
                        <img
                            src="./images/intro_eye2.png"
                            alt="인트로 이미지"
                        />
                        <img
                            src="./images/intro_mouse2.png"
                            alt="인트로 이미지"
                        />

                        <div className="intro-calendar">
                            <img
                                src="./images/intro_calendar.png"
                                alt="인트로 이미지"
                            />

                            <div className="date">
                                <div className="date-top">
                                    <span>{year}</span>
                                    <span>({dayOfWeek})</span>
                                    <span>{month}</span>
                                </div>
                                <span>{date}</span>
                            </div>
                        </div>
                        <div className="intro-watch">
                            <img
                                src="./images/intro_watch.png"
                                alt="인트로 이미지"
                            />
                            <div className="time">
                                <span>{hours}</span>
                                <span>{minutes}</span>
                                <span>{seconds}</span>
                            </div>
                        </div>

                        <img
                            src="./images/intro_light2.png"
                            alt="인트로 이미지"
                        />
                    </div>

                    {/* 인트로 내용 */}
                    <div className="intro__content">
                        <div className="intro__content-me">
                            <h4>웹 개발자</h4>
                            <h2>임경은</h2>
                            <div>github</div>
                            <a href="https://github.com/imlimge" target="blank">
                                <span>https://github.com/imlimge</span>
                            </a>
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
                                        새로운 것을 좋아하고 배우는 것을
                                        좋아하는 신입 웹 개발자 임경은입니다.
                                    </p>
                                </div>
                                <div className="text__item">
                                    <p>
                                        소통을 중요하게 생각하고 함께 일하는
                                        것이 편한 개발자가 되고 싶습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="text__item-list add">
                                {/* 새로운 메시지들을 순차적으로 보여줍니다. */}
                                {newMessages.map((message) => (
                                    <div
                                        key={message.id}
                                        className="text__item right"
                                    >
                                        <p>{message.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* intro__content-text */}

                        {/* 하단 채팅입력창 모양 */}
                        <div className="text__bottom">
                            <input
                                className="white"
                                ref={inputRef}
                                value={inputText}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder="문구를 입력하세요"
                            />
                            <div className="send" onClick={handleSendClick}>
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="fa-2x"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
