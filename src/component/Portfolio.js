import PortfolioTitle from "./PortfolioTitle";
import PortfolioSubtitle from "./PortfolioSubtitle";

function Portfolio(){
    return(
        <section id="section3">
            <div className="inner">
                <div className="box">
                    <PortfolioTitle />
                    <PortfolioSubtitle />
                </div>
            </div>
        </section>
    );
}
export default Portfolio;