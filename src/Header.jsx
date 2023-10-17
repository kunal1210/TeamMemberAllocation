function Header({ selectedTeam, TeamMemberCount }) {
  return (
    <header className="header p-4 ">
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <h1>Team Member Alloction App</h1>
            <h2>
              {selectedTeam} has {TeamMemberCount}
              {TeamMemberCount <= 1 ? " Member" : " Members"}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
