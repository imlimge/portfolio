// 포트폴리오 데이터

export const pData = {
    site: [
        {
            idx: 1,
            name: "버거 사이트",
            skill: ["html", "CSS", "javascript", "jQuery"],
            percent: `100%`,
            txt: `버거 사이트 구현`,
            link: `https://imlimge.github.io/LKE-burger/`,
            thumisrc: `./images/portfolio/site_01/main.png`,
            isrc: `./images/portfolio/site_01/main2.png`,
            date: `23.8~23.9`,
            explain: [
                `버거킹 사이트를 직접 구현해보며 html,css,javascript,jquery 사용법을 배움`,
                `호주 버거킹 사이트를 참고하여 한국 사이트로 재구성`,
            ],

            point: [
                {
                    isrc: `./images/portfolio/site_01/point_01.png`,
                    title: `오프닝 커버`,
                    cont: `햄버거 이미지 순차 등장 및 오프닝 커버가 
        처음에만 등장하고 메뉴 이동 시 나타나지 않게 하기 위해 자바스크립트 설정`,
                },
                {
                    isrc: `./images/portfolio/site_01/point_02.png`,
                    title: `슬라이드 광고`,
                    cont: `슬라이드 광고파트 순수 자바스크립트로만 구현`,
                },
                {
                    isrc: `./images/portfolio/site_01/point_03.png`,
                    title: `스크롤 동적 재생`,
                    cont: `스크롤 위치에 따라서 각 동적요소 재생`,
                },
                {
                    isrc: `./images/portfolio/site_01/point_04.png`,
                    title: `스와이퍼,제이쿼리`,
                    cont: `스와이퍼 및 제이쿼리를 사용한 메뉴 이동`,
                },
                {
                    isrc: `./images/portfolio/site_01/point_05.png`,
                    title: `데이터 변경`,
                    cont: `데이터를 사용하여 한 페이지 내에서 클릭시 데이터만 변경`,
                },
                {
                    isrc: `./images/portfolio/site_01/point_06.png`,
                    title: `반응형`,
                    cont: `반응형으로 모바일 사이즈일 때 모바일 서브 메뉴 동작`,
                },
            ],
        },

        {
            idx: 2,
            name: "학원 사이트",
            skill: ["html", "CSS", "javascript", "jQuery", "React"],
            percent: `100%`,
            txt: `[리액트] 학원 사이트 구현`,
            link: `https://imlimge.github.io/LKE-kairos2/`,
            thumisrc: `./images/portfolio/site_02/main.png`,
            isrc: `./images/portfolio/site_02/main2.png`,
            date: `23.10~23.12`,
            explain: [
                `사용자와 사이트 구성 및 디자인 방향 협의 후 기술 구현`,
                `리액트를 사용하여 학원 사이트 제작`,
            ],

            point: [
                {
                    isrc: `./images/portfolio/site_02/point_01.png`,
                    title: `네비게이션`,
                    cont: `원페이지 사이트에서 각 파트로 이동하기 쉽게 
        네비게이션의 버튼을 누르면 해당 위치로 이동하도록 제작`,
                },
                {
                    isrc: `./images/portfolio/site_02/point_02.png`,
                    title: `동적요소`,
                    cont: `마우스 호버,클릭 시 움직임, 오프닝 시 글자 등장, 가로 스크롤 구현`,
                },
                {
                    isrc: `./images/portfolio/site_02/point_03.png`,
                    title: `데이터변경`,
                    cont: `정보가 달라져야 하는 부분에서
        두 지점을 정보를 각각 데이터 설정 후 버튼으로 변경하도록 구현,
        버튼을 통해 테이블 정보 변경
        `,
                },
            ],
        },

        {
            idx: 3,
            name: "쇼핑몰 사이트",
            skill: ["html", "CSS", "javascript", "jQuery", "React"],
            percent: `100%`,
            txt: `[리액트] 쇼핑몰 사이트 구현`,
            link: `https://imlimge.github.io/LKE-shop/`,
            thumisrc: `./images/portfolio/site_03/main.png`,
            isrc: `./images/portfolio/site_03/main2.png`,
            date: `23.12~24.01`,
            explain: [`쇼핑몰에서 자주 쓰이는 기능 구현`],

            point: [
                {
                    isrc: `./images/portfolio/site_03/point_01.png`,
                    title: `배너`,
                    cont: `메인 이미지 배너 스와이퍼 사용`,
                },
                {
                    isrc: `./images/portfolio/site_03/point_02.png`,
                    title: `모듈화`,
                    cont: `하나의 모듈로 데이터로 여러 페이지 생성`,
                },
                {
                    isrc: `./images/portfolio/site_03/point_03.png`,
                    title: `쇼핑몰 기능 구현`,
                    cont: [
                        `카테고리 체크 시 특정 카테고리 아이템만 출력`,
                        `아이템 페이징 및 아이템 순서 변경 기능`,
                        `전체 상품 검색`,
                        `장바구니 아이템 선택, 선택삭제, 개별삭제, 전체삭제`,
                        `선택 수량에 따른 가격 합계 및 배송비 선택적 포함`,
                        `로컬스토리지를 사용하여 장바구니 리스트에 이용`,
                    ],
                },
            ],
        },
    ],

    wordpress: {
        idx: 1,
        name: "워드 프레스",
        skill: ["photoshop", "illustrator", "wordpress"],
        percent: `80%`,
        txt: `회사 사이트 제작`,
        link: `https://01net.co.kr/`,
        thumisrc: `./images/portfolio/wordpress/main.png`,
        isrc: `./images/portfolio/wordpress/main2.png`,
        date: `21.03~21.07`,
        explain: [
            `워드프레스 avada 템플릿을 이용한 사이트 구현`,
            `사이트 내용 구성 (사이트에 사용되는 모든 문구 및 Q&A 등)`,
            `로고 및 일러스트 이미지 제작 (사이트에 사용된 모든 이미지 소스 제작)`,
        ],
    },

    design: [
        { isrc: `./images/portfolio/design/01.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/02.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/03.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/04.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/05.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/06.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/01.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/02.png`, title: `디자인1` },
        { isrc: `./images/portfolio/design/03.png`, title: `디자인1` },
    ],
};
