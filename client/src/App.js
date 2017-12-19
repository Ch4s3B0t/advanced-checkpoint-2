import React, { Component } from "react";
import "./App.css";
import ListOfSwordsContainer from "./containers/ListOfSwordsContainer";
import CreateSwordContainer from "./containers/CreateSwordContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ListOfSwordsContainer />
        <CreateSwordContainer />
      </div>
    );
  }
}
export default (App);


