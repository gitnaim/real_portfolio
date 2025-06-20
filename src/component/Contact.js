
import ContactContent from "./ContactContent";

function Contact(){
    return(
        <>
            <section id="section4">
                <div className="inner">
                    <div className="title">
                        <strong>
                            CONTACT
                        </strong>
                        <img src={process.env.PUBLIC_URL+"/assets/images/paper_airplane_white.png"} art="airplane"/>
                    </div>
                    <ContactContent />
                </div>
            </section>
            <div id="dim2">dim2</div>
            <a href="" id="topBtn">top</a>
        </>
        
    );
}
export default Contact;