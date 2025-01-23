import { NavLink } from "react-router-dom"; 
import "./nav.css"


function Navbar(){
    return(
        <div className="text-slate-400 bg-gradient-to-r from-slate-900 to-slate-800 h-12 w-11/12 sm:w-1/2 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-2xl py-2 ">
            <nav className="flex w-full justify-around flex-nowrap">
                <div className="flex gap-2 sm:gap-4 md:gap-10 lg:gap-16  ">
                    <NavLink to='/' className="inline">Home</NavLink>
                    <NavLink to='/about' className="invisible sm:visible inline">About</NavLink>
                    <NavLink to='/skills' className="invisible sm:visible inline">Skills</NavLink>
                    <NavLink to='/projects' className="invisible sm:visible inline">Projects</NavLink>
                    <NavLink to='/contacts' className="">Contact</NavLink>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;