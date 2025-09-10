    import User from '../Newuser'
    import { useParams } from 'react-router-dom'
    import Feed from '../Components/Feed'
    
    function Userdetails(){
        let {username} = useParams();
        let currentUser = User.find(user=> user.username== username)
    return(
        <>
        <div className="mx-auto w-[400px] mt-4 mb-24 flex gap-4 items-center">
    
           <img src={currentUser.image} className="h-[140px] w-[140px]  rounded-full object-cover"  alt="" />
        <div className=''>
            <h1 className='font-bold text-2xl'>{currentUser.name}</h1>
            <h1>{currentUser.profession}</h1>
            <p>{currentUser.desc}</p>
            
            <div className="flex gap-5 mt-3">
                <div className="bg-neutral-200 rounded-md px-3 py-1">{currentUser.followers}Followers</div>
                <div className="bg-neutral-200 rounded-md py-1 px-3">{currentUser.following}Following</div>

            </div>
        </div>
  </div>  

<div className="flex flex-wrap gap-2 w-[800px] mx-auto">
    {
           currentUser.posts.map(post => <Feed img={post.image} id={post.id} username={currentUser.username}/>)

    }

</div>



        </>
    )
}

export default Userdetails