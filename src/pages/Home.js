import { Link } from 'react-router-dom';
import { RxDownload } from "react-icons/rx";
import SkillHome from '../components/SkillHome';
import ProjectHome from '../components/ProjectHome';
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from 'react';




function Home(){


    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="text-slate-400 w-screen h-full my-16 pt-20">
            <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row w-11/12 sm:w-4/6 mx-auto md:mb-40 my-2'>
                <div className='w-full flex flex-col lg:gap-5 md:gap-4'>
                    <p className='text-2xl px-3 sm:px-0 sm:text-4xl font-semibold font-serif'>Hi there,</p>    
                    <p className='text-3xl sm:text-4xl px-3 sm:px-0 sm:w-full md:text-6xl font-serif font-semibold mt-6 whitespace-nowrap'>I'm  <span className='font-sans font-bold rounded-lg animate-pulse'>Akhilesh Yadav</span></p>
                    <div className='text-xl sm:text-2xl font-semibold px-3 sm:px-0 py-2'>Full Stack Developer | Problem-Solving Enthusiast
                    </div>
                    <p className='w-full sm:w-11/12 px-3 sm:px-0 md:w-4/5 font-normal text-md mx'>
                    I am a <span className='font-medium'>computer science engineer</span> with a passion for <span className='font-medium'>web development</span> and problem-solving. I enjoy building dynamic web applications and tackling challenges with innovative solutions. Constantly eager to learn, I strive to stay ahead in the ever-evolving tech landscape.
                    </p>
                </div>
                <img src='./Aky.png' alt='Aky-pic' className='w-4/5 sm:w-3/4 md:w-1/3  h-4/5 sm:2/5 md:h-1/3 rounded-2xl object-cover shadow-[0_0_10px_rgba(100,116,139,0.5)] border border-slate-500 my-5 mx-auto md:mx-0'/>
            </div>
            <SkillHome/>
            <div className='flex flex-col md:gap-10 gap-4 py-10 items-center'>
                <h2 className='w-full text-center font-semibold text-4xl font-serif'>Projects</h2>
               <ProjectHome/>
               <Link to='/projects' className=" inline w-fit h-6 underline underline-offset-2 hover:text-slate-500 transition-colors duration-300">See more <FiArrowUpRight className="inline h-5 w-5"/></Link> 
            </div>
            

            
        </div>
    );
}

export default Home;