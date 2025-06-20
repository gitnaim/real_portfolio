import SkillsContentList from "./SkillsContentList";
// import data from "../data";
import { useSelector } from "react-redux";

function SkillsContent(){
	// let {skills}=data;
    let data=useSelector(state => state.skills);
    // console.log(skills); // 배열

    return(
        <div className="content">
            <ul>
                {/* <SkillsContentList /> */}
				{
					data.map((d, i) => <SkillsContentList key={i} propsValue={d} />)
				}
            </ul>
        </div>
    );
}
export default SkillsContent;