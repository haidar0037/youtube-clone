import Navbar from "../src/Components/Navbar/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "../src/Pages/Home/Home";
import Video from "../src/Pages/Video/Video";
import { useState } from "react";
function App() {

  const [sidebar,setSidebar] = useState(true);
 
  return (
    <>
     <div className='app'>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
     </div>
    </>
    
  )
}

export default App
