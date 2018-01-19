import React from 'react';
// import petsApi from "../../../Data/petsApi";
import axios from "axios";

export default class PetForm extends React.Component {
    state = {
        petShelter: '',
        petZipCode: '',
        petImage: '',
        petName: '',
        petBreed: '',
        petType: '',
        petAge: '',
        petDescription: ''
        // password: ''
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        let shelterName = this.state.petShelter;
        let zipCode = this.state.petZipCode;
        let image = this.state.petImage;
        let name = this.state.petName;
        let breed = this.state.petBreed;
        let type = this.state.petType;
        let age = this.state.petAge;
        let description = this.state.petDescription;
        // let password = this.state.password;
        
        let formData = this.state;
        console.log(formData);
        axios.post("/api/pets/addPet", formData).then(res => {
            console.log("res.data here: ", res.data);
        });
        // petsApi.create(formData).then(results => {
        //     console.log("I like pushi ", results);
        // });
        
        this.setState({
            // shelter: '',
            // zipcode: '',
            // image: '',
            // name: '',
            // breed: '',
            // type: '',
            // age: '',
            // description: '',
            // password: '',
            petShelter: '',
            petZipCode: '',
            petImage: '',
            petName: '',
            petBreed: '',
            petType: '',
            petAge: '',
            petDescription: '',
            // password: ''
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        name='petShelter'
                        placeholder='Shelter Name'
                        value={this.state.shelter}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petZipCode'
                        placeholder='Enter Zipcode'
                        value={this.state.zipcode}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petImage'
                        placeholder='Upload Image'
                        value={this.state.image}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petName'
                        placeholder='Pet Name'
                        value={this.state.name}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petBreed'
                        placeholder='Enter Breed'
                        value={this.state.breed}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petType'
                        placeholder='Type of Pet'
                        value={this.state.type}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petAge'
                        placeholder='Age of Pet'
                        value={this.state.age}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name='petDescription'
                        placeholder='Description of Pet'
                        value={this.state.description}
                        onChange={e => this.change(e)}
                    />
                    {/* <br />
                    <input
                        name='password'
                        type='password'
                        placeholder='Enter Password'
                        value={this.state.password}
                        onChange={e => this.change(e)}
                    /> */}
                    <br />
                    <button onClick={e => this.onSubmit(e)}> Submit </button>
                </form>
            </div>
        )
    }
}