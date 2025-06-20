import { useSelector } from "react-redux";

function SubSection1(){
  let subTitle=useSelector(state => state.subTitle);
  let {strong, span, p}=subTitle;

  return(
    <section id="page1">
        <div className="inner">
            <div className="title">
                <strong>{strong}</strong>
                <span>{span}</span> 
                <span id="renew">{p}</span>
            </div>
        </div>
    </section>
  );
}
export default SubSection1;