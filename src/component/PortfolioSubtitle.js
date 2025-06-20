import { useNavigate } from "react-router-dom";

function PortfolioSubtitle(){
    let navigate=useNavigate();

    return(
        <div className="sub_title">
            <button onClick={() => navigate("/subpage")}>CLICK ME!</button>
        </div>
    );
}
export default PortfolioSubtitle;