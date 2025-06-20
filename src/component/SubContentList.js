function SubContentList(props){
  let data=props.propsValue;

  return(
    <>
      {data.map((d, i) => 
        <li key={i} id="content">
            <div className="title">
                <div className="inner">
                    <div className="num">
                        <strong>{d.number}</strong>
                    </div>
                    <div className="text"> 
                        <span id="name">{d.title}</span>
                        <span id="lang">{d.lang}</span>
                        <span id="exp">{d.exp1}</span>
                        <span> {d.exp2}</span>
                        <span id="date">2024. 02</span>
                        <div id="link_small">
                          <a href={d.href} target="pop">{d.smallLink}</a>
                        </div>
                    </div>
                    
                    <a id="link" href={d.href} target="pop">
                      <div className="text">{d.link}</div>
                    </a>
                </div>
            </div>
        </li>
      )}
    </>
  );
}
export default SubContentList;