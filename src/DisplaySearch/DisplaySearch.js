import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, List, Avatar, Card } from 'antd';
import { Button } from 'antd/lib/radio';
import NavBar from "../NavBar/NavBar";
import { token } from "../token"
var axios = require("axios");
const { Header, Content, Footer } = Layout;

export default class DisplaySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: `${token}`,
            generalbreeddata: {},
            listingLink: [],
            description: [],
            age: [],
            name: [],
            attributes: [],
            images: [],
        }
    }
    componentDidMount() {
        // console.log("??????????",this.props.location.state.activeItem);
        var options = {
            method: 'POST',
            // url: `${serverurl}/home`,
            url: "https://paw-prints.herokuapp.com/api/",
            // data: {location: this.props.location.state.activeItem.location, breed: this.props.location.state.activeItem.breed},
            data: this.props.location.state.activeItem,
            headers:
                { Authorization: this.state.token }
        };
        axios(options)
            .then(response => {
                console.log("??????????", response.data)
                const generalbreeddata = response.data.costs
                const listingLink = response.data.pets.map(pet => {
                    return (pet.listingLink)
                });
                const description = response.data.pets.map(pet => {
                    return (pet.description)
                });
                const age = response.data.pets.map(pet => {
                    return (pet.age)
                });
                const name = response.data.pets.map(pet => {
                    return (pet.name)
                });
                // const attributes = response.data.pets.map(pet => {
                //     return this.state.attributes.push(pet.attributes)
                // });
                const images = response.data.pets.map(pet => {
                    return pet.images[0].medium
                });
                this.setState({
                    generalbreeddata: generalbreeddata,
                    listingLink: listingLink,
                    description: description,
                    age: age,
                    name: name,
                    // attributes: attributes,
                    images: images
                })
            })
            .catch(error => {
                //   alert("hey you have an error"+error);
                console.log(error);
                // throw new Error(error);
            });
    }
    goHome = (e) => {
        this.props.history.push("/home");
    }
    render() {
        console.log("blaahhhhhhhhh: ", this.state.images);
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `${this.state.name[i]}, Age: ${this.state.age[i]}`,
                description: `${this.state.description[i]}`,
                content: `${this.state.listingLink[i]}`,
                name: `${this.state.name[i]}`,
                images: `${this.state.images[i]}`
            });
        }
        return (
            <div className="container">
                <div className="col">
                    <div className="row-md-2">
                        <NavBar />
                    </div>
                    <div style={{ marginTop: "60px", position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "rgba(255, 255, 255, 1)" }} className="row-md-2">
                        <div style={{ marginTop: "10px", height: "70px", lineHeight: "3px" }}>
                            <p>The monthy cost of purchasing a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).monthlyCost}</p>
                            <p>The lifetime cost of purchasing a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).lifetimeCost}</p>
                            <p>The expenditure to groom a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).grooming}</p>
                            <p>The amount of money spent on food for a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).food}</p>
                            <p>The insurance amount of an average {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).insurance}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row-md-8">
                        <div style={{ paddingTop: "160px", paddingLeft: "20px", paddingRight: "20px" }}>
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                }}
                                dataSource={listData}
                                renderItem={item => (
                                    <List.Item
                                        key={item.title}
                                        extra={
                                            <img
                                                width={272}
                                                alt="logo"
                                                src={item.images}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            title={<a href={item.href}>{item.title}</a>}
                                            description={item.description}
                                        />
                                        {<a href={item.content}>{item.name}'s listingLink </a>}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
