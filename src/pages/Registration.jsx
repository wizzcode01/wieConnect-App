import { FaArrowRight, FaArrowLeft, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
    const [step, setStep] = useState(1);

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSecondSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
  };  

    if(step === 1) {
      return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-gray-900">
            <div className="w-full lg:ml-0 flex-col gap-5 justify-center items-center text-center">
                {/* <h1 className="text-white font-bold  border border-white rounded-lg p-1 px-4 cursor-pointer" 
                 onClick={() => setStep(1)}
                ><FaArrowLeft size={20}/></h1>  */}
                <h1 className="text-3xl m-5 font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Sign Up - wieConnect</h1>
                <p className="text-sm m-5 text-gray-400 font-bold ">SignUp With any of The Following</p>
            </div>    
          
        <div className="flex flex-col items-center w-[95%] max-w-md bg-gray-900 px-8 py-10 ">
          <div className="flex justify-center items-center gap-5">
            <FaGoogle className=" bg-gray-900 cursor-pointer text-white border-2 rounded-lg border-[#701c9b] text-4xl w-28 p-2"/>
            <FaApple className="text-white cursor-pointer border-2 border-[#701c9b] rounded-lg bg-gray-900 text-4xl w-28 p-2"/>
          </div>  
            <form 
            className="flex flex-col w-full mt-10 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="text"
                        name="names"
                        placeholder="name"
                        className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-2"
                        />
                    </div>  
                    <div>
                        <input 
                        type="text"
                        name="email"
                        placeholder="email"
                        className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-2"
                        />
                    </div>    
                </div>
                <button
                  onClick={handleFirstSubmit}
                  className="bg-[#4a006f] font-bold text-white text-[1.5rem] px-4 py-2 mt-12 m-auto rounded-lg w-56 hover:bg-white hover:text-[#4a006f] transition-all ease-in-out duration-300 cursor-pointer"
                  type="submit"
                >
                <FaArrowRight size={30} className="text-center m-auto"/>
                </button>
            </form>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-3">
           <p
            className="text-gray-500 text-sm">
           Already have an account?{" "} <Link to="/login" className="text-white">Log In</Link></p> 
        </div>
        
    </div>
    )
}

  if( step === 2 ){
    return (
         <div className="min-h-screen w-full relative flex flex-col items-center justify-center  bg-gray-900">
            <div className="w-full flex gap-5 justify-center items-center ">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wie-Connect</h1>
            </div>    
           <div className="flex flex-col items-center w-[95%] max-w-md bg-gray-900 px-8 py-10 ">
            <form 
            className="flex flex-col w-full mt-10 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-2"
                        />
                    </div>    
                    <div>
                        <input 
                        type="number"
                        name="password"
                        placeholder="password"
                         className="w-full border-b-2 text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-2"
                        />
                    </div>    
                </div>
                <button
                  onClick={ handleSecondSubmit}
                  className="bg-[#4a006f] font-bold text-white text-[1.1rem] px-4 py-2 mt-12 m-auto rounded-lg w-56 hover:bg-white hover:text-[#4a006f] transition-all ease-in-out duration-300 cursor-pointer"
                  type="submit"
                >
                Sign In
                </button>
            </form>
          

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-3">
           <p
            className="text-gray-500 text-sm">
           Already have an account?{" "} <Link to="/" className="text-white">Log In</Link></p> 
        </div>
    </div>
    )
  }
}

export default Registration