import React from "react";

var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

const TYPEICON = {
        0 : "fa-file-code",
        1 : "fa-file-alt",
}

const Assignments = ({ assignments, theme }) => {
    console.log(assignments);
  return (
        <ol className="assignments">
            <h1>Assignments</h1>
            {
                assignments.map((assignment, index) => (
                    <li key={assignment.id} className="sv">
                        <div className="icon" style={{backgroundColor: theme.hex}}>
                            <i className={`far ${TYPEICON[assignment.type]}`}></i>
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