import React from "react";
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";

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
          <Teams
            selectedTeam={selectedTeam}
            handleSelectionChange={handleSelectionChange}
          />
        </div>
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              selectedTeam={selectedTeam}
              employees={employees}
              handlEmployeeCardClick={handlEmployeeCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Employees;
