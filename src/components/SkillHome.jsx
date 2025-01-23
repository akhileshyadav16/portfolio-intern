import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { skills } from "./constant";
function SkillHome(){
    return(
        <div className="w-full my-24 py-4">
            <div className="w-11/12 sm:w-2/3 mx-auto">
                <h2 className="text-center my-3 font-semibold text-4xl font-serif">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-x-16  md:gap-y-4 text-center py-5 ">
                    {
                        skills.map((skill, index) => {
                            return <span className="border-2 py-2 lg:mx-4 shadow-[0_0_5px_rgba(100,116,139,0.3)] border-slate-500 rounded-lg hover:text-slate-500 transition-colors duration-300" key={index}>{skill}</span>;
                        })
                    }   
                </div>

                <p className="text-center w-fit mx-auto h-6 underline underline-offset-2 hover:text-slate-500 transition-colors duration-300"><Link to='/skills'>See more <FiArrowUpRight className="inline h-5 w-5"/></Link></p>
            </div>
        </div>
    );
}
export default SkillHome;