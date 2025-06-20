// import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AOS from "aos";
import TypeIt from "typeit";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "aos/dist/aos.css";

function Header() {
  let location = useLocation();
  let link = location.state;

  let navigation = useSelector((state) => state.navigation);
  let videoLi = useSelector((state) => state.videoList);

  // let {videoList}=data;
  // console.log("1. "+videoList);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const titleText = new TypeIt("#simple", {
      speed: 30,
      waitUntilVisible: true,
      afterComplete: function (instance) {
        let subTitle = document.querySelector(".sub_title");
        let skillsUl = document.querySelector(".skills ul");

        instance.destroy();

        // main_ subTitle
        gsap.fromTo(subTitle, { opacity: 0 }, { opacity: 1, duration: 0.2 });
        // main_ skillsUl
        gsap.fromTo(skillsUl, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      },
    });

    //main_ text Effect_ typing
    titleText
      .type("Backend Developer", { delay: 30 })
      .move(-13)
      .pause(300)
      .delete(4)
      .type("Front", { delay: 30 })
      .move(null, { to: "END" })
      .type("<br><span>NAIM_KIM</span><br><span>PORTFOLIO</span>")
      .go();

    //section1_text effect_ AOS
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 120,
      delay: 3000,
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });

    //video
    // const videoUrl=["particle.mp4", "black1.mp4", "black2.mp4", "alphabet.mp4"];
    const videoUrl = videoLi;

    let video = document.getElementById("my_video");

    let controller = document.querySelector(".controller");
    let prevBtn = controller.querySelector(".prev");
    let nextBtn = controller.querySelector(".next");
    let controllerList = controller.querySelectorAll(".count li");
    let svg = controller.querySelector("svg");
    let pagenation = controller.querySelector(".num");

    let videoTotal = videoUrl.length;
    let videoN = 0;
    let videoPath =
      process.env.PUBLIC_URL + "/assets/video/" + videoUrl[videoN];

    let svgOffset = 25;

    video.setAttribute("src", videoPath);
    video.muted = true;

    // function videoDimmed(){
    // 	controller.classList.remove("active");

    // 	for(let i=0; i<controllerList.length; i++){
    // 		if(controllerList[i].classList.contains("active")){
    // 			controllerList[i].classList.remove("active");
    // 		}
    // 	}

    // 	gsap.fromTo(video, {display: "block", opacity: 0}, {opacity: 1, duration: 0.3, onComplete: function(){
    // 		video.play();

    // 		controller.classList.add("active");
    // 		controllerList[videoN].classList.add("active");
    // 		svg.style.left=svgOffset+(videoN*24);
    // 		pagenation.innerHTML=`<span>${videoN+1}</span> / ${videoTotal}`;
    // 	}});
    // }

    function videoDimmed() {
      controller.classList.remove("active");

      const updatedControllerList = controller.querySelectorAll(".count li"); // ⬅ 매번 새로 가져오기

      if (videoN >= updatedControllerList.length) videoN = 0;

      for (let i = 0; i < updatedControllerList.length; i++) {
        updatedControllerList[i].classList.remove("active");
      }

      gsap.fromTo(
        video,
        { display: "block", opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          onComplete: function () {
            video.play();

            controller.classList.add("active");

            // ⬇ 수정된 리스트 사용
            if (updatedControllerList[videoN]) {
              updatedControllerList[videoN].classList.add("active");
            }
            svg.style.left = svgOffset + videoN * 24;
            pagenation.innerHTML = `<span>${videoN + 1}</span> / ${videoTotal}`;
          },
        }
      );
    }

    video.addEventListener("loadeddata", function () {
      videoDimmed();
    });

    video.addEventListener("ended", function () {
      if (videoN < videoTotal - 1) {
        videoN += 1;
      } else {
        videoN = 0;
      }

      video.pause();
      videoPath = process.env.PUBLIC_URL + "/assets/video/" + videoUrl[videoN];
      video.setAttribute("src", videoPath);
    });

    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();

      videoN > 0 ? videoN-- : (videoN = videoTotal - 1);

      video.pause();
      videoPath = process.env.PUBLIC_URL + "/assets/video/" + videoUrl[videoN];
      video.setAttribute("src", videoPath);
    });

    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();

      videoN < videoTotal - 1 ? videoN++ : (videoN = 0);

      //console.log(videoN);

      video.pause();
      videoPath = process.env.PUBLIC_URL + "/assets/video/" + videoUrl[videoN];
      video.setAttribute("src", videoPath);
    });

    // Tab_ click event_ mobile_menu_on/off
    const tab = document.getElementById("tab");
    const mGnb = document.getElementById("m_gnb");
    const mGnbList = mGnb.firstElementChild.children;

    const mClose = document.getElementById("m_close");
    const dim = document.getElementById("dim2");
    const skills = document.querySelector("#main .skills");

    tab.addEventListener("click", function (e) {
      e.preventDefault();
      //tab을 누를 때 마다 tab의 active가 와리가리한다.
      tab.classList.toggle("active");

      //mGnb가 active상태일 때, tab을 클릭하면
      if (mGnb.classList.contains("active")) {
        //mGnb active가 off되고
        mGnb.classList.remove("active");
        mClose.classList.remove("active");
      } else {
        //mGnb가 off상태일 때, tab을 클릭하면
        // mGnb의 active가 on된다.
        mGnb.classList.add("active");
        //mClose active on
        mClose.classList.add("active");
        //dim active on
        dim.classList.add("active");
      }
    });

    dim.addEventListener("click", function () {
      mGnb.classList.remove("active");
      mClose.classList.remove("active");
      dim.classList.remove("active");
    });

    mClose.addEventListener("click", function (e) {
      e.preventDefault();

      mGnb.classList.remove("active");
      mClose.classList.remove("active");
      dim.classList.remove("active");
    });

    // click gnb => move selected gnb page
    let n = 0;
    let t = 0;
    let topPos = 0;

    let header = document.querySelector("header");
    let gnb = document.getElementById("gnb");
    let gnbList = gnb.firstElementChild.children;
    //(web)gnb[0] active on
    gnbList[0].firstElementChild.classList.add("active");

    function resizeHandler() {
      if (window.innerHeight < 550) {
        skills.classList.add("invisible");
      } else {
        skills.classList.remove("invisible");
      }
    }

    //(web)gnb[n]을 클릭하면 해당 페이지로 이동한다.
    //(mobile)gnb[n]을 클릭하면 해당 페이지로 이동한다.
    //console.log(mGnbList);
    let section = document.querySelectorAll("section");
    let btnTop = document.getElementById("topBtn");
    //console.log(section);

    let pageList = [header];

    for (let i = 0; i < section.length; i++) {
      pageList.push(section[i]); //header는 fixed상태. 선택한 section을 header의 위치에 밀어넣는 것?
    }

    function init() {
      if (link) {
        let targety = pageList[Number(link)].offsetTop;

        gsap.to(window, { scrollTo: targety, duration: 0.5 });
      }
    }

    init();

    function scrollListener() {
      t = window.scrollY;

      if (t < pageList[1].offsetTop) {
        n = 0;
      } else if (t < pageList[2].offsetTop) {
        n = 1;
      } else if (t < pageList[3].offsetTop) {
        n = 2;
        btnTop.classList.remove("on");
      } else if (t < pageList[4].offsetTop) {
        n = 3;
        btnTop.classList.add("on");

        if (window.innerHeight + t == document.body.scrollHeight) {
          n = 4;
        }
      } else {
        n = 4;
      }

      for (let i = 0; i < gnbList.length; i++) {
        if (i == n) {
          if (
            gnbList[i].firstElementChild.classList.contains("active") === false
          ) {
            gnbList[i].firstElementChild.classList.add("active");
            mGnbList[i].firstElementChild.classList.add("active");
          }
        } else {
          if (
            gnbList[i].firstElementChild.classList.contains("active") === true
          ) {
            gnbList[i].firstElementChild.classList.remove("active");
            mGnbList[i].firstElementChild.classList.remove("active");
          }
        }
      }

      if (n == 0) {
        if (btnTop.classList.contains("active") === true) {
          btnTop.classList.remove("active");
          // btnTop.style.transition = 'none';
        }
      } else {
        if (btnTop.classList.contains("active") === false) {
          btnTop.classList.add("active");
          // btnTop.style.transition = 'all 2s ease-in';
        }
      }

      if (n == 3 || n == 4) {
        if (document.body.classList.contains("on") === false) {
          document.body.classList.add("on");
        }
      } else {
        if (document.body.classList.contains("on") === true) {
          //class body의 on이 활성화되어있으면
          document.body.classList.remove("on"); //class body의 on을 지운다.
        }
      }
    }

    window.addEventListener("scroll", scrollListener);

    for (let i = 0; i < gnbList.length; i++) {
      gnbList[i].addEventListener("click", function (e) {
        e.preventDefault();

        n = i;
        topPos = pageList[n].offsetTop;

        gsap.to(window, { scrollTo: topPos, duration: 0.4 });
      });

      mGnbList[i].addEventListener("click", function (e) {
        e.preventDefault();

        mGnb.classList.remove("active");
        mClose.classList.remove("active");
        dim.classList.remove("active");

        n = i;
        topPos = pageList[n].offsetTop;

        gsap.to(window, { scrollTo: topPos, duration: 0.4, delay: 0.4 });
      });
    }

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <header>
      <div className="inner">
        <Logo />
        <Navigation propsValue={navigation} />
      </div>
    </header>
  );
}
export default Header;
