import React from "react";
import PropTypes from "prop-types";
// const { branding } = this.props;
function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm  mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {Header.defaultProps.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/ " className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  branding: "My React App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
