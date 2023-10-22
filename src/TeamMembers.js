import TeamMemberCard from "./TeamMemberCard";
function TeamMembers({ employees, selectedTeam, handlEmployeeCardClick }) {
  return employees.map((employee) => (
    <TeamMemberCard
      handlEmployeeCardClick={handlEmployeeCardClick}
      selectedTeam={selectedTeam}
      employee={employee}
    />
  ));
}
export default TeamMembers;
