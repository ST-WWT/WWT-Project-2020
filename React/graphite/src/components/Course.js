import React from "react";
import Color from "../utils/Color";
import App from "./App";
import Courses from "./Courses";
import CourseView from "./CourseView";


/*import { useHistory } from 'react-router-dom';*/

const Course = ({ course }) => {
  const assignments = course.assignments;
  const theme = new Color(course.theme || "#FFB627");
  theme.a = 0.3;
  const background = course.background || "bg1";

  /*routeChange=()=> {
    let path = `newPath`;
    let history = useHistory();
    history.push(path);
  }*/

  function doRender(view, args) {
    switch(view) {
      case 0 :
        return <Courses key={args[0]} courses={args[1]}/>;
      case 1 :
        return <CourseView key={args[0]} course={args[1]}/>;
      default:
        break;
    }
  }

  function routeChange() {
    App.render = doRender(1, [course.id, course]);
  }
  


  return (
    <div className={`class noselect`} onClick={routeChange()}>
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
  );
};


export default Course;