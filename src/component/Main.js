
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Controller from "./Controller";
import MainSkills from "./MainSkills";

function Main(){
		let mainTitle=useSelector(state => state.mainTitle);
		let mainSubTitle=useSelector(state => state.mainSubTitle);
		let mainSkill=useSelector(state => state.mainSkill);
		let videoList=useSelector(state => state.videoList);

    return(
        <div id="main">
			<div className="media">
				<video id="my_video" alt="video" muted autoPlay playsInline poster={process.env.PUBLIC_URL+"/assets/images/video_poster.jpg"}></video>
			</div>
            <div className="inner">
				<div className="title">
					<h2><p id="simple">{mainTitle.p}</p></h2>
				</div>
				<div className="sub_title">
					{mainSubTitle.map((d, i) => <span key={i}>{d}</span>)}
				</div>
                <Controller propsValue={videoList} />
                <MainSkills propsValue={mainSkill}/>
            </div>
            <div className="dim">dim</div>
        </div>
    );
}
export default Main;