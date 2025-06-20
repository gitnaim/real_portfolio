function CaseStudyListList(props){
  let data=props.propsvalue;
  return(
    <>
    {
      data.map((d, i) =>
      <li key={i}>
      <a href={d.link} target="pop">
        <span id="title">{d.title}</span>
        <span className="exp">{d.exp}</span>
        <span className="content">{d.content}</span>
      </a>
    </li>
    )}
    </>
  );
}
export default CaseStudyListList;