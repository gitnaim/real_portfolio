function Logo(){
    return(
        <div className="logo">
            <h1>
                <a href="">
                    <img src={process.env.PUBLIC_URL+"/assets/images/NM_logo_white.svg"} alt="logo" />
                </a>
            </h1>
        </div>
    );
}
export default Logo;

