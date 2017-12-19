import React, { Component } from "react";
import "../App.css";
import ListOfSwords from "./ListOfSwords";

class CreateSword extends Component {
  constructor() {
    super();
    this.state = {
        name:"",
        length:0,
        origin:""
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
          <form onSubmit={(e) => {
              e.preventDefault();
              if (this.props.saveSword) {
                  this.props.saveSword(this.state);
              }
          }}>
            <div>
                Name: <input onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    });
                }} />
                Length: <input onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    });
                }} />
                Origin: <input onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    });
                }} />
                </div>
                <button>Create</button>
          </form>
      </div>
    );
  }
}
export default (CreateSword);


