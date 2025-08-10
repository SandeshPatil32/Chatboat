import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import ChatUI from "./pages/ChatUI";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(){
 return (
   <>
<Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/sign" element={<Sign />}/>
         <Route path="login" element={<Login />}/>
         <Route path="/chat" element={<ChatUI />}/>
       </Routes>
       <About />
       <Footer />
     </Router>
   </>
 );
}


export default App;
