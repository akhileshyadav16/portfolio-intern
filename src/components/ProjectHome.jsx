import Card from "./Card";
import { cardData } from "./constant";

function ProjectHome(){
    return(
        <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 sm:w-4/6 mx-auto gap-4 h-fit'>
            {
                cardData.map((data)=>{
                    return <Card name={data.name} pic={data.pic} desc={data.desc} link={data.link}/>
                })
            }
        </div>

    );
}

export default ProjectHome;