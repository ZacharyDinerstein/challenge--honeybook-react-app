import React from 'react';

import './App.scss';
import '../header/Header.scss';
import { Header } from '../header/Header.js';
import CardContainer from '../cardContainer/CardContainer.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: []
    };

    this.handleChange = this.handleChange.bind(this);
  }


  // Grab our JSON data and attach that data to state.data.
  // Then, set filteredData to state.data.
  // We'll use filteredData to render our cards.

  componentDidMount() {
    fetch("https://candidate-test.herokuapp.com/contacts")
     .then(response => {
       return response.json();
     })
     .then(responseJson => {
       this.setState({ 
        data: responseJson 
      }, function(){
        this.setState({
          filteredData: this.state.data
        });
      });
     })
  }


  // Updated what Cards we show based on User's search
  // in the search bar

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.data;

      newList = currentList.filter(profile => {

        // Take the data that will form the contents of our Cards
        // and convert that data into one giant string.
        // (Leave out data referring to images, as we don't want users
        // searching for cards based on the random letters included
        // in an img's src url.)

        let profileAsString = '';
        for ( var key in profile ) {  
          if (key !== "icon" && key !== "profile_image"){
            profileAsString +=  ' ' + profile[key].toLowerCase();
          }
        }

        // Change search term to lowercase
        // (Searching only with lowercase characters eliminates 
        // any possible capitalization conflicts.)
        const filter = e.target.value.toLowerCase();

        // Check to see if a Card's contents includes the User's search term.
        // If it does, Card contents will be added to newList 
        // and eventually displayed on screen. 
        return profileAsString.includes(filter);
      });

    } else {

      // If a user's search doens't match the contents of
      // any Card, display all Cards on screen.
      newList = this.state.data;
    }

    this.setState({
      filteredData: newList
    });
  }

  render(){
    return (
      <div>
        <Header handleChange={this.handleChange} />
        <CardContainer filteredData={this.state.filteredData} />
      </div>
    );
  }
}


export default App;
