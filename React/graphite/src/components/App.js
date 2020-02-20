import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Courses from "./Courses";
import CourseView from "./CourseView";
import Course from "./Course";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
    };



    function course(id, name, teacher, theme, background, assignments) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.theme = theme;
      this.background = background;
      this.assignments = assignments;
    }
  
    function assignment(id, name, startDate, endDate, type) {
      this.id = id;
      this.name = name;
      this.startDate = startDate;
      this.endDate = endDate;
      this.type = type;


      //For reference
      const TYPE = {
        0 : "DOCUMENT", 
        1 : "HTML",
      }

      //Get assignment display icon
      const TYPEICON = {
        0 : "fa-file-alt",
        1 : "fa-file-code",
      }

      this.icon = function() {
        return TYPEICON[type];
      }
    }

    const THEME = {
      BLUE : "#4384E0",
      YELLOW : "#FFB627",
      GREEN : "#5DA359",
      RED : "#FE5F55",
      GREY : "#577399",
      PURPLE : "#9B87E5",
      ORANGE : "#EF9351",
      PINK : "#EA9AD9"
    }
  
    const courses = [
      new course(0, "Web and Computer Programming", "sborcherding", THEME.BLUE, "bg3", [
        new assignment(0, "Foodtruck", 0, 0, 0),
        new assignment(1, "Website 1", 0, 0, 1),
        new assignment(2, "Website 2", 0, 0, 1),
        new assignment(3, "Busywork 3", 0, 0, 0),
        new assignment(4, "Busywork 3", 0, 0, 0)
      ]),
      new course(1, "AP BioChem and Human Anatomy", "teacher2", THEME.GREEN, "bg2", [
        new assignment(0, "Cells project", 0, 0, 0),
        new assignment(1, "Human body", 0, 0, 0),
        new assignment(2, "Test review", 0, 0, 0),
        new assignment(3, "Bookwork", 0, 0, 0)
      ]),
      new course(2, "AP World History", "kingnellie", THEME.RED, "bg4", [
        new assignment(0, "Notes: Chapter 1", 0, 0, 0),
        new assignment(1, "Notes: Chapter 2", 0, 0, 0),
        new assignment(2, "Notes: Chapter 3", 0, 0, 0),
        new assignment(3, "Notes: Chapter 4", 0, 0, 0)
      ]),
      new course(3, "11th Grade Language Arts", "teacher4", THEME.ORANGE, "bg5", [
        new assignment(0, "The Great Gatsby Chapter 6 Quiz", 0, 0, 0),
        new assignment(1, "Literature Analysis", 0, 0, 0),
        new assignment(2, "The Great Gatsby Chapter 7", 0, 0, 0),
        new assignment(3, "The Great Gatsby Chapter 7 Study Guide", 0, 0, 0)
      ]),
      new course(4, "Pre-Calculus", "teacher5", THEME.PURPLE, "bg6", [
        new assignment(0, "Homework 4.5", 0, 0, 0),
        new assignment(1, "Homework 4.6", 0, 0, 0),
        new assignment(2, "Chapter 4 Review", 0, 0, 0),
        new assignment(3, "Chapter 4 Quiz", 0, 0, 0)
      ]),
      new course(5, "Spanish", "teacher6", THEME.PINK, "bg7", [
        new assignment(0, "Conjuguemos", 0, 0, 0),
        new assignment(1, "Unidad Dos Vocabulario", 0, 0, 0),
        new assignment(2, "Quiz Speaking", 0, 0, 0),
        new assignment(3, "Quiz Listening", 0, 0, 0)
      ]),
      new course(6, "Graphic Art and Sculpting", "teacher7", THEME.GREY, "bg8", [
        new assignment(0, "Sculpture Project: Final Rubric", 0, 0, 0),
        new assignment(1, "Portrait Project: Ideas", 0, 0, 0),
        new assignment(2, "Portrait Project: Reubric", 0, 0, 0),
        new assignment(3, "Graphic Design Template", 0, 0, 0)
      ]),
      new course(7, "Default Classroom", "teacher8", THEME.YELLOW, "bg1", [
        new assignment(0, "Test 1", 0, 0, 0),
        new assignment(1, "Test 2", 0, 0, 0),
        new assignment(2, "Test 3", 0, 0, 0),
        new assignment(3, "Test 4", 0, 0, 0)
      ]),
    ]
    

    /*
    <Courses key={"userid"} courses={courses}/>
    <CourseView key={courses[0].id} course={courses[0]}/>
    */
    return (
     <div className="content">
      <Header />
      <Courses key={"userid"} courses={courses}/>
      <Footer />
    </div>
  );
};


export default App;