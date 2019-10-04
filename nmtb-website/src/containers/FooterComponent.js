import React from 'react';

function Footer(props) {
  return(
    <div className="footer">
      <div className ="container">
        <div className = "row justify-content-center">
          <div className = "col-4 offset-1 col-sm-2">
            <h5>Info</h5>
            <ul className = "list-unstyled">
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
