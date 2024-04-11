// 햄버거 메뉴 동작
const burger = $('.header__nav');

burger.each(function(index){
	let $this = $(this);
	
	$this.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	})
});


// 햄버거 메뉴의 각 항목을 클릭할 때 메뉴를 닫는 기능 추가
$(".menu-list__item").on("click", function() {
  // 햄버거 메뉴가 열려 있는 경우에만 동작
  if ($(".header__nav-menu").hasClass("on")) {
    // 햄버거 메뉴 닫기
    $(".header__nav-menu").removeClass("on");
    // 섹션 높이 초기화
    $(".header__nav-menu").css("height", "0");
  }
});

$(document).ready(function() {
  // 햄버거 메뉴 클릭 시 동작
  $(".header__nav").on("click", function() {
    // #header의 높이 가져오기
    let headerHeight = $("#header").height();
    // 섹션의 높이 가져오기
    let sectionHeight = $("#intro").height() ; 
    // #intro 섹션의 높이를 가져와서 px로 변환
    let totalHeight = sectionHeight - headerHeight - 2 + "px";


    // console.log(headerHeight,sectionHeight,totalHeight)


    // 햄버거 메뉴의 상태 확인
    if ($(".header__nav-menu").hasClass("on")) {
      // 햄버거 메뉴에 on 클래스가 있는 경우
      $(".header__nav-menu").removeClass("on");
      // 섹션 높이 설정
      $(".header__nav-menu").css("height", "0");
     
    }
    
    else {
    // 햄버거 메뉴에 on 클래스가 없는 경우
    $(".header__nav-menu").addClass("on")
    // 섹션 높이 설정
    $(".header__nav-menu").css("height", totalHeight);
  }
  });

});



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

    // 리사이즈 움직임이 없는 것을 감지하여 transition 설정 다시하기
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





    /*********************************************
    * 메인 첫 인트로 텍스트 부드럽게 등장
    *********************************************/
$(()=>{



})
    
    