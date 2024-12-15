import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Whystacking from "./Components/Whystacking/Whystacking";
import Videos from "./Components/Videos/Videos";
import AboutUs from "./Components/Abouts/AboutUs";
import Register from "./Components/Register/Register";
import Tournament from "./Components/Tournament/Tournament";
import Tutorials from "./Components/Tutorials/Tutorial";
import News from "./Components/News/News";
import Records from "./Components/Records/Records";
import Footerdetail from "./Components/Footerdetail/Footerdetails";
import Gallery from "./Components/Gallery/Gallery";
import BecomeFranches from "./Components/BecomeFranches/BecomeFranches";
import FranchesRegister from "./Components/FranchesRegister/FranchesRegister";
// import Image from "./Components/Image/image";
import "../src/App.css";
import Contact from "./Components/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Whystacking" element={<Whystacking />}></Route>
        <Route path="/Tutorials" element={<Tutorials />}></Route>
        <Route path="/Videos" element={<Videos />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Records" element={<Records />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Footerdetail" element={<Footerdetail />}></Route>
        <Route path="/Tournament" element={<Tournament />}></Route>
        <Route path="/carriers" element={<BecomeFranches />}></Route>
        <Route path="/FranchesRegister" element={<FranchesRegister />}></Route>
        <Route path="/Contactus" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
