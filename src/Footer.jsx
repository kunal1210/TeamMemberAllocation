import React from "react";
function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <footer className="footer p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="copyright_content text-center">
              <p> Team Member Allocation App @copyright {year}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
