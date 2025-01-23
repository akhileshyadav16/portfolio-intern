import { FaReact,FaJsSquare, FaNode,FaHtml5,FaCss3,FaJava,FaPython,FaGitAlt ,FaGithubSquare  } from "react-icons/fa";
import { SiExpress ,SiMongodb, SiMongoose, SiJsonwebtokens,SiPostman } from "react-icons/si";
import { TbBrandRedux , TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";



function Skill({skill,index}){
    const icons = {
        'React.js': <FaReact className="inline animate-spin h-4/5 w-10" />,
        'JavaScript': <FaJsSquare className="inline h-4/5 w-8 sm:w-10"/>,
        'Node.js': <FaNode className="inline h-4/5 w-10"/>,
        'Express.js': <SiExpress className="inline h-4/5 w-10"/>,
        'MongoDB': <SiMongodb className="inline h-4/5 w-10"/>,
        'Mongoose': <SiMongoose className="inline h-full w-10"/>,
        'Redux.js': <TbBrandRedux className="inline h-4/5 w-10"/>,
        'JWT': <SiJsonwebtokens className="inline h-4/5 w-10"/>,
        'HTML5': <FaHtml5 className="inline h-4/5 w-10"/>,
        'Tailwind': <RiTailwindCssFill className="inline h-4/5 w-10"/>,
        'CSS': <FaCss3 className="inline h-4/5 w-10"/>,
        'C++': <TbBrandCpp className="inline h-4/5 w-10"/>,
        'mySQL': <DiMysql className="inline h-full  text-xl w-12"/> ,
        "Java": <FaJava className="inline h-4/5 w-10"/>,
        "Python" : <FaPython className="inline h-4/5 w-10"/>,
        "Git" : <FaGitAlt className="inline h-4/5 w-10"/>,
        "Github" : <FaGithubSquare className="inline h-4/5 w-10"/>,
        "Postman" : <SiPostman  className="inline h-4/5 w-10"/>,
        "Git" : <FaGitAlt className="inline h-4/5 w-10"/>,

    };
    return(
            <span className="border-2 py-2  flex justify-center items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 lg:mx-4 shadow-[0_0_5px_rgba(100,116,139,0.3)] border-slate-500 h-14 font-medium rounded-xl hover:text-slate-500 transition-colors duration-300 text-base sm:text-lg" key={index}>{icons[skill]}  {skill}</span>
    );
}

export default Skill;