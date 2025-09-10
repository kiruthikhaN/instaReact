import { Link } from "react-router-dom"
function Navbar(){
  return(
    <>
    <div className="p-3 border-b border-gray-200">
      <div className="w-[900px] flex items-center justify-between mx-auto">
         <Link to='/' className="text-2xl font-bold text-center">Instagram</Link>
        <div className="flex gap-6 m-5">
            <Link to= '/about' > About</Link>
            <Link to='/random-error' >Random Link</Link>
            <Link to='/request' >Request</Link>

        </div>
       </div>
    </div>

    </>
  ) 
}
export default Navbar