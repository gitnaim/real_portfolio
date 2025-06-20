import Top from './Top';
import Mgnb from './Mgnb';
import Header from './Header';
import Main from './Main';
import Information from './Information';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { useSelector } from 'react-redux';

function MainPage(){
  let data=useSelector(state=>state.navigation);
  return(
    <div className="wrapper">
        <Top />
        <Mgnb propsValue={data}/>
        <Header />
        <Main />
        <Information />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default MainPage;