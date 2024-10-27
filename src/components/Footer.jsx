import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "./Footer.css"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    const navigate=useNavigate();
    return (
        <div className='footer'>
        <div className='footer-1'>
           <button onClick={()=>navigate("/ProfileSetup")}>ProfileSetup</button>
           <button onClick={()=>navigate("/AuditLog")}>AuditLog</button>
           <button onClick={()=>navigate("/CreateSites")}>CreateSites</button>
           <button onClick={()=>navigate("/LockStudyOrSites")}>Lock Study Or Sites</button>
           <button onClick={()=>navigate("/AdminTasks")}>Admin Tasks
           <FontAwesomeIcon icon={faCaretRight} className="icon" />
           </button>
           <button onClick={()=>navigate("/HelpDesk")}>Help Desk</button>
           <button onClick={()=>navigate("/AboutClinion")}>About Clinion</button>
        </div>
        <div className='footer-2'>
            <Link to="" path=""> Privacy Policy</Link>
        © Copyright - 2024 Clinion 3.5 version. All rights reserved.
        </div>
        </div>
    )
}

export default Footer
