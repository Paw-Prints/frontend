import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import styled from 'styled-components';
import HomePageForm from '../Components /HomePageForm.js/HomePageForm';
import Header from '../Components /Header/Header';
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
            loading: false,
            error: false
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
    onClose = e => {
        this.setState({
            error: false
        });
    };
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
        ).then( res => {
                this.props.history.push({
                      pathname: '/display',
                      state: { responseObj: res.data }
                    })
            })
            .catch( err => { 
                this.setState({ loading: false, error: true }) 
            })
    }
    render() {
        let content
        let alert
        if(this.state.error){
            alert = <Alert
                    message="Invalid City or Zip Code"
                    description="That city or zip code was not found. Please double check and try again!"
                    type="error"
                    style={{ width: "50%", margin: "auto", marginTop: "6%", marginBottom: "-5%" }}
                    closable
                    onClose={this.onClose}
            />
        } else {
            alert = null;
        }
        if(this.state.loading){
            content = (<div>
                <Header />
                <SpinnerDiv>
                    <Spin tip="Loading..." size="large" />
                </SpinnerDiv>
            </div>)
        } else {
            content = (<div>
                <Header />
                {alert}
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

const SpinnerDiv = styled.div`
    margin-top: 60px;
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`