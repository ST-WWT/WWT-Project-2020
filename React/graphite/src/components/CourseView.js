import React from "react";
import Assignments from "./Assignments";
import Color from "../utils/Color";


const CourseView = ({ course }) => {
  if(!course) {
    return null;
  }
  const assignments = course.assignments;
  const theme = new Color(course.theme || "#FFB627");
  theme.a = 0.3;
  const background = course.background || "bg1";
  return (
    <div id="courseview">
        <div className={`title ${background} noselect`} style={{borderColor: theme.hex}}>
            <h1>{course.name}</h1>
            <div className="infobar" style={{backgroundColor: theme.rgba}}>
                <h2>{`Teacher: ${course.teacher}`}</h2>
            </div>
        </div>
        <Assignments key={course.id} assignments={assignments} theme={theme}/>
      </div>
  );
};


export default CourseView;