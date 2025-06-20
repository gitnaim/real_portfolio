function SkillsContentList(props){

	let {alt, desc, icon}=props.propsValue;
	//console.log(alt, desc, icon);

    return(
        <>
			<li>
				<div className="sub_title">
					<span>{desc.dt}</span>
				</div>
				<div className="box">
					<ul className="logos">
						{
							icon.map((d, i)=> <li key={i}><img src={process.env.PUBLIC_URL+"/assets/images/"+d.image} alt={d.alt} /></li>)
						}
					</ul>
					<div className="text">
						<p>{desc.dd}</p>
					</div>
				</div>
			</li>
        </>
        
    );
}
export default SkillsContentList;