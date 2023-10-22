import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Employees from "./Employees";
import Nav from "./Nav";
import NotFound from "./NotFound";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [selectedTeam, setTeam] = React.useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = React.useState(
    JSON.parse(localStorage.getItem("employeelist")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );
  React.useEffect(() => {
    localStorage.setItem("employeelist", JSON.stringify(employees));
  });
  React.useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  });
  function handleSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handlEmployeeCardClick(event) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === parseInt(event.currentTarget.id)) {
        // Check if the employee's teamName matches selectedTeam
        if (employee.teamName === selectedTeam) {
          // If it matches, set teamName to an empty string
          return { ...employee, teamName: "" };
        } else {
          // If it doesn't match, set teamName to selectedTeam
          return { ...employee, teamName: selectedTeam };
        }
      } else {
        // Leave other employees unchanged
        return employee;
      }
    });

    setEmployees(updatedEmployees);
  }
  return (
    <Router>
      <div className="body_wrapper">
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          TeamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/TeamMemberAllocation"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleSelectionChange={handleSelectionChange}
                handlEmployeeCardClick={handlEmployeeCardClick}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <GroupedTeamMembers
                selectedTeam={selectedTeam}
                employees={employees}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
