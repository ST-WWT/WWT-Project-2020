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
        new assignment(3, "")
      ]),
      new course(3, "", "teacher4", "theme-orange", "bg5", [
        new assignment(0, ""),
        new assignment(1, ""),
        new assignment(2, ""),
        new assignment(3, "")
      ]),
      new course(3, "", "teacher4", "theme-orange", "bg5", [
        new assignment(0, ""),
        new assignment(1, ""),
        new assignment(2, ""),
        new assignment(3, "")
      ]),
      new course(3, "", "teacher4", "theme-orange", "bg5", [
        new assignment(0, ""),
        new assignment(1, ""),
        new assignment(2, ""),
        new assignment(3, "")
      ]),
      new course(3, "", "teacher4", "theme-orange", "bg5", [
        new assignment(0, ""),
        new assignment(1, ""),
        new assignment(2, ""),
        new assignment(3, "")
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