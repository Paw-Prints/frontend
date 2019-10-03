import React, { Component } from 'react'
import styled from 'styled-components';

export default class HomePageForm extends Component {
    constructor (){
        super();
    }

    render() {
        return (
            <div>
                <AppStyles>
                    <form onSubmit = {this.props.handleSubmit}>
                        <select 
                            name='breed'
                            value ={this.props.breed} 
                            onChange = {this.props.handleSelect}>
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
    h3{
        margin: 5px;
    }
    .city{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .city > input, .city > select{
        width: 45%;
    }
    `;

function StateOptions(props) {
    return (
        <>
        <select className='stateSelect' 
            name = 'state'
            value ={props.state}
            onChange ={props.handleCityState}
            >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>	
        </>
    )
}
