import { FaArrowRight, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen overflow-hidden w-full relative flex flex-col items-center justify-center  bg-gray-900">
             <div className="w-full lg:ml-0 flex-col gap-5 justify-center items-center text-center">
                          {/* <h1 className="text-white font-bold  border border-white rounded-lg p-1 px-4 cursor-pointer" 
                           onClick={() => setStep(1)}
                          ><FaArrowLeft size={20}/></h1>  */}
                          <h1 className="text-5xl m-5 font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">wieConnect</h1>
                          <p className="text-[16px] m-5 text-gray-400 font-bold ">Login With any of The Following</p>
                      </div>    
                      <div className="flex justify-center items-center gap-5">
                      <FaGoogle className=" bg-gray-900 cursor-pointer text-gray-100 border-2 rounded-lg border-[#9003d6] text-4xl w-28 p-2"/>
                      <FaApple className="text-gray-100 cursor-pointer border-2 border-[#9003d6] rounded-lg bg-gray-900 text-4xl w-28 p-2"/>
                    </div>   
        <div className="flex flex-col items-center w-full max-w-md bg-gray-900 px-8 py-10 ">
           <span className="text-center text-xl text-gray-300">OR</span>
            <form 
            className="flex flex-col w-full mt-5 gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-4"
                        />
                    </div>    
                    <div>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border text-gray-200 border-gray-200 focus:border-2 focus:border-white rounded-lg focus:outline-none px-3 py-4"
                        />
                    </div>    
                </div>
                <button
               className="bg-[#9003d6] font-bold text-gray-100 text-[1.2rem] px-4 py-2 mt-5 m-auto rounded-4xl w-72 hover:bg-gray-100 hover:text-[#4a006f] hover:border-[#702794] transition-all ease-in-out duration-300 cursor-pointer"
               type="submit"
              >
                Login
            </button>
            </form>
          

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
           <p
            className="text-gray-500 text-sm">
           Don't have an account?{" "}
            <Link to="/registration" className="text-gray-100">Create Account</Link></p> 
            <Link
             to="/forget"
             className="text-gray-100 text-sm"
             >forget password?</Link>
        </div>
    </div>
    )
}

export default Login