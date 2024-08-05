import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Work from "../components/Work";
import About from "../components/About";
import News from "../components/News";

function Routing(){
  return (
    <Routes>
      <Route path="" element={ <Home /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/news" element={ <News /> } />
    </Routes>
  );
};

export default Routing;
