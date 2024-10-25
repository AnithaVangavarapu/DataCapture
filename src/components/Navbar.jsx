import react from "react";
import {  useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/StudyDocuments")}>StudyDocuments</button>
      <button onClick={() => navigate("/DataCapture")}>DataCapture</button>
      <button onClick={() => navigate("/QueryResolutionSystem")}>QyeryResolutionSystem</button>
      <button onClick={() => navigate("/DataLoader")}>DataLoader</button>
      <button onClick={() => navigate("/StandardReports")}>StandardReports</button>
      <button onClick={() => navigate("/DataExtraction")}>DataExtraction</button>
      <button onClick={() => navigate("/AiMedicalCoding")}>AI Medical Coding</button>
     
    </div>
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
  );
};
export default Navbar;
