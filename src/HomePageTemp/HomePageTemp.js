import React, { Component } from 'react'
// import MediaQuery from 'react-responsive'
import Media from 'react-media';
// import { useMediaQuery } from 'react-responsive'
import { Button, Input, Divider, Icon, Anchor, Select } from 'antd';
import { token } from "../token"
// var request = require("request");
var axios = require("axios");
const { Link } = Anchor;
const { Option } = Select;


// const serverurl=`http://localhost:3001`

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: `${token}`,
            zipcode: 0,
            breeds: [],
            activeItem: {},
        }
    }

    componentDidMount() {
        var options = {
            method: 'GET',
            // url: `${serverurl}/home`,
            url: "https://api.petfinder.com/v2/types/dog/breeds",
            headers:
                { Authorization: this.state.token }
        };
        axios(options)
            .then(response => {
                console.log("check response: " + response.data.breeds);
                const dogbreednames = response.data.breeds.map(dogbreeds => {
                    return (dogbreeds.name)
                });
                console.log(dogbreednames);
                this.setState({
                    breeds: dogbreednames
                })
            })
            .catch(error => {
                //   alert("hey you have an error"+error);
                console.log(error);
                // throw new Error(error);
            });
    }

    findPets = (e) => {
        console.log(this.state);

        if(this.state.activeItem.location.length!==5)
            alert("Please enter a valid zipcode!");
        else{
                this.props.history.push({
                      pathname: '/display',
                      state: { activeItem: this.state.activeItem }
                    })
        }
    }
    onLocationChangeHandler = (e) => {
        const {activeItem} = this.state;
        console.log(e.target);
        activeItem[e.target.name]= e.target.value
        this.setState({
            activeItem
        });
    }
    onBreedChangeHandler = (value, event) =>{
        const {activeItem} = this.state;
        activeItem["breed"]= value
        this.setState({
            activeItem
        });
    }

    render() {
        let breeds = this.state.breeds.map(name =>
            <Option key={name} name={name} value={name}>{name}</Option>
        )

        return (
            <div>
                <Media query={{ maxWidth: 599 }}>
                    {matches =>
                        matches ? (
                            <div style={{ padding: "50px", border: "1px solid #DCDCDC", margin: "auto", marginTop: "100px" }}>
                                <p style={{ fontSize: "18px" }}>Find the best dog breeds for your family at <span style={{ fontSize: "24px" }}>Paw Prints</span></p>
                                <div>
                                    <Input key="location" name="location" value={this.state.activeItem.location} onChange={this.onLocationChangeHandler} placeholder="Enter zipcode" required />
                                </div>
                                <div>
                                    <label for="selectbreed">select breed</label>
                                    <Select onSelect={(value, event) => this.onBreedChangeHandler(value, event)} key="breed" id="selectbreed" name="breed" value={this.state.activeItem.breed} style={{ width: "100%" }} >
                                        {breeds}
                                    </Select>
                                </div>
                                <Button onClick={this.findPets} style={{ marginTop: "30px", width: "40%" }} icon="login">Enter</Button>
                                <Divider />
                                <p>Don't know which breed you want?<span><a href="#"> Find Out!</a></span></p>
                            </div>
                        ) : (
                                <div style={{ padding: "50px", border: "1px solid #DCDCDC", width: "30%", margin: "auto", marginTop: "100px" }}>
                                    <p style={{ fontSize: "18px" }}>Find the best dog breeds for your family at <span style={{ fontSize: "24px" }}>Paw Prints</span></p>
                                    <div>
                                        <Input key="location" name="location" value={this.state.activeItem.location} onChange={this.onLocationChangeHandler} placeholder="Enter zipcode" required />
                                    </div>
                                    <div>
                                        <label for="selectbreed">select breed</label>
                                        <Select id="selectbreed" name="breed" value={this.state.activeItem.breed} style={{ width: "100%" }} onChange={this.onBreedChangeHandler}>
                                            {breeds}
                                        </Select>
                                    </div>
                                    <Button onClick={this.findPets} style={{ marginTop: "30px", width: "40%" }} icon="login">Enter</Button>
                                    <Divider />
                                    <p>Don't know which breed you want?<span><a href="#"> Find Out!</a></span></p>
                                </div>
                            )
                    }
                </Media>
            </div>
        )
    }
}
