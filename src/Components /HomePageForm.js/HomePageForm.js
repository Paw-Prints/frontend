import React, { Component } from 'react'
import styled from 'styled-components';
import Header from '../Header/Header';
import StateOptions from './StateOptions'
import logo from './../../Images/Logo_Headers/dog_300x300.png'
export default class HomePageForm extends Component {
    constructor (){
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <AppStyles>
                    <div className='formFields'>
                        <img src={`${logo}`} alt='Paw logo'/>
                        <div className='header'>
                                <h3>Short Snappy Decision <br /> To Be Made...</h3>
                        </div >
                        <form onSubmit = {this.props.handleSubmit}>
                            <select 
                                name='breed'
                                value ={this.props.breed} 
                                onChange = {this.props.handleSelect}>
                                <option value="Labrador Retriever">Dog Breed</option>
                                <option value="Labrador Retriever">Labrador Retriever</option>
                                <option value="German Shepherd Dog">German Shepherd Dog</option>
                                <option value="Golden Retriever">Golden Retriever</option>
                                <option value="French Bulldog">French Bulldog</option>
                                <option value="Australian Shepherd">Australian Shepherd</option>
                                <option value="Beagle">Beagle</option>
                                <option value="Poodle">Poodle</option>
                                <option value="Siberian Husky">Siberian Husky</option>
                                <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                                <option value="Pembroke Welsh Corgi">Pembroke Welsh Corgi</option>
                            </select>
                            <div className="city">
                                <input 
                                    type="text" 
                                    name="city"  
                                    value={this.props.city} 
                                    placeholder='City' 
                                    onChange= {this.props.handleChange} />
                                    <StateOptions
                                        handleCityState = {this.props.handleCityState}
                                    />
                            </div>
                            <h3>Or</h3>
                            <input 
                                type="text"
                                name = 'location'  
                                placeholder = 'Zip Code'
                                value = {this.props.location}
                                onChange = { this.props.handleChange }
                            />
                            <button>Submit</button>
                        </form>
                    </div>
                </AppStyles>
     
            </div>
        )
    }
} 

const AppStyles = styled.div`
    width: 100%;
    display: flex;
    margin-top: 65px;
    height: 80%;
    align-content: center;
    align-items: center;
    h1, h3, button, input, option, select {
        font-family: 'Blinker', sans-serif;

    }
    img{
        height: 100px;
    }
    .header{
        padding: 30px;
    }
   .header > h3{
    color : #1a5e9e;
    font-size: 1.5rem;
    font-weight: bolder
   }
    .formFields{
        padding: 20px 0px 50px 0px;
        width:  500px;
        height:100%;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
        margin: 0 auto 60px auto;
    }
    form{
        display: flex;
        flex-direction : column;
        align-content: center;
        align-items: center;
        @media (max-width: 768px) {
            color: red;
            width: 100%;
        }
    }
    input,select {
        width: 70%;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.5;
        color: #777777;
        margin: 10px 0px;
        padding-left: 20px;
        box-sizing: border-box;
        height: 50px;
        border: 1px solid #e0e0e0;
        border-bottom: none;
        background-color: #fff;
        border: 1px solid #E04E00;
        border-radius: 5px;
    }
    input, select, button:focus{
        outline: none;
    }
    button{
        border: 1px solid #E04E00;
        color: #E04E00;
        border-radius: 5px;
        padding: 10px 25px;
        font-size: 1.3rem;
        
    }
    button:hover{
        color : #1a5e9e;
        background-color: #E04E00; 
        transition-duration: 1.2s
    }
    h3{
        margin: 5px;
        color: #1a5e9e;
    }
    .city{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .city > input, .city > select{
        width: 45%;
    }
    `;