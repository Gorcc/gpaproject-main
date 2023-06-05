import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Personal = ({ setOptions }) => {
  const [selectedValue, setSelectedValue] = useState(() => {
    const storedSelectedValue = localStorage.getItem("selectedValue");
    return storedSelectedValue ? storedSelectedValue : "";
  });

  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem("courses");
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedValue.trim() !== "") {
      setOptions((prevOptions) => {
        const newOptions = [...prevOptions, selectedValue];
        localStorage.setItem("options", JSON.stringify(newOptions));
        return newOptions;
      });

      setCourses((prevCourses) => {
        const newCourses = [...prevCourses, selectedValue];
        localStorage.setItem("courses", JSON.stringify(newCourses));
        return newCourses;
      });

      setSelectedValue("");
    }
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleDeleteAllCourses = () => {
    setCourses([]);
    localStorage.removeItem("courses");
  };

  useEffect(() => {
    localStorage.setItem("selectedValue", selectedValue);
  }, [selectedValue]);

  const navigate = useNavigate();

  return (
    <div className="panelDiv">
      <div className="texts">
        <h1>Logged in as a Personal</h1>
        <h2>Add a new course to students</h2>
        <a href="#">
          <Link to="/layout">Go to login screen</Link>
        </a>
      </div>
      <form className="panelForm" onSubmit={handleSubmit}>
        <div>
          <i className="fa-solid fa-users"></i>
          <input
            className="formInput"
            type="text"
            name="id"
            placeholder="Course Name"
            value={selectedValue}
            onChange={handleChange}
          />
        </div>
        <button type="submit">ADD COURSE</button>
        <br />
        <button onClick={handleDeleteAllCourses}>DELETE COURSES</button>
      </form>

      {courses.length > 0 ? (
        <div>
          <h3>Current Courses:</h3>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default Personal;
