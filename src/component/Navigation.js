
function Navigation(props){
    //console.log(props.propsValue);
    let data=props.propsValue;
    //console.log(data);

    return(
        <div id="gnb">
            <ul>
                {/* <li><a href="">HOME</a></li>
                <li><a href="">INFORMATION</a></li>
                <li><a href="">SKILLS</a></li>
                <li><a href="">PORTFOLIO</a></li>
                <li><a href="">CONTACT</a></li> */}
                {data.map((d, i) => <li key={i}><a href="">{d}</a></li>)}
            </ul>
        </div>
    );
}
export default Navigation;