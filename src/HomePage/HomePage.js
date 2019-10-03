import React, { Component } from 'react'
import HomePageForm from '../Components /HomePageForm.js/HomePageForm';
// var request = require("request");
var axios = require("axios");
// const serverurl=`http://localhost:3001`

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFmNGI1MTFmNDQwYTYxNTNjODlhYmE1N2MxOTA1MzliYmUyNTZmZjc0ODc2MTJhN2MwYmZmNDk3NTUwOTU5YzQxODBjOTBhZGY1ZmI3YmE3In0.eyJhdWQiOiJ3eFJwRkw0dGQxbW0xcjFLN1djT0F0OWx1M05uVzVZOVRPR2RBN0VxZHUyQTF2VVkzdCIsImp0aSI6ImFmNGI1MTFmNDQwYTYxNTNjODlhYmE1N2MxOTA1MzliYmUyNTZmZjc0ODc2MTJhN2MwYmZmNDk3NTUwOTU5YzQxODBjOTBhZGY1ZmI3YmE3IiwiaWF0IjoxNTcwMDQ1OTY2LCJuYmYiOjE1NzAwNDU5NjYsImV4cCI6MTU3MDA0OTU2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.S4KLrm8kFo37gaE1jHh5GY4xjdbN9c3x_vn_WAztbXdVDfkIX_7ZA0XwSFcb7v2-x5eAfb5l8UE_1n297g77DVFDvEMWfMmpAOCq1JF6NKqmHEcM265EM5mm8-_sHYeGhN7ZT2aBAzm29j7ttFJI6SXX4FlCIsmkgfgCWktIVPWG8YrNv-XM5e1VUYXCu-BXrgD4fGRP4OkGYjVjSAGx8nrJIbIfKco9p1emSPg1KmZse8cYWDlrT4lsitfM3llpkccSgl3KfXt5wWbRM1Ngpi0x3wZKnYh8E7abFLRosYiiqEUXv-iEL-jGGKHt3Aj64WzUBdSY2rKnY9bDDviZSQ",
            breed : '',
            location :  '',

        }
    }

    componentDidMount() {
        
    }

    handleChange =( e) =>{
        this.setState({
            location : e.target.value
        })
    }
    handleSelect = e =>{
        this.setState({
            breed: e.target.value
        })
    } 
    handleSubmit = e =>{
        console.log(e.target)
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <HomePageForm 
                    breed = { this.state.breed }
                    location = { this.state.location}
                    handleChange = { this.handleChange }
                    handleSelect = { this.handleSelect }
                    handleSubmit = { this.handleSubmit }
                />
                <button onClick={this.onButtonCLick}>please click</button>
            </div>
        )
    }
}
