//index.js (root에 출력)

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Route, Routes  } from "react-router-dom";


import { MainArea } from "./layout/MainArea";

//인덱스 CSS 불러오기
import './css/index.css'
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";




export default function App() {
  return (
   <>
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainArea />}>
              <Route index element={<Intro />} />

              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
      </HashRouter>
   </>
  );
} ///////////// App 컴포넌트 ///////////////////


// 컴포넌트 출력 //////////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />); 
