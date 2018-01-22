import React, { Component } from "react";
import API from "../../utils/API";
import UserSearchCard from "../../components/UserSearchCard/Card.js";

class Discover extends Component {
  constructor(props) {
    super(props);

    this.state = {
    image: "",
    name: "",
    type: "",
    breed: "",
    age: "",
    shelter: "",
    description: "",
    }
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextPet();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {

    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextPet();
  };

  loadNextPet = () => {
    console.log(this);
     API.getRandomPet()
       .then(allData => {
         this.setState({
           image: allData.petImage,
           name: allData.petName,
           type: allData.petType,
           breed: allData.petBreed,
           age: allData.petAge,
           shelter: allData.petShelter,
           description: allData.petDescription,
         })

        }
       )
  };

  render() {
    // console.log(this.state);
    return (
      <div>
      <UserSearchCard
        image={this.state.image} handleBtnClick={this.loadNextPet} />
        <div className="petInfo">
      <h2 className="moreInfo">
        Hi, I'm {this.state.name}!
      </h2>
      <h4 className="moreInfo">
        I'm a {this.state.type}, and belong to the {this.state.breed} breed. I'm {this.state.age} years old. I currently belong to the {this.state.shelter}, but I'm looking for a new home! I can be described as, {this.state.description}
      </h4>
    </div>
      </div>
    );
  }
}

export default Discover;
