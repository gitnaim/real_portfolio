function Controller(props) {
  let data = props.propsValue; // []
  console.log("💡 Controller에서 받은 videoList 길이:", data.length);

  return (
    <div className="controller">
      <a href="" className="prev"></a>
      <ul className="count">
        {/* 질문2 */}
        {/* <li><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li> */}
        {data.map((d, i) => (
          <li key={i}>
            <a href="">{d}</a>
          </li>
        ))}
      </ul>
      <svg className="loader">
        <circle className="circle" cx="10" cy="10" r="10"></circle>
      </svg>
      <a href="" className="next"></a>
      <span className="num">
        <span></span> /{" "}
      </span>
    </div>
  );
}
export default Controller;
