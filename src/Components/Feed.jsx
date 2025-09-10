import { Link } from "react-router-dom"

function Feed({img, id, username}){
return(
    <>
   <Link to={`/${username}/post/${id}`}>
    <div className="">
         <img src={img} className="w-[260px] h-[260px] object-cover " alt="" />
    </div>
    </Link>
    </>
)

}
export default Feed