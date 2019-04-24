import React from 'react';
import './App.scss';
import '../card/Card.scss';
import '../header/Header.scss';
import { Card } from '../card/Card.js';
import { Header } from '../header/Header.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: []
    };

    this.handleChange = this.handleChange.bind(this);
  }


  renderCards(){
    let cards = [];

    this.state.filteredData.map((item, index) => (
        cards.push(
          <Card
            name={item.name}
            job={item.job}
            company={item.company_name}
            profileImage={item.profile_image}
            icon={item.icon}
            phone={item.phone}
            email={item.email}
            key={index} />
        )
      )
    )

    return cards;
  }


  // Once App component mounts, 
  // grab all our data from the url below
  // and attach that data to state.data.
  // Then set filteredData to the contents of state.data.

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


  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.data;

      newList = currentList.filter(profile => {

        let profileAsString = '';

        // Convert all values in profile objects into a strings
        // We'll check our search filter against that string
        for ( var key in profile ) {  

          // Don't include any image values in our profile string.
          // Because they contain so many characters, they could mess up our search.
          if (key !== "icon" && key !== "profile_image"){
            profileAsString +=  ' ' + profile[key].toLowerCase();
          }
        }

        // change search term to lowercase
        const filter = e.target.value.toLowerCase();

        // check to see if the current list profile includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return profileAsString.includes(filter);
      });

    } else {
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
          <div className="container">
            <main className="card-container">
              <div className="row">
                {this.renderCards()}
              </div>
            </main>
          </div>
      </div>
    );
  }
}

export default App;
