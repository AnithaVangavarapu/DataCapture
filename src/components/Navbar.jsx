import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "Visit Calendar") {
      navigate("/VisitCalendar");
    } else if (value === "Data Capture") {
      navigate("/DataCapture");
    }
  };

  return (
    <div className="navbar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/StudyDocuments")}>Study Documents</button>
      <div>
        <select defaultValue="Data Capture" className="select" onChange={handleChange}>
          <option hidden>Data Capture</option>
          <option value="Visit Calendar">Visit Calendar</option>
          <option value="Data Capture">Data Capture</option>
        </select>
        <FontAwesomeIcon icon={faCaretRight} className="icon" />
      </div>
      <button onClick={() => navigate("/QueryResolutionSystem")}>
        Query Resolution System
        <FontAwesomeIcon icon={faCaretRight} className="icon" />
      </button>
      <button onClick={() => navigate("/DataLoader")}>Data Loader</button>
      <button onClick={() => navigate("/StandardReports")}>Standard Reports</button>
      <button onClick={() => navigate("/DataExtraction")}>Data Extraction</button>
      <button onClick={() => navigate("/AiMedicalCoding")}>
        AI Medical Coding
        <FontAwesomeIcon icon={faCaretRight} className="icon" />
      </button>
    </div>
  );
};

export default Navbar;

// <ul>
    //     <li>
    //         <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //         <Link to="/StudyDocuments">StudyDocuments</Link>
    //     </li>
    //     <li>
    //         <Link to="/DataCapture">DataCapture</Link>
    //     </li>
    //     <li>
    //         <Link to="/QueryResolutionSystem">QueryResolutionSystem</Link>
    //     </li>
    //     <li>
    //         <Link to="/DataLoader">DataLoader</Link>
    //     </li>
    //     <li>
    //         <Link to="/StandardReports">StandardReports</Link>
    //     </li>
    //     <li>
    //         <Link to="/DataExtraction">DataExtraction</Link>
    //     </li>
    //     <li>
    //         <Link to="/AiMedicalCoding">AiMedicalCoding</Link>
    //     </li>
    // </ul>