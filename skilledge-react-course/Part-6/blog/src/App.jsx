import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateBlog from "./components/CreateBlog/CreateBlog"
import Details from "./components/Home/Details"

function App() {
  // install react router dom
  // npm install react-router-dom

  return (
<BrowserRouter>
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/create-blog" element={<CreateBlog/>}/>
        <Route path="/blog/:id" element={<Details/>}/>
        {/* Browser Router Parameter */}
      </Routes>

    </>
</BrowserRouter>
  )
}

export default App
