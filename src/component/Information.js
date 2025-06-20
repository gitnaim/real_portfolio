// import data from "../data";
import InformationSubtitle from "./InformationSubtitle";
import { useSelector } from "react-redux";

function Information(){
    let data=useSelector(state => state.inforTitle);

    return(
        <section id="section1">
            <div className="inner">
                <div className="title">
                    <h2>
                        INFORMATION
                    </h2>
                </div>
                <InformationSubtitle propsValue={data}/>
                {/* <div className="view_more"><a href="">view more</a></div> */}
            </div>
        </section>
    );
}
export default Information;