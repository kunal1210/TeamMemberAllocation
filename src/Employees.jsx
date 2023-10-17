import React from "react";
import femaleProfile from "../src/images/femaleProfile.jpg";
import maleProfile from "../src/images/maleProfile.jpg";

function Employees({
  employees,
  selectedTeam,
  handleSelectionChange,
  handlEmployeeCardClick,
}) {
  return (
    <div className="container">
      <div className="row flex justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg mb-4"
            value={selectedTeam}
            onChange={handleSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                id={employee.id}
                style={{ cursor: "pointer" }}
                onClick={handlEmployeeCardClick}
                key={employee.id}
              >
                {employee.gender === "female" ? (
                  <img
                    src={femaleProfile}
                    alt="Profile"
                    className="card-img-top"
                  />
                ) : (
                  <img
                    src={maleProfile}
                    alt="Profile"
                    className="card-img-top"
                  />
                )}

                <div className="card-body">
                  <div className="card-title">
                    FullName : {employee.fullName}
                  </div>
                  <p className="card-text">
                    Designation : {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Employees;
