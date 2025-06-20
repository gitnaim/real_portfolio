import { useSelector } from "react-redux";
import ContactContentList from './ContactContentList';

function ContactContent(){
    let contact=useSelector(state => state.contact);
    // console.log(contact);

    return(
        <div className="content">
            <div className="mimoticon">
                <img src={process.env.PUBLIC_URL+"/assets/images/QR_CODE_REAL.svg"} art="QR_Code"/>
            </div>
            <ContactContentList propsValue={contact}/>
        </div>
    );
}
export default ContactContent;