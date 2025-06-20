function MainSkills(props){
    let data=props.propsValue;

    return(
        <div className="skills">
            <ul>
                {data.map((d, i) => <li key={i}><div className="number">{d.num}</div><span>{d.span}</span></li>)}
            </ul>
        </div>
    );
}
export default MainSkills;