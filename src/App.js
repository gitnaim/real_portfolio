//import { useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './css/style.css';
import MainPage from './component/MainPage';
import SubPage from './component/SubPage';



function App() {
    
    return (
        // <Routes>
        //     <Route path="/Top" element={<Top />} />
        //     <Route path="/Mgnb" element={<Mgnb />} propsValue={data.navigation} />
        //     <Route path="/Header" element={<Header />} />
        //     <Route path="/" element={<Main />}></Route>
        //     <Route path="/Information" element={<Information />} />
        //     <Route path="/Skills" element={<Skills />} />
        //     <Route path="/Portfolio" element={<Portfolio />} />
        //     <Route path="/Contact" element={<Contact />} />
        // </Routes>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/subpage" element={<SubPage />} />
        </Routes>
    );
}

export default App;