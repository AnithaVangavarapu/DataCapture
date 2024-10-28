import "./DataCapture.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faSquare,
  faCircleQuestion,
  faAsterisk,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const DataCapture = () => {
  const { register, handleSubmit, reset } = useForm({
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
  const [message, setMessage] = useState("");
  // // Load data from local storage when the component mounts
  // useEffect(() => {
  //   const storedFormData = localStorage.getItem("formData");
  //   if (storedFormData) {
  //     const parsedFormData = JSON.parse(storedFormData);
  //     // Populate form fields with saved values
  //     Object.keys(parsedFormData).forEach((key) => {
  //       setValue(key, parsedFormData[key]);
  //     });
  //   }
  // }, [setValue]);

  // Function to handle form submission
  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    setMessage("Form submitted successfully!");
    reset(); // Clear the form

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // Function to handle reset
  const handleReset = () => {
    reset(); // Resets to default values
    // localStorage.removeItem("formData"); // Optional: Clear local storage
  };
  return (
    <div className="DataCapture">
      <p>Data Capture</p>
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

        <button
          className="subject-registration"
          onClick={() => setFormVisible(!isFormVisible)}
        >
          <span className="sug">Subject Registration</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {message && (
          <div style={{ color: "green", margin: "10px 0" }}>{message}</div>
        )}

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
              <label>
                <FontAwesomeIcon
                  icon={faAsterisk}
                  style={{ color: "red", marginRight: "8px", width: "5px" }}
                />
                Subject Initials:
              </label>
              <input
                type="text"
                {...register("subjectInitials", {
                  required: true,
                  maxLength: 3,
                  validate: (value) =>
                    value.length === 3 || "Must be exactly 3 letters",
                })}
                maxLength={3} // Limit input to 3 characters
                onInput={(e) => {
                  e.target.value = e.target.value.toUpperCase(); // Convert input to uppercase
                }}
                style={{ textTransform: "uppercase" }} // Ensures displayed text is uppercase
              />
            </div>

            <div>
              <label>
                <FontAwesomeIcon
                  icon={faAsterisk}
                  style={{ color: "red", marginRight: "8px", width: "5px" }}
                />
                Subject InfoId:
              </label>
              <input
                type="text"
                {...register("subjectInfoId", { required: true })}
              />
            </div>

            <div>
              <label>
                <FontAwesomeIcon
                  icon={faAsterisk}
                  style={{ color: "red", marginRight: "8px", width: "5px" }}
                />
                Enrollment Date:
              </label>
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
      <div className="subject-dashboard">
        <h2>Subjects Dashboard</h2>
        <div className="subject-dashboard-row">
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
          <button className="b1">Go</button>
          <button className="b2">Investigator Veryfication</button>
        </div>
      </div>
      <div className="subject-status">
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#FFB07F", marginRight: "8px" }}
            />
            SubjectStatus-Not Started
          </td>
          <td>
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#2A0000", marginRight: "8px" }}
            />
            SybjectStatus-Withdrawn
          </td>
          <td>
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#FF0000", marginRight: "8px" }}
            />
            SubjectStatus-Excluded
          </td>
          <td>
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#055F00", marginRight: "8px" }}
            />
            SubjectStatus-Completed
          </td>
          <td>
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#4558FF", marginRight: "8px" }}
            />
            SubjectStatus-InProgress
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "grey", marginRight: "8px" }}
            />
            Subject Not Soft Locked
          </td>
          <td>
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "red", marginRight: "8px" }}
            />
            Subject Not Hard Locked
          </td>
          <td>
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "grey", marginRight: "8px" }}
            />
            Subject Soft Locked
          </td>
          <td>
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "red", marginRight: "8px" }}
            />
            Subject Hard Locked
          </td>
          <td>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              style={{ color: "grey", marginRight: "8px" }}
            />
            Open Query
          </td>
        </tr>
      </div>
    </div>
  );
};
export default DataCapture;
