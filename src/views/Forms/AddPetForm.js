import React from 'react';

export default class AddPetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: '',
      name: '',
      type: '',
      age: '',
      description: '',
      password: '',
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      shelter: '',
      zipcode: '',
      image: '',
      name: '',
      breed: '',
      type: '',
      age: '',
      description: '',
      password: '',
    });
  }

  render() {
    return (
      <div onClick={e => e.stopPropagation()}>
        <form>
          <input
            name="shelter"
            placeholder="Shelter Name"
            value={this.state.shelter}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="zipcode"
            placeholder="Enter Zipcode"
            value={this.state.zipcode}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="image"
            placeholder="Upload Image"
            value={this.state.image}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="name"
            placeholder="Pet Name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="breed"
            placeholder="Enter Breed"
            value={this.state.breed}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="type"
            placeholder="Type of Pet"
            value={this.state.type}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="age"
            placeholder="Age of Pet"
            value={this.state.age}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="description"
            placeholder="Description of Pet"
            value={this.state.description}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}> Submit </button>
        </form>
      </div>
    );
  }
}
