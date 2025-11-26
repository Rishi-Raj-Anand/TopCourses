import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { apiUrl } from './assets/data';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';
import { reviews } from './assets/data';
import Testimonial from './components/Testimonial';

 
import './App.css'

function App() {
  
  const [CoursesData,setCoursesData]=useState(null);
  const [isUrlFetched,setFetched]=useState(false);
  const [currentCategory,setCurrentCategory]=useState("All");
  const [likedCourses,setLikedCourses]=useState([]);

  async function fetchCourseData(){

    try{
        let response=await fetch(apiUrl);
        let data=await response.json();
        setFetched(true);
        setCoursesData(data);
    }catch(err){
        console.log(err);
    }

    
  }

  useEffect(()=>{
    fetchCourseData();
  },[])

  

  return (
   <div className="overflow-hidden bg-[#F4F8D3]">
      <div className='  h-[100%] w-[100vw] pb-2  '>
        <Navbar></Navbar>
        <Filter setCurrentCategory={setCurrentCategory} category={currentCategory}></Filter>
        
        {
          isUrlFetched ?(<Cards CoursesData={CoursesData} category={currentCategory} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Cards>):(<div
        className=' w-[100%]  h-[100vh] flex   items-center justify-center overflow-scroll text-5xl '>
          Loading...</div>)
        }

        {/* <Testimonial reviews={reviews}></Testimonial> */}
        <ToastContainer 
        autoClose={2000} />
      </div>
   </div>
  )
}

export default App
