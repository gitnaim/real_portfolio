function OpenSourceList(props){
	let data=props.propsValue;

	return(
	<>
		<div className="img">
			<a href={data.link} target="pop">
				<img src={process.env.PUBLIC_URL+"/assets/images/"+data.image} alt="img" />
			</a>
		</div>
		<div className="desc">
		<p>{data.p}</p>
		<span>{data.span}</span>
		<div className="reference">
			<ul>
        <li>
			<span>Link : </span>
			<a href={data.link} target="pop">{data.link}</a>
        </li>
      {(data.github) ? <li>
					<span>GitHub : </span>
					<a href={data.github} target="pop">{data.github}</a>
        </li> : ""}
			</ul>
		</div>
		</div>
	</>
  );
}
export default OpenSourceList;