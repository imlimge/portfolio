
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet,useParams,useNavigate } from "react-router-dom";
import { useEffect} from "react";


import $ from "jquery";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";
window.jQuery = $;




export function MainArea() {





useEffect(()=>{

// 햄버거 메뉴 동작
const burger = $('.header__nav');

burger.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
        console.log('클릭')
	
});

// 햄버거 메뉴의 각 항목을 클릭할 때 메뉴 닫음
$(".item__wrap").on("click", function() {
  // 햄버거 메뉴가 열려 있는 경우에만 동작
  if ($(".header__nav-menu").hasClass("on")) {
    // 햄버거 메뉴 닫기
    $(".header__nav-menu").removeClass("on");
    // 섹션 높이 초기화
    $(".header__nav-menu").css("height", "0");
  }
});

// 헤더 타이틀의 각 span 요소를 클릭할 때
$(".header__title span").on("click", function() {
  // 헤더 네비게이션 메뉴에 on 클래스가 있는 경우
  if ($(".header__nav-menu").hasClass("on")) {
      // on 클래스를 제거하여 메뉴 닫기
      $(".header__nav-menu").removeClass("on");
      // 섹션 높이 초기화
      $(".header__nav-menu").css("height", "0");
  }
});

  // 햄버거 메뉴 클릭 시 동작
  $(".header__nav").on("click", function() {
    // #header의 높이 가져오기
    let headerHeight = $("#header").height();
    // 섹션의 높이 가져오기
    let sectionHeight = $("section").height() ; 
    // #intro 섹션의 높이를 가져와서 px로 변환
    let totalHeight = sectionHeight - headerHeight - 2 + "px";


    console.log(headerHeight,sectionHeight,totalHeight)


    // 햄버거 메뉴의 상태 확인
    if ($(".header__nav-menu").hasClass("on")) {
      // 햄버거 메뉴에 on 클래스가 있는 경우
      $(".header__nav-menu").removeClass("on");
      // 섹션 높이 설정
      $(".header__nav-menu").css("height", "0");
     
      $('.item__wrap').click()

    }
    
    else {
    // 햄버거 메뉴에 on 클래스가 없는 경우
    $(".header__nav-menu").addClass("on")
    // 섹션 높이 설정
    $(".header__nav-menu").css("height", totalHeight);
  }
  });



  const spans = document.querySelectorAll('.header__title span');
  spans.forEach(span => {
    const width = span.offsetWidth; 
    span.style.setProperty('--span-width', `${width}px`); 
  });
  

})



// 윈도우 크기 변경 시 섹션 높이 다시 계산
$(window).on("resize", function() {
  // #header의 높이 가져오기
  let headerHeight = $("#header").height();
  // 섹션의 높이 가져오기
  let sectionHeight = $("#intro").height();
  // #intro 섹션의 높이 계산
  let totalHeight = sectionHeight - headerHeight - 4;

  // 햄버거 메뉴가 열려있는 경우에만 섹션 높이를 변경
  if ($(".header__nav-menu").hasClass("on")) {
    $(".header__nav-menu").height(totalHeight);
    $(".header__nav-menu.on").css('transition','none');

    // 리사이즈 움직임 감지 후 transition 설정 다시하기
    let resizeTimer;
    $(this).on("resize", function() {
      clearTimeout(resizeTimer);
      console.log('resize1')
      resizeTimer = setTimeout(function() {
        $(".header__nav-menu.on").css('transition', 'height 0.4s ease-in-out');
        console.log('resize2')
      }, 250);
      
    });
  }
});








  return(
    <>
  {/* <!-- 헤더 (네비게이션) --> */}
  <header id="header">
          
            <div className="header__wrap">
                {/* <!-- 상단 정보바 --> */}
                <div className="header__info">
                <Link to="/">
           <div className="header__home">
         
                 </div> 
                  </Link>
                   
                        <div className="header__logo">
                            <img src="./images/logo.png" alt="상단 로고" />
                        </div>
                   
                    {/* <div className="header__title">
                       
                        <Link to="about"><span>about,</span></Link>
                        <Link to="portfolio"><span>portfolio</span></Link>
                    </div> */}
                </div>

                {/* <!-- 오른쪽 메뉴 햄버거 버튼 --> */}
                <div className="header__nav">
                    <a className="menu-trigger type7" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                {/* <!-- 메뉴 네비게이션 --> */}
                <nav className="header__nav-menu">
                    <ul className="menu-list">
                      
                        <li>
                          <Link to="/">
                          <div className="item__wrap">
                            <div className="menu-list__item">
                                메인
                                <span>main</span></div>
                            </div>

                            </Link>
                        </li>

                        <li> <Link to="about">
                        <div className="item__wrap">
                           <div className="menu-list__item">
                               자기소개
                                <span>about</span>
                            </div>
                            <ul className="sub-list">
                                <li>
                                   내 소개 & 업무 스킬
                                </li>
                            </ul>
                            </div></Link>
                        </li>

                        <li><Link to="portfolio">
                        <div className="item__wrap">
                            <div className="menu-list__item">
                                포트폴리오
                                <span>portfolio</span>
                            </div>
                            <ul className="sub-list">
                                <li>
                                    웹 사이트
                                </li>
                                <li>
                                    워드프레스
                                </li>
                                <li>
                                    디자인
                                </li>
                            </ul></div></Link>
                        </li>
                    </ul>
                </nav>
            </div>
           
        </header>

        {/* <!-- 메인 --> */}
        <main id="main">

          <Outlet />


        </main>

    </>
  
  );
  
  }