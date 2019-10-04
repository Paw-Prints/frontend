import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import HomePageForm from '../Components /HomePageForm.js/HomePageForm';
var axios = require("axios");

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed : '',
            location :  '',
            city: '',
            state: '',
            responseObj:{},
            loading: false
        }
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
                body = { 
                    location: this.state.location,
                     breed: this.state.breed
                    }
            
        } else if (this.state.city.length > 0 ){
            body = {
                breed: this.state.breed,
                 location: `${this.state.city + ', ' + this.state.state}`}
        };

        this.setState({ loading: true });

        axios.post('https://paw-prints.herokuapp.com/api/', body
        ).then(res=>{

                console.log(res)
                this.props.history.push({
                      pathname: '/display',
                      state: { responseObj: res.data }
                    })
            })
            .catch(err=> { console.error(err.data) })
    }
    render() {
        let content
        if(this.state.loading){
            content = (<Spin tip="Loading..." size="large" />)
        } else {
            content = (<div>
                <HomePageForm 
                    breed = { this.state.breed }
                    city = {this.state.city}
                    location = { this.state.location}
                    handleChange = { this.handleChange }
                    handleSelect = { this.handleSelect }
                    handleSubmit = { this.handleSubmit }
                    handleCityState = {this.handleCityState }
                />
            </div>)
        }
        return (
            content
        )
    }
}
