import "./DataCapture.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock,faSquare,faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const DataCapture = () => {
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      countryCode: "91",
      siteCode: "91-002",
      subjectInitials: "",
      subjectInfoId: "",
      enrollmentDate: "",
      comments: "",
    },
  });
  const [isFormVisible, setFormVisible] = useState(false);
  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      // Populate form fields with saved values
      Object.keys(parsedFormData).forEach((key) => {
        setValue(key, parsedFormData[key]);
      });
    }
  }, [setValue]);
  // Function to handle form submission
  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Form data has been saved to local storage!");
  };

  // Function to handle reset
  const handleReset = () => {
    reset(); // Resets to default values
    localStorage.removeItem("formData"); // Optional: Clear local storage
  };
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
        {/* Button to toggle form visibility */}
        <button onClick={() => setFormVisible(!isFormVisible)}>
          Subject Registration
        </button>

        {/* Conditional rendering: show form only when isFormVisible is true */}
        {isFormVisible && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Country Code:</label>
              <input type="text" {...register("countryCode")} readOnly />
            </div>

            <div>
              <label>Site Code:</label>
              <input type="text" {...register("siteCode")} readOnly />
            </div>

            <div>
              <label>Subject Initials:</label>
              <input
                type="text"
                {...register("subjectInitials", { required: true })}
              />
            </div>

            <div>
              <label>Subject InfoId:</label>
              <input
                type="text"
                {...register("subjectInfoId", { required: true })}
              />
            </div>

            <div>
              <label>Enrollment Date:</label>
              <input
                type="date"
                {...register("enrollmentDate", { required: true })}
              />
            </div>

            <div>
              <label>Comments:</label>
              <textarea {...register("comments")} />
            </div>

            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        )}
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
        <button>Investigator Veryfication</button>
      </div>
      <div className="subject-status">
        <tr>
          <td><FontAwesomeIcon icon={faSquare} style={{ color: 'yellow', marginRight: '8px' }} />SubjectStatus-Not Started</td>
          <td><FontAwesomeIcon icon={faSquare} style={{ color: 'brown', marginRight: '8px' }} />SybjectStatus-Withdrawn</td>
          <td><FontAwesomeIcon icon={faSquare} style={{ color: 'red', marginRight: '8px' }} />SubjectStatus-Excluded</td>
          <td><FontAwesomeIcon icon={faSquare} style={{ color: 'green', marginRight: '8px' }} />SubjectStatus-Completed</td>
          <td><FontAwesomeIcon icon={faSquare} style={{ color: 'blue', marginRight: '8px' }} />SubjectStatus-InProgress</td>
        </tr>
        <tr>
          <td><FontAwesomeIcon icon={faLock} style={{ color: 'grey', marginRight: '8px' }} />Subject Not Soft Locked</td>
          <td><FontAwesomeIcon icon={faLock} style={{ color: 'red', marginRight: '8px' }} />Subject Not Hard Locked</td>
          <td><FontAwesomeIcon icon={faLock} style={{ color: 'grey', marginRight: '8px' }} />Subject Soft Locked</td>
          <td><FontAwesomeIcon icon={faLock} style={{ color: 'red', marginRight: '8px' }} />Subject Hard Locked</td>
          <td><FontAwesomeIcon icon={faCircleQuestion} style={{ color: 'grey', marginRight: '8px' }} />Open Query</td>
        </tr>
      </div>
    </div>
  );
};
export default DataCapture;
