import { useEffect } from "react";
import ProjectHome from "../components/ProjectHome";

function ProjectPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="w-screen">
            <div className="flex flex-col md:gap-10 gap-4 py-10 items-center w-full mx-auto text-slate-300">
                <h2 className='w-4/6 text-center font-semibold text-4xl font-serif'>Projects</h2>
                <ProjectHome/>
                <div className="my-10 text-2xl sm:text-3xl font-semibold font-mono">
                    Working on more... 
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;