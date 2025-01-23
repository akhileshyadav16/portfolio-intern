import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import SkillPage from "./pages/SkillPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div  className="bg-gradient-to-r from-slate-900 to-slate-800 h-fit pt-8 overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contacts" element={<ContactPage/>}/>
        <Route path="/skills" element={<SkillPage/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
