import { createSlice, configureStore } from "@reduxjs/toolkit";

let navigation = createSlice({
  name: "navigation",
  initialState: ["HOME", "INFORMATION", "SKILLS", "PORTFOLIO", "CONTACT"],
});

let mainTitle = createSlice({
  name: "mainTitle",
  initialState: [
    {
      p: "Frontend Developer",
      span: ["NAIM_KIM", "PORTFOLIO"],
    },
  ],
});

let mainSubTitle = createSlice({
  name: "mainSubTitle",
  initialState: [
    "프론트엔드 사원으로서",
    "팀원들과 적극적으로 소통하고 협력하여 최적의 솔루션을 찾는 데 기여하고",
    "팀과 함께 성장하며 발전해나가고 싶습니다.",
  ],
});

let mainSkill = createSlice({
  name: "mainSkill",
  initialState: [
    {
      num: "01",
      span: "UX/UI",
    },
    {
      num: "02",
      span: "FRONTEND",
    },
    {
      num: "03",
      span: "BACKEND",
    },
    {
      num: "04",
      span: "DB",
    },
    {
      num: "05",
      span: "SCM",
    },
  ],
});

let videoList = createSlice({
  name: "videoList",
  // initialState: ["technology.mp4", "black1.mp4", "black2.mp4", "alphabet.mp4"],
  initialState: ["technology.mp4", "black1.mp4", "black2.mp4"],
});

let inforTitle = createSlice({
  name: "inforTitle",
  initialState: {
    strong: [
      "프론트엔드 개발은 저에게, ",
      "단순히 코드를 작성하는 과정 그 이상의 의미를 지닙니다. ",
    ],
    span: [
      "저는 웹 페이지를 통해 사용자의 니즈를 충족시키고 문제점을 해결하는 과정에 흥미를 느낍니다. ",
      "항상 배우고 성장하려는 긍정적인 태도를 가지고 있으며, 끊임없는 학습과 성장을 통해 나의 역량을 발전시키고, ",
      "팀과 성장하며 발전해나가고 싶습니다.",
    ],
  },
});

let skills = createSlice({
  name: "skills",
  initialState: [
    {
      num: 0,
      alt: "ux/ui icons",
      desc: {
        dt: "UI/UX",
        dd: [
          "HTML5 DTD문법을 준수하고 웹 접근성을 높인 Semantic Page, 모바일 디바이스를 고려한 반응형 스타일을 구현하고, SASS를 이용하여 보다 효율적인 CSS를 작성할 수 있습니다.",
        ],
      },
      icon: [
        {
          image: "html_1.png",
          alt: "html_logo",
        },
        {
          image: "css_1.png",
          alt: "css_logo",
        },
        {
          image: "js_3.png",
          alt: "js_logo",
        },
        {
          image: "figma_1.png",
          alt: "figma_logo",
        },
        {
          image: "scss_1.png",
          alt: "scss_logo",
        },
      ],
    },
    {
      num: 1,
      alt: "frontend icons",
      desc: {
        dt: "FRONTEND",
        dd: [
          "최신 ECMAScript 문법과 기능을 활용하여, JavaScript 코드를 보다 효율적이고 현대적으로 작성할 수 있으며, GSAP와 Swiper JS등의 라이브러리를 사용하여 UX를 보다 인터랙티브하게 구현할 수 있습니다.",
        ],
      },
      icon: [
        {
          image: "react.png",
          alt: "react_logo",
        },
        {
          image: "redux.png",
          alt: "redux_logo",
        },
        {
          image: "router.png",
          alt: "router_logo",
        },
        {
          image: "axois.png",
          alt: "axois_logo",
        },
      ],
    },
    {
      num: 2,
      path: ["nodeJs", "nodeExpress"],
      alt: "backend icons",
      desc: {
        dt: "backend",
        dd: [
          "Node.JS를 사용하여 웹 서버, API개발, 데이터베이스 통신 등 다양한 서버 측 작업을 수행할 수 있습니다.",
        ],
      },
      icon: [
        {
          image: "nodeJs.png",
          alt: "nodeJs_logo",
        },
        {
          image: "nodeJs_express.png",
          alt: "nodeJs_express_logo",
        },
      ],
    },
    {
      num: 3,
      path: "mongoDb",
      alt: "db icons",
      desc: {
        dt: "DB",
        dd: [
          "MongoDB를 통해 데이터베이스를 설계, 구축 및 관리할 수 있으며, 유연하고 확장 가능한 데이터베이스 솔루션을 구현할 수 있습니다.",
        ],
      },
      icon: [
        {
          image: "mongoDB.png",
          alt: "mongoDB_logo",
        },
      ],
    },
    {
      num: 4,
      path: ["git", "gitHub"],
      alt: "scm icons",
      desc: {
        dt: "SCM",
        dd: [
          "Git과 GitHub를 사용하여 코드를 효율적으로 관리하고 협업, 코드 리뷰, 이슈 트래킹, 버전 관리 등의 다양한 작업을 수행할 수 있습니다.",
        ],
      },
      icon: [
        {
          image: "git_1.png",
          alt: "git_logo",
        },
        {
          image: "git_hub.png",
          alt: "git_hub_logo",
        },
      ],
    },
  ],
});

let contact = createSlice({
  name: "contact",
  initialState: [
    "KAKAO_TALK - XXXXX",
    "INSTARGRAM - xxxxxxxx",
    "GIT - https://gitnaim.github.io/project1/",
    "CODE_PEN - https://codepen.io/collection/WvPxrM",
  ],
});

let subTitle = createSlice({
  name: "subTitle",
  initialState: {
    strong: "PORTFOLIO",
    span: "LIST",
    p: "THIS IS A RENEWDE SITE.",
  },
});

let SubContentList = createSlice({
  name: "SubContentList",
  initialState: [
    {
      number: "1",
      title: "CAMPING CAR",
      lang: "HTML + CSS + JAVASCRIPT + REACT",
      exp1: "여행 컨셉을 가진 기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      exp2: "HTML5와 CSS3를 기반으로 하며, 최신 웹 표준을 준수하여 구축되었습니다. 반응형 디자인을 적용하여 모바일과 데스크톱에서 모두 훌륭한 사용 경험을 제공합니다. JavaScript와 Vue.js를 통해 동적이고 인터랙티브한 요소들을 구현했으며, 부드러운 애니메이션과 사용자 친화적인 UI를 제공합니다. 또한, 웹사이트의 호스팅은 GitHub Pages를 활용하여 무료로 제공되며, 이를 통해 손쉽게 배포 및 관리할 수 있습니다.",
      date: "2024. 04",
      link: "WEBSITE",
      smallLink: "WEBSITE",
      href: "https://gitnaim.github.io/portfolio/portfolio1/",
    },
    {
      number: "2",
      title: "구름아래소극장",
      lang: "HTML + CSS + JAVASCRIPT + REACT",
      exp1: "공연장을 소개하기 위한 원 페이지 웹 사이트입니다. ",
      exp2: "스크롤 인터렉션을 통해 사용자의 이목을 끌고 콘텐츠에 집중할 수 있게 하였습니다. 다양한 동적 요소를 통해 사용자는 흥미를 유지하며 웹 사이트의 내용을 탐색할 수 있으며 반응형 UI와 섹션별 인터렉션을 제안해 결과물의 완성도를 더욱 높였습니다. 또한, 웹사이트의 호스팅은 GitHub Pages를 활용하여 무료로 제공되며, 이를 통해 손쉽게 배포 및 관리할 수 있습니다.",
      date: "2024. 04",
      link: "WEBSITE",
      smallLink: "WEBSITE",
      href: "https://gitnaim.github.io/portfolio/portfolio2/",
    },
    {
      number: "3",
      title: "MARYMOND",
      lang: "HTML + CSS + JAVASCRIPT",
      exp1: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      exp2: "반응형 디자인을 채택하여 모바일 환경에서도 원활한 이용이 가능합니다. JavaScript와 jQuery를 사용하여 인터랙티브한 요소들을 구현했고, 부드러운 스크롤 효과와 다양한 애니메이션을 추가하여 사용자 경험을 향상시켰습니다. 또한, 웹사이트의 호스팅은 GitHub Pages를 활용하여 무료로 제공되며, 이를 통해 손쉽게 배포 및 관리할 수 있습니다.",
      date: "2024. 03",
      link: "WEBSITE",
      smallLink: "WEBSITE",
      href: "https://gitnaim.github.io/portfolio/portfolio3/",
    },
    {
      number: "4",
      title: "NAVER WHALE RENEWAL",
      lang: "HTML + CSS + JAVASCRIPT",
      exp1: "NAVER WHALE을 리뉴얼 웹 페이지를 제작했습니다.",
      exp2: "HTML5와 CSS3를 기반으로 구성되어 있으며, 반응형 디자인을 통해 모바일 및 데스크톱 환경에서 모두 원활하게 작동합니다. JavaScript와 React를 이용하여 동적 요소와 사용자 상호작용을 구현했으며, 뛰어난 성능과 확장성을 제공합니다. 또한, 웹사이트는 GitHub Pages를 활용하여 호스팅되어 손쉬운 배포와 관리가 가능합니다.",
      date: "2024. 02",
      link: "WEBSITE",
      smallLink: "WEBSITE",
      href: "https://gitnaim.github.io/portfolio/portfolio4/",
    },
    {
      number: "5",
      title: "LG BEST SHOP",
      lang: "HTML + CSS + JAVASCRIPT",
      exp1: "LG BEST SHOP를 리뉴얼 웹 페이지를 제작했습니다.",
      exp2: "HTML5와 CSS3를 기반으로 구성되었으며, 반응형 디자인을 통해 모바일 환경에서도 훌륭한 사용 경험을 제공합니다. JavaScript와 Vue.js를 사용하여 동적 요소와 인터랙티브한 기능을 구현했으며, 부드럽고 효과적인 UI/UX를 제공합니다. 또한, GitHub Pages를 통해 호스팅되어 무료로 배포되며, GitHub 저장소와의 연동을 통해 쉬운 관리가 가능합니다.",
      date: "2024. 02",
      link: "WEBSITE",
      smallLink: "WEBSITE",
      href: "https://gitnaim.github.io/portfolio/portfolio5/",
    },
  ],
});

let OpenSourceList = createSlice({
  name: "OpenSourceList",
  initialState: [
    {
      image: "opensource_toggle.png",
      p: "Card Hover Effect",
      span: "HTML, CSS, JAVASCRIPT로 기본적인 card style을 구현하여 AWS에 업로드하였습니다.",
      link: "http://nodejs.eba-qixxjcwh.us-east-2.elasticbeanstalk.com/",
    },
    {
      image: "opensource3.png",
      p: "React + JavaScript Video API",
      span: "React를 사용한 첫 작업이며 router-dom, redux, redux-toolkit에 대해 공부가 되었습니다. JavaScript Video API를 React에 접목했습니다.",
      link: "https://gitnaim.github.io/open_source3/",
      github: "https://github.com/gitnaim/open_source3",
    },
    {
      image: "op_2.png",
      p: "Parallax UI",
      span: "공부한 React의 기능을 이용하고, AJAX의 방식으로 React Axios Library를 활용하여 탭 기능을 구현하였습니다.",
      link: "https://gitnaim.github.io/open_source2/",
      github: "https://github.com/gitnaim/open_source2",
    },
    {
      image: "opensource4.png",
      p: "React Data Sort",
      span: "새롭게 출시된 React 18과 Hook 함수를 적극적으로 공부하고 활용해볼 수 있었을 뿐 아니라 편의를 돕는 여러 라이브러리도 활용해 볼 수 있었습니다. JavaScript sort() 메서드를 활용하여 데이터를 정리하였습니다.",
      link: "https://gitnaim.github.io/open-source4/",
      github: "https://github.com/gitnaim/open-source4",
    },
    {
      image: "opensource6.png",
      p: "Accordion Menu",
      span: "새롭게 출시된 React 18과 Hook 함수를 적극적으로 공부하고 활용해볼 수 있었을 뿐 아니라 편의를 돕는 여러 라이브러리도 활용해 볼 수 있었습니다. JavaScript sort() 메서드를 활용하여 데이터를 정리하였습니다.",
      link: "https://gitnaim.github.io/open-source5_6/accordion_menu/",
      github: "https://github.com/gitnaim/open-source5_6.git",
    },
    {
      image: "opensource5.png",
      p: "Two Depth Menu",
      span: "새롭게 출시된 React 18과 Hook 함수를 적극적으로 공부하고 활용해볼 수 있었을 뿐 아니라 편의를 돕는 여러 라이브러리도 활용해 볼 수 있었습니다. JavaScript sort() 메서드를 활용하여 데이터를 정리하였습니다.",
      link: "https://gitnaim.github.io/open-source5_6/two_depth_menu/",
      github: "https://github.com/gitnaim/open-source5_6.git",
    },
  ],
});
let CaseStudyListList = createSlice({
  name: "CaseStudyListList",
  initialState: [
    {
      title: "Purgio Ballad",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy1",
    },
    {
      title: "Sangsangin",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy2",
    },
    {
      title: "KG Eduone",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy3",
    },
    {
      title: "Ecc",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy4",
    },
    {
      title: "W Concept",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy5",
    },
    {
      title: "Missha",
      exp: "기업을 소개하기 위한 원 페이지 웹 사이트입니다.",
      content: "React + Axios + JavaScript",
      link: "https://gitnaim.github.io/case_study/caseStudy6",
    },
  ],
});

export default configureStore({
  reducer: {
    navigation: navigation.reducer,
    mainTitle: mainTitle.reducer,
    mainSubTitle: mainSubTitle.reducer,
    mainSkill: mainSkill.reducer,
    videoList: videoList.reducer,
    inforTitle: inforTitle.reducer,
    skills: skills.reducer,
    contact: contact.reducer,
    subTitle: subTitle.reducer,
    SubContentList: SubContentList.reducer,
    OpenSourceList: OpenSourceList.reducer,
    CaseStudyListList: CaseStudyListList.reducer,
  },
});
