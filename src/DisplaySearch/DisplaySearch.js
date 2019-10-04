import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, List, Avatar, Card } from 'antd';
import { Button } from 'antd/lib/radio';
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom";
import { token } from "../token"
import styled from "styled-components";
import headerImage from './../Images/Logo_Headers/dog-paw_orange_50x50.png'
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
        // console.log("??????????", this.props.location.state.responseObj);

        const generalbreeddata = ((this.props.location.state||{}).responseObj||{}).costs
        const listingLink = (((this.props.location.state||{}).responseObj||{}).pets||[]).map(pet => {
            return (pet.listingLink)
        });
        const description = (((this.props.location.state||{}).responseObj||{}).pets||[]).map(pet => {
            return (pet.description)
        });
        const age = (((this.props.location.state||{}).responseObj||{}).pets||[]).map(pet => {
            return (pet.age)
        });
        const name = (((this.props.location.state||{}).responseObj||{}).pets||[]).map(pet => {
            return (pet.name)
        });
        // const attributes = (this.props.location.state||{}).responseObj.pets.map(pet => {
        //     return this.state.attributes.push(pet.attributes)
        // });
        const images = (((this.props.location.state||{}).responseObj||{}).pets||[]).map(pet => {
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

    }
    goHome = (e) => {
        this.props.history.push("/home");
    }
    render() {
        console.log("blaahhhhhhhhh: ", this.state.images);
        const listData = [];
        for (let i = 0; i < 10; i++) {
            listData.push({
                href: `/display/${this.state.name[i]}`,
                title: `${this.state.name[i]}, Age: ${this.state.age[i]}`,
                description: `${this.state.description[i]}`,
                content: `${this.state.listingLink[i]}`,
                name: `${this.state.name[i]}`,
                images: `${this.state.images[i]}`
            });
        }
        const HeaderStyles = styled.div`
    width: 100vw;
    height: 60px;
    background: #E04E00;
    opacity: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    .headers > h1{
        margin: 0px 0px 0px 0px;
    }
    .pawHeader{
        height: 35px;
    }
`
        return (
            <div className="container">
                <div className="col">
                    <div className="row-md-2">
                        <HeaderStyles className='headers'>
                            <h1>Paw Print <span><img className='pawHeader' src={`${headerImage}`} /></span></h1>
                        </HeaderStyles>
                    </div>
                    <div style={{ marginTop: "60px", position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "rgba(255, 255, 255, 1)" }} className="row-md-2">
                        <div style={{ marginTop: "10px", height: "70px", lineHeight: "3px" }}>
                            {/* <p>The monthy cost of purchasing a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).monthlyCost}</p>
                            <p>The lifetime cost of purchasing a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).lifetimeCost}</p>
                            <p>The expenditure to groom a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).grooming}</p>
                            <p>The amount of money spent on food for a {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).food}</p>
                            <p>The insurance amount of an average {this.props.location.state.activeItem.breed} is {(this.state.generalbreeddata||{}).insurance}</p> */}
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
                                            // title={<a href={item.href}>{item.title}</a>}
                                            description={item.description}
                                        />
                                        {<a href={item.content} >{item.name}'s listingLink </a>}
                                        {
                                            <Link 
                                            to={{ 
                                            pathname: `/display/${item.name}`, 
                                            state: { 
                                                generalbreeddata: this.state.generalbreeddata,
                                                item: item
                                            } 
                                          }}>
                                          {item.title}
                                            </Link>
                                        }
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
