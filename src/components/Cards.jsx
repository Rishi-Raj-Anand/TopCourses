import { useEffect, useState } from 'react';
import Card from './Card'



function Cards(props){
    
    const allCourses=[];
    Object.values(props.CoursesData.data).forEach((courses)=>{
        courses.forEach((course)=>{
            allCourses.push(course);
        })
    })


        
   
   
    return (
    <div className=' flex justify-center '>
        <div className=' w-[80%] mt-[2vh] h-[100vh] flex flex-wrap gap-[2%] justify-center p-[2%] mb-5 overflow-scroll '>

            {
                props.category=="All"?(
                allCourses.map((course)=>{
                    return (
                        <Card
                        key={course.id}
                        title={course.title}
                        desc={course.description}
                        imgUrl={course.image.url}
                        likedCourses={props.likedCourses} setLikedCourses={props.setLikedCourses}
                        ></Card>
                    )
                })
                ):( 
                Object.values(props.CoursesData.data[props.category]).map((course)=>{

                    return (
                        <Card
                        key={course.id}
                        title={course.title}
                        desc={course.description}
                        imgUrl={course.image.url}
                        likedCourses={props.likedCourses} setLikedCourses={props.setLikedCourses}

                        ></Card>
                    )
                })

                )
            }
            
            
            
            
        </div>
    </div>
    )
    


}

export default Cards;