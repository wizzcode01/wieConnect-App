import { Link } from "react-router-dom"

const Home = () => {
    return (
       <div className="text-center mt-20">
         <Link to="/login" className=" text-2xl text-blue-500">wieConnect Login/Registration testing</Link>
       </div>   
    )
}

export default Home