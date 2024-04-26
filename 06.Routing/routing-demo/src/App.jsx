import {Routes, Route} from "react-router-dom"
import Navigation from "./components/Navigations";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import NotFound from "./components/NotFound";
//2 var nested routes
// import AboutUs from "./components/AboutUs"
// import OurMisiion from "./components/OurMission"
// import OurValues from "./components/OurValues"


function App() {
  return (
  <>
    <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/*" element={<About />} />
    {/* <Route path="/about" element={<About />} />
            <Route path="/us" element={<AboutUs />}/>
            <Route path="/mission" element={<OurMisiion />}/>
            <Route path="/values" element={<OurValues />}/>
// </Route > */} - заваряме доп. раоутъра
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/characters" element ={<Characters />} />
    <Route path="/characters/:id" element ={<CharacterDetails />} />
    <Route path="*" element ={<NotFound />} />
    
  </Routes>

  <footer>All rights reserved &copy; </footer>
  </>
  )
}

export default App;
