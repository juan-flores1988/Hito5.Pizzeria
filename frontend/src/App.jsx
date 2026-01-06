import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza"

const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/p001" element={<Pizza/>}/>

      </Routes>
        

      <Footer />
    </>
  );
};

export default App;
