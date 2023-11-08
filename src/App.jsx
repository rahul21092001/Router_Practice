import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import Contact from "./Components/Contact";
import Com_1 from "./Components/Com_1";
import Com_2 from "./Components/Com_2";
import User from "./Components/User";
function App() {
  return (
    <div className="flex flex-col gap-10 mt-8">
      <nav className="flex flex-row justify-around border-black border-2 text-red-500">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}>
            <Route path="/About/:name" element={<User/>}></Route>"
          </Route>
          <Route path="/Contact" element={<Contact />}>
            <Route path="/Contact/Com_1" element={<Com_1/>}></Route>
            <Route path="/Contact/Com_2" element={<Com_2/>}></Route>
          </Route>
          <Route path="*" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
