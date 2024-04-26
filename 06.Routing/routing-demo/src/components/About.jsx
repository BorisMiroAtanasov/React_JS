import { Link,Routes, Route } from "react-router-dom"
import AboutUs from "./AboutUs"
import OurMisiion from "./OurMission"
import OurValues from "./OurValues"


const About = () => {
    return(
        <>
        <h2>About Page</h2>
        <nav>
            <Link to="us">About us</Link>
            <Link to="mission">Our mission</Link>
            <Link to="values">Our values</Link>
        </nav>

        <Routes> 
            <Route path="/us" element={<AboutUs />}/>
            <Route path="/mission" element={<OurMisiion />}/>
            <Route path="/values" element={<OurValues />}/>
            </Routes>


        </>
    )
}

export default About