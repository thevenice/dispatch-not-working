import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: true
    };
  }
  OnShowClick = _ => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  //delete button callback  for ul
  onDeleteClick = (dispatch, id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { name, phone, email, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h2>
                {name}
                {showContactInfo ? (
                  <span
                    onClick={this.OnShowClick}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    onClick={this.OnShowClick}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                )}
                <span
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  x
                </span>
              </h2>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{phone}</li>
                  <li className="list-group-item">{email}</li>
                </ul>
              ) : (
                <ul className="list-group" />
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
