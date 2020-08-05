import React, { Component} from "react";
import FilmDetails from "./components/FilmDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      film: null,
    };
  }

  fetchTheData = (url, data) => {
    const url = "https://swapi.dev/api/";
    fetch(url + "films/1/")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    
  };

  fetchOtherData = (url) => {
    fetch(url).then((response)=> response.json()).then((data)=> this.setState({ characterOfTheFilm: data}));
  };

  componentDidMount() {
    this.fetchTheData();
    this.state.film && this.fetchOtherData(this.state.film.characters[0]);
  }

  render() {
    console.log(this.state.film && this.state.film.characters[0]); 
    return( 
    <div>
      <h1> The Star Wars API</h1>
      {this.state.film} ? (
        <FilmDetails
          title={this.state.film.title}
          release_date={this.state.film.release_date}
          />
      ) : (
        <h2>No Film available</h2>
      )
    </div>
    );
  }
}



export default App;
