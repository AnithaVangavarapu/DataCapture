import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header= ()=>{
    return(
        <div className='header'>
        <img className="logo" src={require('./clinion-logo-2.png')} alt="Clinion Logo"/>
        <h1 className="title-container">Test Mode</h1>
        <h5>Welcome</h5>
        <Link className="link" to ="" path="">Logout</Link>
        </div>
       
    )
}
export default Header;