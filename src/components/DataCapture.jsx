import "./DataCapture.css";
import react from "react";
import { useState,useEffect } from "react";
const DataCapture = () => {
  const [subIni,setSubIni]=useState(" ");
  const [subInf,setSubInf]=useState(" ");
  const [enrollDate,setEnrollDate]=useState(" ");
  const [comment,setComment]=useState(" ");

  const handleSubmit=useEffect(()=>{
      localStorage.setItem("subIni",JSON.stringify(subIni));
      localStorage.setItem("subInf",JSON.stringify(subInf));
      localStorage.setItem("enrollDate",JSON.stringify(enrollDate));
      localStorage.setItem("comment",JSON.stringify(comment));

  });

  return (
    <div className="DataCapture">
      <div>
        <table>
            <tbody>
          <tr>
            <th>Study Name</th>
            <td>AI Medical Coding Testing New</td>
            <th>Protocol ID</th>
            <td>AIMC</td>
            <th>Site Name</th>
            <td>NIMS ( 91-002 )</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="form">
        <form onSubmit = {(e) => e.preventDefault()}>
          <h2> Subject Registration</h2>
          <label>
            Country Code:
            <input type="tel" defaultValue="91" />
          </label>

          <label>
            Site Code:
            <input type="tel" defaultValue="91-002" />
          </label>

          <label>
            Subject Initials:
            <input 
            type="text"
            value={subIni}
            onChange={(e) => setSubIni(e.target.value)}
            />
          </label>

          <label>
            Subject Infold:
            <input 
            type="text"
            value={subInf}
            onChange={(e) => setSubInf(e.target.value)}
            />
          </label>

          <label>
            Enrollment Date:
            <input 
            type="date"
            value={enrollDate}
            onChange={(e) => setEnrollDate(e.target.value)}
            />
          </label>

          <label>
            Comments:
            <input
             type="text" 
             maxLength="200" 
             value={comment}
             onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
          <button type="reset" >Reset</button>
        </form>
      </div>
      <div>
        <h2>Subjects Dashboard</h2>
        <label>
          Subject Infold:
          <select defaultValue="All">
            <option value="apple">All</option>
          </select>
        </label>
        <label>
          Subject Status:
          <select defaultValue="All">
            <option>All</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Excluded</option>
            <option>Withdrawn</option>
            <option>Not Started</option>
          </select>
        </label>
        <button>Go</button>
      </div>
    </div>
  );
};
export default DataCapture;
