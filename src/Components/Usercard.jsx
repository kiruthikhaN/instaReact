import { Link } from "react-router-dom"
function Usercard({img, name, prof, username }){
  return(
    <>
   <Link to={`/${username}`} className='hover:cursor-pointer' >
    <div className="flex gap-5 mt-4 mb-6">
        <img src={img} className="h-10 w-10  rounded-full object-cover"  alt="" />
        <div className="gap-4">
            <p>{name}</p>
            <p className="text-sm text-gray-600">{prof}</p>
        </div>
   
    </div>
   </Link>
    </>
  )
}   
export default Usercard