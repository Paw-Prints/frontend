import React, { Component } from 'react'
import HomePageForm from '../Components /HomePageForm.js/HomePageForm';
// var request = require("request");
var axios = require("axios");
// const serverurl=`http://localhost:3001`

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed : '',
            location :  '',
            city: '',
            state: ''
        }
    }

    componentDidMount() {
        
    }

    handleChange =(e) =>{
        const { target: { name, value } } = e;
        this.setState({ [name]: value })
    }
    handleSelect = e =>{
        e.preventDefault()
        this.setState({ breed: e.target.value })
    } 
    handleCityState = e => {
        e.preventDefault()
        this.setState({ state: e.target.value })
    }
    handleSubmit = e =>{
        e.preventDefault();
        let body = {}
        if(this.state.location.length > 0){
            
                body = { location: this.state.location, breed: this.state.breed}
            
        } else if (this.state.city.length > 0 ){
            body = {
                 city: `${this.state.city + ', ' + this.state.state}`}
        }
        console.log(body)
        axios.post('https://paw-prints.herokuapp.com/api/',        body
        ).then(res=>{
                console.log(res)
            })
            .catch(err=> { throw Error })
    }
    render() {
        return (
            <div>
                <HomePageForm 
                    breed = { this.state.breed }
                    city = {this.state.city}
                    location = { this.state.location}
                    handleChange = { this.handleChange }
                    handleSelect = { this.handleSelect }
                    handleSubmit = { this.handleSubmit }
                    handleCityState = {this.handleCityState }
                />
            </div>
        )
    }
}
