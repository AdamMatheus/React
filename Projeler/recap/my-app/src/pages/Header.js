import React from 'react';
import Buton from '../components/Buton';
import Welcome from '../components/Welcome';
import headerImg from "../img/google.png";


const Header = () => {
const handleClick=()=>{
    alert("Sayfa icine yonlendiriliyorsunuz");
};
    return (
        <div>
           <h1>Header</h1>
           <Welcome name="Header" img={headerImg}/>
           <Buton name="header" click={handleClick} color="white" bgColor="black"/>
        </div>
    );
};

export default Header;
