import react from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header= ()=>{
    return(
        <div className='header'>
        <div className='header1'>
        <img className="logo" src={require('./clinion-logo-2.png')} alt="Clinion Logo"/>
        <div className="title-container">Test Mode</div>
        </div>
        <div className='header2'>
        <h5>Welcome</h5>
        <Link className="link" to ="" path="">Logout</Link>
        </div>
        </div>
       
    )
}
export default Header;