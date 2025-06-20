const data = {
  navigation: ["HOME", "INFORMATION", "SKILLS", "PORTFOLIO", "CONTACT"],

  mainTitle: [
    {
      p: "Frontend Developer",
      span: ["NAIM_KIM", "PORTFOLIO"],
    },
  ],
  mainSubTitle: [
    // "프론트엔드 사원으로서",
    // "팀원들과 적극적으로 소통하고 협력하여 최적의 솔루션을 찾는 데 기여하고",
    // "팀과 함께 성장하며 발전해나가고 싶습니다."
    "저는 프론트엔드 개발자로서, 팀원들과 긴밀한 소통과 협력을 통해",
    "최적의 솔루션을 탐구하고 이를 구현하는 데 전념합니다.",
    "팀의 성장과 발전을 위해 적극적으로 노력하며, 지속적인 학습과 함께",
    "혁신적인 아이디어를 제안하여 프로젝트의 품질과 효율성을 향상시키고자 합니다.",
  ],
  mainSkill: [
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

  videoList: [
    "technology.mp4",
    // "particle.mp4",
    "black1.mp4",
    "black2.mp4",
    // "alphabet.mp4",
    // "technology.mp4",
  ],

  subTitle: {
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

  skills: [
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

  contact: [
    "KAKAO_TALK - XXXXX",
    "INSTARGRAM - xxxxxxxx",
    "GIT - https://gitnaim.github.io/project1/",
    "CODE_PEN - https://codepen.io/collection/WvPxrM",
  ],
};
export default data;
