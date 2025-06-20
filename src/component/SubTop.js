import { useSelector } from "react-redux";
import SubMGnbList from "./SubMGnbList";

function SubTop(){
  let data=useSelector(state => state.navigation);

  return(
    <>
      <div id="tab">
        <a href="">
          <img src={process.env.PUBLIC_URL+"/assets/images/tab_white_1.svg"} alt="tab" />
        </a>
      </div>
      <div id="m_close">
        <a href="">
          <img src={process.env.PUBLIC_URL+"/assets/images/close_black.png"} alt="close" />
        </a>
      </div>
      <div id="m_gnb">
        <ul>
          <SubMGnbList propsValue={data}/>
        </ul>
      </div>
    </>
  );
}
export default SubTop;