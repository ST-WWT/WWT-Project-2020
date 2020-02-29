import React from "react";

var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

const Assignments = ({ assignments }) => {
    console.log(assignments);
  return (
        <ol className="assignments">
            <h1>Assignments</h1>
            {
                assignments.map((assignment, index) => (
                    <li key={assignment.id} className="sv">
                        <div className="icon">
                            <i className={`far fa-file-code`}></i>
                        </div>
                        <div className="content">
                            <h1>{assignment.name}</h1>
                            <div className="dates">
                                <h2>Assigned: {monthNames[(new Date(assignment.startDate)).getMonth()]} {(new Date(assignment.startDate)).getDate()} 
                                <br/>Due: {monthNames[(new Date(assignment.endDate)).getMonth()]} {(new Date(assignment.endDate)).getDate()}</h2>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ol>
  );
};


export default Assignments;