import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Work from "../components/Work";
import About from "../components/About";
import News from "../components/News";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/01_refokus/" element={<Home />} />
        <Route path="/01_refokus/home" element={<Home />} />
        <Route path="/01_refokus/work" element={<Work />} />
        <Route path="/01_refokus/about" element={<About />} />
        <Route path="/01_refokus/news" element={<News />} />
      </Routes>
    </>
  );
}

export default Routing;
