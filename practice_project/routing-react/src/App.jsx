import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./pages/Product"
import Notfound from "./pages/Notfound"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Navbar2 from "./components/Navbar2"

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 /> 
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />

        <Route path="/product" element={<Product />} >
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
