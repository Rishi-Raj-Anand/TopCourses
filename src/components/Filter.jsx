import { filterData } from "../assets/data";

function Filter({setCurrentCategory,category}){

    function categoryHandler(e){
        setCurrentCategory(e.target.id);
    }

    return (
        <div className="bg-[#F4F8D3] flex justify-center">
            
            {
                filterData.map((filter)=>{
                return (
                    
                    <div id={filter.title}
                     className={`m-3 gap-5 w-[8%] p-1.5 rounded-lg text-center bg-[#F7CFD8] hover:cursor-pointer 
                        ${category==filter.title? "border-1 shadow":""}`} key={filter.title}
                     onClick={categoryHandler}>
                        {filter.title}
                    </div>
                )
                })
            }


        </div>
    )

}

export default Filter;