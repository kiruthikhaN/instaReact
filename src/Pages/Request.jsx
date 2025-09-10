import Users from '../Components/Users'
import Usercard from '../Components/Usercard';
function Request(){
  return(
    <>
    <div className="w-[380px] mx-auto">
    <h1 className="text-4xl font-bold text-center mt-16">Your follow requests</h1>
    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis.</p>
    {

     Users.map(user=><Usercard img={user.image} name={user.name} username={user.username} prof={user.profession} />)

    }
    </div>
    

    </>
  ) 
}
export default Request;