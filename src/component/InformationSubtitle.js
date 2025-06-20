function InformationSubtitle(props){
    let {strong, span}=props.propsValue;

    // let {strong, span}=data;

    //console.log(data.subTitle);
    return(
        <div className="sub_title" data-aos="fade-up">
            <p>
                {
                strong.map((d, i) => <strong key={i}>{d}</strong>)
                }
            </p>
            <div className="spanList">
                {span.map((d, i) => <span key={i}>{d}</span>)}
            </div>
        </div>
    );
}
export default InformationSubtitle;