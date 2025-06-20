function SubHeaderGnbList(props){
  let data=props.propsValue;
  
  return(
    <>
      {data.map((d, i) => <li key={i}><a href="index.html#main">{d}</a></li>)}
    </>
  );
}
export default SubHeaderGnbList;