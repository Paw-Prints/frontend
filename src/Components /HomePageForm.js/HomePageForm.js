import React, { Component } from 'react'
import styled from 'styled-components';

export default class HomePageForm extends Component {
    constructor (){
        super();
        // this.state = {
        //     breed : '',
        //     location :  '',
        // }
    }

    // handleChange =( e) =>{
    //     this.setState({
    //         location : e.target.value
    //     })
    // }
    // handleSelect = e =>{
    //     this.setState({
    //         breed: e.target.value
    //     })
    // } 
    // handleSubmit = e =>{
    //     console.log(e.target)
    //     e.preventDefault();
    //     console.log(this.state)
    // }
    render() {
        return (
            <div>
                <AppStyles>
                    <form onSubmit = {this.props.handleSubmit}>
                        <select name='breed' value ={this.props.breed} onChange = {this.props.handleSelect}>
                            <option value="Labrador Retriever">Choose A Breed</option>

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
                        <input 
                            type="text"
                            name = 'location'  
                            placeholder = 'Zip Code'
                            value = {this.props.location}
                            onChange = { this.props.handleChange }
                        />
                        <button>Submit</button>
                    </form>
                </AppStyles>
     
            </div>
        )
    }
}

const AppStyles = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    align-content: center;
    align-items: center;

  form{
    display: flex;
    flex-direction : column;
    align-content: center;
    align-items: center;
    padding: 200px 20px 0px 0px;
    width:  500px;
    height: 500px;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    margin: 0 auto;
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
        height: 75px;
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
`;