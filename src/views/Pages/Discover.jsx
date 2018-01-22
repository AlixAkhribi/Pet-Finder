import React, { Component } from "react";
import API from "../../utils/API";
import UserSearchCard from "../../components/UserSearchCard/Card.js";

class Discover extends Component {
  constructor(props) {
    super(props);

    this.state = {
    image: "",
    match: false,
    matchCount: 0
    }
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      // window.location.assign("./Calendar");
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    console.log(this);
     API.getRandomDog()
       .then(imgData => {
         this.setState({
           image: imgData

         })

        }
       )
  };

  render() {
    return (
      <div>
      <UserSearchCard
        image={this.state.image} handleBtnClick={this.handleBtnClick} />
      <h1 className="text-center">
        Hi, I'm *petName*!
      </h1>
      <h2 className="text-center">
        I'm a *petType*, and belong to the *petBreed* breed.
      </h2>
      <h2 className="text-center">
        I'm *petAge* years old.
      </h2>
      <h2 className="text-center">
        I currently belong to the *petShelter*, but I'm looking for a new home!
      </h2>
      </div>
    );
  }
}

export default Discover;
