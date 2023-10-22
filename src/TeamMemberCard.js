import femaleProfile from "../src/images/femaleProfile.jpg";
import maleProfile from "../src/images/maleProfile.jpg";
function TeamMemberCard({ employee, selectedTeam, handlEmployeeCardClick }) {
  return (
    <div
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      id={employee.id}
      style={{ cursor: "pointer" }}
      onClick={handlEmployeeCardClick}
      key={employee.id}
    >
      {employee.gender === "female" ? (
        <img src={femaleProfile} alt="Profile" className="card-img-top" />
      ) : (
        <img src={maleProfile} alt="Profile" className="card-img-top" />
      )}

      <div className="card-body">
        <div className="card-title">FullName : {employee.fullName}</div>
        <p className="card-text">Designation : {employee.designation}</p>
      </div>
    </div>
  );
}
export default TeamMemberCard;
