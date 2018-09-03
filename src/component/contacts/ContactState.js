import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contactLogs } = value;

          return (
            <React.Fragment>
              {contactLogs.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
//this is upper state of contact
