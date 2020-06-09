import React, { Component } from "react";
import { Route } from "react-router-dom";
import Jokes from "./Jokes";
import Joke from "./Joke";
import Random from "./Random";
import Create from "./Create";
import NavBar from "./NavBar";
class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: [],
    };
  }

  componentDidMount() {
    let url = "https://whispering-meadow-11234.herokuapp.com/jokes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ joke: data });
      });
  }

  render() {
    // console.log(this.state.joke.length)
    return (
      <>
        <NavBar />
        <Route
          path={"/"}
          exact
          render={() => {
            return <Jokes jokes={this.state.joke} />;
          }}
        />
        <Route
          path={"/random"}
          exact
          render={() => {
            return <Random />;
          }}
        />
        <Route
          path={"/create"}
          render={() => {
            return <Create />;
          }}
        />
        <Route
          path={"/joke/:id"}
          // exact
          render={(routerProps) => {
            // console.log(routerProps)
            let { id } = routerProps.match.params;
            let info = this.state.joke.find((item) => item.id === id);
            return <Joke {...info} />;
          }}
        />
      </>
    );
  }
}

export default App;
