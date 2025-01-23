import { useEffect } from "react";
import { skillArr } from "../components/constant";
import Skill from "../components/Skill";
import { lang } from "../components/constant";
import { tools } from "../components/constant";


function SkillPage(){
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="w-screen h-fit flex flex-col text-slate-400 gap-16 sm:gap-20 my-24 py-4">
            <div className="w-11/12 sm:w-2/3 mx-auto">
                <h2 className="text-center my-3 font-semibold text-3xl sm:text-4xl font-serif">My skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-20  md:gap-y-4 text-center py-5 ">
                    {
                        skillArr.map((skill, index) => {
                            return <Skill skill={skill} index={index}/>
                        })
                    }   
                </div>
            </div>
            <div className="w-11/12 sm:w-2/3 mx-auto">
                <h2 className="text-center my-3 font-semibold text-3xl sm:text-4xl font-serif">Languages</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-20  md:gap-y-4 text-center py-5 ">
                        {
                            lang.map((skill, index) => {
                                return <Skill skill={skill} index={index}/>
                            })
                        }   
                    </div>
            </div>
            <div className="w-11/12 sm:w-2/3 mx-auto">
                <h2 className="text-center my-3 font-semibold text-3xl sm:text-4xl font-serif">Developer Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-20  md:gap-y-4 text-center py-5 ">
                        {
                            tools.map((skill, index) => {
                                return <Skill skill={skill} index={index}/>
                            })
                        }   
                    </div>
            </div>
        </div>
    );
};

export default SkillPage;