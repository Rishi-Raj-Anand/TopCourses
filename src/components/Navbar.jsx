import { SiStudyverse } from "react-icons/si";

function Navbar(){

    return (

        <div className="w-[100%] h-17 bg-[#8E7DBE] p-3 pl-8">
            <div className="flex items-center text-3xl gap-2 ">
                <SiStudyverse />
                <h1>StudyMate</h1>
            </div>
            
        </div>
    )
}

export default Navbar;