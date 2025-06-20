import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import ScrollTrigger from '@terwanerik/scrolltrigger';
import SubTop from "./SubTop";
import SubHeader from "./SubHeader";
import SubSection1 from "./SubSection1";
import SubContentList from "./SubContentList";
import OpenSource from "./OpenSource";
import CaseStudy from "./CaseStudy";
// import AOS from "aos";
import 'aos/dist/aos.css';
import { useSelector } from "react-redux";

function SubPage(){
  let data=useSelector(state => state.SubContentList);

	let navigate=useNavigate();

	useEffect(()=>{
		gsap.registerPlugin(ScrollToPlugin);

		function portfolioListInit(){
			gsap.to(window, {scrollTo: 0, duration: 0});

			if(document.body.classList.contains("on")){
				document.body.classList.remove("on");
			}
		}

		portfolioListInit();

		const tab = document.getElementById('tab');
		const mGnb = document.getElementById('m_gnb');
		const mGnbList=mGnb.firstElementChild.children;
		const mClose = document.getElementById('m_close');
		const dim = document.getElementById("dim2");

		tab.addEventListener('click', function(e) {
			e.preventDefault();
			tab.classList.toggle("active");

			if(mGnb.classList.contains("active")){
				mGnb.classList.remove("active");
				mClose.classList.remove("active");
			}
			else{
				mGnb.classList.add("active");
				mClose.classList.add("active");
				dim.classList.add("active");
			}
		});

		dim.addEventListener("click", function(){
			mGnb.classList.remove("active");
			mClose.classList.remove("active");
			dim.classList.remove("active");
		});

		mClose.addEventListener("click", function(e){
			e.preventDefault();
	
			mGnb.classList.remove("active");
			mClose.classList.remove("active");
			dim.classList.remove("active");
		});

		let header=document.querySelector("header");
		let gnb=document.getElementById("gnb");
		let gnbList=gnb.firstElementChild.children;
		let subLogo=document.querySelector(".logo");

		//(web)gnb[0] active on
		gnbList[3].firstElementChild.classList.add("active");
		mGnbList[3].firstElementChild.classList.add("active");

		let total=gnbList.length;

		for(let i=0; i<total; i++){
			gnbList[i].addEventListener("click", e => {
				e.preventDefault();

				if(i === 3) return;

				navigate("/", {state: i.toString()});
			});

			mGnbList[i].addEventListener("click", e => {
				e.preventDefault();

				if(i === 3) return;

				navigate("/", {state: i.toString()});
			});
		}
		subLogo.addEventListener("click", function(e){
			e.preventDefault();
			navigate("/", {state: "0"});
		});
	});


  return(
    <div className="list_wrapper">
      <SubTop />
        <SubHeader />
        <SubSection1 />
            
        <div className="list">
            <ul>
                <SubContentList propsValue={data}/>
            </ul> 
        </div>
				
				<div className="opensource">
					<h2>OPEN SOURCE</h2>
					<OpenSource />
				</div>

				<div className="caseStudy">
					<h2>CASE STUDY</h2>
					<CaseStudy />
				</div>

        <div id="dim2">dim2</div>
        <div id="topBtn">top</div>
    </div>
  );
}
export default SubPage;