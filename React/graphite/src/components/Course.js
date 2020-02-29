import React from "react";
import Color from "../utils/Color";
import App from "./App";
import { Link } from "react-router-dom";


const Course = ({ course }) => {
  const assignments = course.assignments;
  const theme = new Color(course.theme || "#FFB627");
  theme.a = 0.3;
  const background = course.background || "bg1";


  return (
    <Link to="/course">
      <div className={`class noselect`} 
        onClick={()=>{ 
          
        }}>

          <div className={`title ${background}`} style={{borderColor: theme.hex}}>
            <h1>{course.name}</h1>
            <h2 style={{backgroundColor: theme.rgba}}>{`Teacher: ${course.teacher}`}</h2>
          </div>
          <div className="schedule">
            <h1><i className="fas fa-align-right"></i> Upcoming assignments</h1>
            <ol>
            {
              assignments.slice(0, 4).map((assignment, index) => (
                <li key={assignment.id}>{assignment.name}</li>
              ))
            }
            <li key="v" className="v">View all...</li>
            </ol>
          </div>
          <div className="options" style={{color: theme.hex}}>
            <h1><i className="fas fa-calendar-week"></i> Schedule</h1>
            <h1><i className="fas fa-users"></i> Classmates</h1>
            <h1><i className="fas fa-graduation-cap"></i> Grades</h1>
          </div>
        </div>
      </Link>
  );
};


export default Course;