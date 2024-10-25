import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate();
    return (
        <div>
        <div>
           <button onClick={()=>navigate("/ProfileSetup")}>ProfileSetup</button>
           <button onClick={()=>navigate("/AuditLog")}>AuditLog</button>
           <button onClick={()=>navigate("/CreateSites")}>CreateSites</button>
           <button onClick={()=>navigate("/LockStudyOrSites")}>Lock Study Or Sites</button>
           <button onClick={()=>navigate("/AdminTasks")}>Admin Tasks</button>
           <button onClick={()=>navigate("/HelpDesk")}>Help Desk</button>
           <button onClick={()=>navigate("/AboutClinion")}>About Clinion</button>
        </div>
        <div>
            <button onClick={()=>navigate('/PrivacyPolicy')}>Privacy Policy</button>
        © Copyright - 2024 Clinion 3.5 version. All rights reserved.
        </div>
        </div>
    )
}

export default Footer
