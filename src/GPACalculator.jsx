import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const GPACalculator = () => {
  const navigate = useNavigate();
  const [numLessons, setNumLessons] = useState(0);
  const [lessonData, setLessonData] = useState([]);
  const [totalGPA, setTotalGPA] = useState(0);

  const handleNumLessonsSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(numLessons);
    if (num > 0) {
      const initialLessonData = Array.from({ length: num }, () => ({
        gradePoints: "",
        creditHours: "",
      }));
      setLessonData(initialLessonData);
    }
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const lesson = lessonData[index];
    const gpaResult = calculateGPA(
      parseFloat(lesson.gradePoints),
      parseFloat(lesson.creditHours)
    );
    const updatedLessonData = [...lessonData];
    updatedLessonData[index] = { ...lesson, gpa: gpaResult };
    setLessonData(updatedLessonData);

    const totalGPAResult = updatedLessonData.reduce(
      (total, lesson) => total + lesson.gpa,
      0
    );
    const averageGPA = totalGPAResult / updatedLessonData.length;
    const totalGPAOutof4 = (averageGPA * 4.0).toFixed(2); // Calculate out of 4.0
    setTotalGPA(totalGPAOutof4);
  };

  const handleGradePointsChange = (e, index) => {
    const { value } = e.target;
    const updatedLessonData = [...lessonData];
    updatedLessonData[index] = {
      ...updatedLessonData[index],
      gradePoints: value,
    };
    setLessonData(updatedLessonData);
  };

  const handleCreditHoursChange = (e, index) => {
    const { value } = e.target;
    const updatedLessonData = [...lessonData];
    updatedLessonData[index] = {
      ...updatedLessonData[index],
      creditHours: value,
    };
    setLessonData(updatedLessonData);
  };

  const calculateGPA = (gradePoints, creditHours) => {
    return (gradePoints / creditHours) * 4.0;
  };

  return (
    <div className="gpaforms">
      <div>
        <div className="header">
          <h1>GPA Calculator</h1>
          <h3>Logged in as User</h3>
          <a href="#">
            <Link to="/layout">Go to login screen</Link>
          </a>
        </div>
        <div>
          <h3>Total GPA</h3>
          <div className="totalgpa">GPA = {totalGPA / 100}</div>
        </div>
      </div>
      {lessonData.length === 0 ? (
        <form onSubmit={handleNumLessonsSubmit}>
          <label>Number of Lessons:</label>
          <input
            type="number"
            value={numLessons}
            onChange={(e) => setNumLessons(e.target.value)}
            required
          />
          <button className="custom-btn btn-3" type="submit">
            Next
          </button>
        </form>
      ) : (
        <div>
          {lessonData.map((lesson, index) => (
            <div key={index}>
              <form onSubmit={(e) => handleSubmit(e, index)}>
                <div className="entry">
                  <label>Grade Points:</label>
                  <input
                    type="number"
                    value={lesson.gradePoints}
                    onChange={(e) => handleGradePointsChange(e, index)}
                    required
                  />
                </div>
                <div className="entry">
                  <label>Credit Hours:</label>
                  <input
                    type="number"
                    value={lesson.creditHours}
                    onChange={(e) => handleCreditHoursChange(e, index)}
                    required
                  />
                </div>
                <button className="custom-btn btn-3" type="submit">
                  Add
                </button>
              </form>
            </div>
          ))}
          <div className="footer">
            This site is made by Group 3 for Security of Computer Systems and
            Networks term project.{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
