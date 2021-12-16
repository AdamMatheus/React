import React from 'react'
import Welcome from '../components/Welcome';
import aboutImg from "../img/manzara.jpg";
import Buton from '../components/Buton';

const About = () => {
   
const handleClick=()=>{
    alert("About icine yonlendiriliyorsunuz");
};
    return (
        <div>
            <h1>About</h1>
            <Welcome name="About" img={aboutImg}/>
            <Buton  name="about" click={handleClick}/>

        </div>
    );
};


export default About;
