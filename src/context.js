import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contactLogs: state.contactLogs.filter(singleContact => {
          return singleContact.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor() {
    super();

    this.state = {
      contactLogs: [
        {
          id: 1,
          name: "person1",
          email: "xx@gmail.com",
          phone: "555 - 555 - 5555"
        },
        {
          id: 2,
          name: "person2",
          email: "yy@gmail.com",
          phone: "999 - 999 - 9999"
        },
        {
          id: 3,
          name: "person3",
          email: "aa@gmail.com",
          phone: "777 - 777 - 7777"
        }
      ],
      disptach: action =>
        this.setState(state => {
          reducer(state, action);
        })
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
//we can also do it as
//export Context.Consumer

//notes
//data provider / store for our app
//its an actual component with
// an actual class called provider
//that we will wrap around our entrie app
//all the app will be wrap inside this provider component
