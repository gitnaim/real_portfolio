
function Top(){

  return(
    <>
      <div id="tab">
        <a href="">
          <img src={process.env.PUBLIC_URL+"/assets/images/tab_white_1.svg"} alt="tab" />
        </a>
      </div>
      <div id="m_close">
        <a href="">
          <img src={process.env.PUBLIC_URL+"/assets/images/close_black.png"} alt="close" />
        </a>
      </div>
    </>
    
  );
}
export default Top;