import { useSelector } from "react-redux";
import SubHeaderGnbList from "./SubHeaderGnbList";

function SubHeader(){
  let data=useSelector(state => state.navigation);

  return(
    <header>
      <div className="inner">
        <div className="logo">
          <h1>
            <a href=""> 
              <img src={process.env.PUBLIC_URL+"/assets/images/NM_logo_white.svg"} alt="logo" />
            </a>
          </h1>
        </div>
        <nav id="gnb"> 
          <ul>
            <SubHeaderGnbList propsValue={data}/>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default SubHeader;