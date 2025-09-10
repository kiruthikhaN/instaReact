import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import Request from "./Pages/Request";
import User from "./Components/Users";
import Usercard from "./Components/Usercard";
import Userdetails from "./Pages/Userdetails";
import Post from "./Pages/Post"



function App(){
  return(
    <>
    <Navbar />
   
    <Routes>
      <Route path ="/" element = {<Request />} /> 
      <Route path ="/about" element = {<About />} /> 
      <Route path="/request" element={<Request />}/>
      <Route path="/random-error" element={<Error />} /> 
      <Route path="/:username" element={<Userdetails />}/>
      <Route path ="/:username/post/:id" element={<Post />}/>
      <Route path="*" element={<Error />}/>

    </Routes>
    </>
  )
}
export default App