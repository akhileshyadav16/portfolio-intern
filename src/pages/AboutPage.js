import { useEffect } from "react";
import { IoIosClock } from "react-icons/io";

function AboutPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className=" flex flex-col gap-16 h-fit w-screen my-20 text-slate-400">
            <div className="flex flex-col gap-10 w-11/12 sm:w-2/3 h-fit mx-auto ">
                <h2 className="w-full text-center text-5xl font-bold font-serif">About me</h2>
                <p className="w-full  text-lg  font-sans mx-auto">
                <span className="font-semibold text-2xl font-serif">Hi, I'm Akhilesh Yadav,</span>  a passionate <span className="font-semibold">web developer</span> currently pursuing  B.Tech in computer science and engineering. I'm focused on building a career as a software engineer and am always eager to explore and learn new technologies to expand my skill set. Along with web development, I have strong problem-solving skills in data structures and algorithms, and a solid understanding of core computer science subjects.
                </p>
                <p className="w-full text-lg  font-sans mx-auto">
                <span className="font-semibold text-2xl font-serif">My goal </span> is to continuously grow as a developer and contribute to creating innovative and impactful software solutions. I'm driven by the desire to solve problems and stay at the forefront of technology...
                </p>
            </div>
            <div className="flex flex-col my-10 gap-10 w-11/12 sm:w-2/3 h-fit mx-auto">
                <h2 className="w-full text-center text-5xl font-bold font-serif">Education</h2>
                <div className="w-full text-center shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-2xl overflow-hidden">
                    <table className="w-full table-auto">
                        <thead className="h-12 text-lg sm:text-xl w-full  font-semibold ">
                            <tr className="bg-slate-500 w-full rounded-2xl bg-opacity-20">
                                <th className="">Year</th>
                                <th className="pr-2 ">Qualification</th>
                                <th>Grade</th>
                                <th >College</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="h-10 my-5 border-slate-400 border-b sm:border-0">
                                <td>Nov 2022-Present</td>
                                <td>B.Tech - CSE</td>
                                <td>9.16/10</td>
                                <td >FET, GKV Haridwar</td>
                            </tr>
                            <tr className="h-10 my-5 border-slate-400 border-b sm:border-0">
                                <td>April 2020-March 2021</td>
                                <td>Intermediate</td>
                                <td>86.8%</td>
                                <td>DDAIC, Ayodhya</td>
                            </tr>
                            <tr className="h-10 my-5 border-slate-400 border-b sm:border-0">
                                <td>April 2018-March 2019</td>
                                <td>High school</td>
                                <td>88.16%</td>
                                <td>DDAIC, Ayodhya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>

        </div>

    );
}

export default AboutPage;