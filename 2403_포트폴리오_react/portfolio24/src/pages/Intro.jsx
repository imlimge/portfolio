import "../css/intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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

    const scrollToBottom = () => {
        const element = document.querySelector('.intro__content-text');
        element.scrollTop = element.scrollHeight;
    };
    
    // useEffect를 사용하여 초기에 한 번 스크롤을 아래로 이동하도록 설정
    useEffect(() => {
        scrollToBottom();
    }, []);
    
    // 이후에 새로운 메시지가 추가될 때마다 스크롤을 항상 아래로 이동하도록 설정
    useEffect(() => {
        scrollToBottom();
    }, [newMessages]);
    

    useEffect(()=>{
        $('.text__item-list').find('.text__item').hide();
        $('.text__item-list').find('.text__item').each(function(index) {
            $(this).delay(1000 * index).show(400);
        });
    },[]);

 


    // 새로운 메시지를 추가하는 함수
    const addNewMessage = (message) => {
        setNewMessages(prevMessages => [...prevMessages, message]);
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
                text: inputText
            };
            addNewMessage(newMessage);
            setInputText(""); // 입력 창 초기화
        }
    };

    return (
        <>
            {/* 메인 인트로 */}
            <section id="intro">
                <div className="intro">
                    {/* 인트로 이미지 */}
                    <div className="intro__img">
                        <img src="./images/intro_temp.png" alt="인트로 이미지" />
                    </div>
                    
                    {/* 인트로 내용 */}
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
                            <div className="text__item-list add">
                                {/* 새로운 메시지들을 순차적으로 보여줍니다. */}
                                {newMessages.map(message => (
                                    <div key={message.id} className="text__item">
                                        <p>{message.text}</p>
                                    </div>
                                ))}
                            </div>
                            </div>{/* intro__content-text */}


                            {/* 하단 채팅입력창 모양 */}
                            <div className="text__bottom">
                                <input
                                    className="white"
                                    ref={inputRef}
                                    value={inputText}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                    placeHolder="문구를 입력하세요"
                                />
                                <div className="send" onClick={handleSendClick}>
                                    <FontAwesomeIcon icon={faPaperPlane} className="fa-2x" />
                                </div>
                            </div>
                       
                    </div>
                </div>
            </section>
        </>
    );
}
