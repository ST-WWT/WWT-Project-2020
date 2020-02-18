import React from "react";


const Course = ({ course }) => {
  const assignments = course.assignments;
  const theme = course.theme || "theme-yellow";
  const background = course.background || "bg1";
  return (
    <div className={`class ${theme} noselect`}>
        <div className={`title ${background}`}>
          <h1>{course.name}</h1>
          <h2>{`Teacher: ${course.teacher}`}</h2>
        </div>
        <div class="schedule">
          <h1><i class="fas fa-align-right"></i> Upcoming assignments</h1>
          <ol>
          {
            assignments.slice(0, assignments.length > 4 ? 4 : assignments.length).map((course, index) => (
              <li>{course.name}</li>
            ))
          }
          <li className="v">View all...</li>
          </ol>
        </div>
        <div class="options">
          <h1><i class="fas fa-calendar-week"></i> Schedule</h1>
          <h1><i class="fas fa-users"></i> Classmates</h1>
          <h1><i class="fas fa-graduation-cap"></i> Grades</h1>
        </div>
      </div>
  );
};


export default Course;