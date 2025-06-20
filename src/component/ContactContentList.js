function ContactContentList(props){
    let data=props.propsValue;
    // console.log(data);

    return(
        <div className="sns">
            <ul>
                {data.map((d, i) => <li key={i}><a href="">{d}</a></li>)}
            </ul>
        </div>
    );
}
export default ContactContentList;