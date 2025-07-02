import { useEffect, useState } from "react";
import { FaChevronLeft,FaChevronRight,FaQuoteLeft,FaQuoteRight    } from "react-icons/fa";
function Testimonial({reviews}){
    
    const[idx,setIdx]=useState(0);
    const [review,setReview]=useState(reviews[idx])

    function leftShiftHandler(){
        if(idx-1<0){
            setIdx(reviews.length-1);
        }else{
            setIdx(idx-1)
        }
    }

    function rightShiftHandler(){
        if(idx+1>=reviews.length){
            setIdx(0);
        }else{
            setIdx(idx+1)
        }
    }

    function surpriseHandler(){
        setIdx(Math.floor(Math.random()*reviews.length));
    }

    useEffect(()=>{
        setReview(reviews[idx]);
    },[idx]);
    return (
        <div className="flex w-full relative justify-center mt-[20vh] mb-10">
            
            <div className="w-[50vw] bg-[#f7cfd8cf] rounded-sm p-5 flex flex-col items-center text-center h-[67vh] object-fit overflow-clip">
                <div className='absolute top-[-3rem] z-[10] left-[29vw] mx-auto'>
                        <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={review.image} alt="" />
                        <div className='w-[140px] h-[140px] bg-[#8E7DBE] rounded-full absolute
                        top-[-2px] z-[-10] left-[9px]'></div>

                </div>

                <div className='text-center mt-7'>
                    <h1 className='tracking-wider font-bold text-2xl capitalize'>{review.name}</h1>
                    <h3 className='text-[#8E7DBE] uppercase text-sm'>{review.job}</h3>
                </div>
                
                <div className='text-[#8E7DBE] mx-auto mt-5 text-2xl'>
                    <FaQuoteLeft />
                </div>
                
                <p className='text-center mt-4 text-[#8E7DBE] text-[1.3rem]'>{review.text}</p>

                <div className='text-[#8E7DBE] mx-auto mt-5 text-2xl'>
                    <FaQuoteRight />
                </div>
                
                <div className='flex text-3xl mt-10 gap-3 text-[#8E7DBE] font-bold mx-auto'>
                        <button 
                        onClick={leftShiftHandler}
                        className='cursor-pointer hover:text-[#8E7DBE] '>
                            <FaChevronLeft/>
                        </button>
                        <button 
                        onClick={rightShiftHandler}
                        className='cursor-pointer hover:text-[#8E7DBE] '>
                            <FaChevronRight/>
                        </button>
                      </div>
                
                      <div className='mt-6'>
                        <button
                        onClick={surpriseHandler}
                         className='bg-[#8E7DBE] hover:bg-[#8E7DBE] transition-all duration-200
                        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                            Surprise Me
                        </button>
                      </div>

            </div>
            
        </div>
    )
}

export default Testimonial;