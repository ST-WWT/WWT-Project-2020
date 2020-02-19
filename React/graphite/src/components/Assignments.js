import React from "react";



const Assignments = ({ assignments }) => {
  return (
        <ol className="assignments">
            <h1>Assignments</h1>
            {
                assignments.map((assignment, index) => (
                    <li key={assignment.id} className="sv">
                        <div className="icon">
                            <i className={`far ${assignment.icon()}`}></i>
                        </div>
                        <div className="content">
                            <h1>{assignment.name}</h1>
                        </div>
                    </li>
                ))
            }
        </ol>
  );
};


export default Assignments;