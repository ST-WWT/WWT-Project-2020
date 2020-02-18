import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Course from "./Course";
import Footer from "./Footer";


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

    function assignment(id, name) {
      this.id = id;
      this.name = name;
    }

    const courses = [
      new course(0, "Web and Computer Programming", "sborcherding", "theme-blue", "bg3", [
        new assignment(0, "Foodtruck"),
        new assignment(1, "Website 1"),
        new assignment(2, "Website 2"),
        new assignment(3, "Busywork 3"),
        new assignment(4, "Busywork 3")
      ]),
      new course(1, "AP BioChem and Human Anatomy", "teacher2", "theme-green", "bg2", [
        new assignment(0, "Cells project"),
        new assignment(1, "Human body"),
        new assignment(2, "Test review"),
        new assignment(3, "Bookwork")
      ]),
      new course(2, "AP World History", "kingnellie", "theme-red", "bg4", [
        new assignment(0, "Notes: Chapter 1"),
        new assignment(1, "Notes: Chapter 2"),
        new assignment(2, "Notes: Chapter 3"),
        new assignment(3, "Notes: Chapter 4")
      ]),
      new course(3, "11th Grade Language Arts", "teacher4", "theme-orange", "bg5", [
        new assignment(0, "The Great Gatsby Chapter 6 Quiz"),
        new assignment(1, "Literature Analysis"),
        new assignment(2, "The Great Gatsby Chapter 7"),
        new assignment(3, "The Great Gatsby Chapter 7 Study Guide")
      ]),
      new course(4, "Pre-Calculus", "teacher5", "theme-purple", "bg6", [
        new assignment(0, "Homework 4.5"),
        new assignment(1, "Homework 4.6"),
        new assignment(2, "Chapter 4 Review"),
        new assignment(3, "Chapter 4 Quiz")
      ]),
      new course(5, "Spanish", "teacher6", "theme-pink", "bg7", [
        new assignment(0, "Conjuguemos"),
        new assignment(1, "Unidad Dos Vocabulario"),
        new assignment(2, "Quiz Speaking"),
        new assignment(3, "Quiz Listening")
      ]),
      new course(6, "Graphic Art and Sculpting", "teacher7", "theme-grey", "bg8", [
        new assignment(0, "Sculpture Project: Final Rubric"),
        new assignment(1, "Portrait Project: Ideas"),
        new assignment(2, "Portrait Project: Reubric"),
        new assignment(3, "Graphic Design Template")
      ]),
      new course(7, "Default Classroom", "teacher8", "theme-yellow", "bg1", [
        new assignment(0, "Test 1"),
        new assignment(1, "Test 2"),
        new assignment(2, "Test 3"),
        new assignment(3, "Test 4")
      ]),
    ]

    
    return (
     <div className="content">
      <Header />
      <div className="classes">
        {
        /*loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (*/
          courses.map((course, index) => (
            <Course key={`${index}-${course.name}`} course={course} />
          ))
        /*)*/
        }
      </div>
      <Footer />
    </div>
  );
};


export default App;