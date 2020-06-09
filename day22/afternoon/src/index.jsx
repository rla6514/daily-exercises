import React from "react";
import ReactDOM from "react-dom";
import Question from "./Message/message.jsx";
import Answer from "./Answer/index.jsx";
import "./style.scss";
import "./index.html";

class App extends React.Component {
 /*  state = (
    days: [],

  )
  
  
  
  componentDidMount() {
    fetch('http://bootcamp.podlomar.org/api/weather')
    .then((resp) => resp.json())
    .then((json) => this.setState({days: json}));
  } */
  render() {
    /* if (this.state.days.length === 0) {
      return <h1>Loading...</h1>;
    } */
      return (
          <>
              <Question title="What’s the big deal with React.js?" text="What are some facts about why React is technically superior" />
              <Answer user="baked_turtle" text="Your question is stupid"/>
              <Question title="Is React.js worth it?" text="Let us know" />
              <Answer user="naked_eye" text="Chill out, man!"/>
              <Question title="Should I learn React.js or Vue.js?" text="Basically is it worth it if I learn Vue.js first and then React.js" />
              <Answer user="faked_icecream" text="Holy Moly"/>
          </>
      );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
