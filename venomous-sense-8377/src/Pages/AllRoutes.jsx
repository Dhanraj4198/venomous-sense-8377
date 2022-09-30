import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import BestUni from "./BestUniversities";
import India from "./India";
import Business from "./Business";
import Movies from "./Movies";
import Science from "./Science";
import Sports from "./Sports";
import Technology from "./Technology";
import World from "./World";
import LiveTV from "./Livetv";
import AppPage from "./AppPage";
import Magazine from "./Magazine";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/india" element={<India></India>}></Route>
      <Route path="/world" element={<World></World>}></Route>
      <Route path="/business" element={<Business></Business>}></Route>
      <Route path="/technology" element={<Technology></Technology>}></Route>
      <Route path="/movies" element={<Movies></Movies>}></Route>
      <Route path="/sports" element={<Sports></Sports>}></Route>
      <Route path="/science" element={<Science></Science>}></Route>
      <Route path="/best-universities" element={<BestUni></BestUni>}></Route>
      <Route path="/livetv" element={<LiveTV></LiveTV>}></Route>
      <Route path="/magazine" element={<Magazine></Magazine>}></Route>
      <Route path="/our-apps" element={<AppPage></AppPage>}></Route>
      
    </Routes>
  );
}
