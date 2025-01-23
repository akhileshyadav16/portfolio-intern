import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="text-slate-400 w-11/12 sm:w-2/3 mx-auto my-5">
            <div className="bg-slate-400 w-full h-[0.5px] my-5"></div>
            <footer className="flex flex-col w-full mx-auto gap-5">
                <div className="flex  lg:gap-16 md:gap-10 gap-8 flex-wrap mx-auto">
                    <Link to="https://www.linkedin.com/in/akhilesh-yadav-1201a42b9/" target="_blank"><FaLinkedin className="h-8 w-8 hover:text-slate-500 transition-colors duration-300 "/> </Link>
                    <Link to="https://github.com/akhileshyadav16" target="_blank"><FaGithubSquare className="h-8 w-8 hover:text-slate-500 transition-colors duration-300 "/></Link>
                    <Link to="https://leetcode.com/u/akhilesh15418/" target="_blank"><SiLeetcode className="h-7 w-8 hover:text-slate-500 transition-colors duration-300 "/> </Link>
                    <Link target="_blank" to='#'><FaFacebookSquare className="h-8 w-8 hover:text-slate-500 transition-colors duration-300"/></Link>
                    <Link to='https://x.com/ydv_akhii' target="_blank"><FaSquareXTwitter className="h-8 w-8 hover:text-slate-500 transition-colors duration-300"/></Link>
                    
                </div>
                <div className="flex lg:gap-6 md:gap-4 gap-2 w-full justify-evenly flex-wrap mx-auto text-md">
                    <Link to='/' className="hover:text-slate-500 transition-colors duration-200">Home</Link>
                    <Link to='/about'  className="hover:text-slate-500 transition-colors duration-200">About</Link>
                    <Link to='/skills'  className="hover:text-slate-500 transition-colors duration-200">Skills</Link>
                    <Link to="/projects" className="hover:text-slate-500 transition-colors duration-200">Project</Link>
                    <Link to="/contacts" className="hover:text-slate-500 transition-colors duration-200">Contact</Link>
                    
                </div>
                <span className="mx-auto">@ created by me (AKY)..</span>
            </footer>
        </div>
    );
}

export default Footer;