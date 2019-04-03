import React, { Component } from "react";
import Store from "./store";
import { decorate, observable, action, configure } from "mobx";
import { Provider } from "mobx-react";
import Dashboard from "./Dashboard";
import "./App.css";

configure({ enforceActions: "observed" });

const newStore = decorate(new Store(), {
  reviewList: observable,
  addReview: action,
  testList: observable
});

class App extends Component {
  render() {
    return (
      <Provider store={newStore}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
