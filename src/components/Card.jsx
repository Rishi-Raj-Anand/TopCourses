import { useEffect, useState } from "react";
import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card({title,desc,imgUrl,likedCourses, setLikedCourses}){


    function likeHandler(){
        
           if(likedCourses.includes(title)) {
                setLikedCourses((prev)=> prev.filter((cTitle)=>(cTitle!==title)));
                toast.warning(`${title} Unliked`);
                
                

            }else{
                if(likedCourses.length === 0 ) {
                setLikedCourses([title]);
                }
                else {
                    //non-empty pehle se
                    setLikedCourses((prev) => [...prev, title]);
                }
                toast.success(`${title} Liked`);
            }
        
    }

    
    
    return (
        <div className="w-[30%] h-[55vh] bg-[#A6D6D6] rounded-sm">

            <div className="relative">
                <img className="rounded-t-sm object-cover" src={imgUrl} alt="" />
                <div className="absolute w-[15%] h-[27.25%] bg-white text-3xl -bottom-5 right-3 flex justify-center items-center rounded-full hover:cursor-pointer"
                onClick={likeHandler}>
                    {
                        likedCourses.includes(title)?(<FcLike />):(<FcLikePlaceholder />)
                    }
                </div>
            </div>

            <div className="p-3">
                <h2 className="font-bold text-lg m-1">{title}</h2>
                <p className="text-lg ">{
                    desc.length<150?(desc):(`${desc.substring(0,150)}...`)
                    }</p>
            </div>
        </div>
    )
}

export default Card;