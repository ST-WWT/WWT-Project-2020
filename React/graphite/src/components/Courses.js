import React from "react";
import Course from "./Course";



const Courses = ({ courses }) => {
  if(!courses) {
    return null;
  }
  return (
    <div id="courses">
        {
          courses.map((course, index) => (
            <Course key={course.id} course={course} />
          ))
        }
    </div>
  );
};

export default Courses;