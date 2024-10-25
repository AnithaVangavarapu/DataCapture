import react from "react";
import "./Header.css";
const Header= ()=>{
    return(
        <div className='header'>
        <img src={require('./clinion-logo-2.png')} alt="Clinion Logo"/>
        <h1>Test Mode</h1>
        </div>
       
    )
}
export default Header;