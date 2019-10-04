import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Layout, Menu, Breadcrumb, Icon, List, Avatar, Card } from 'antd';
import { Button } from 'antd/lib/radio';
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
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
            responseObj: {},
            item: {}
        }
    }
    componentDidMount() {
        const generalbreeddata = (((((this.props||{}).location||{}).state||{}) || {}).responseObj || {}).costs
        this.setState({
            generalbreeddata: generalbreeddata,
            responseObj: (((this.props||{}).location||{}).state||{}).responseObj||{}
        })
    }

    render() {
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
        const Cards = styled.div`
border-style: solid;
border-color: #E04E00;
align-content: center;
    align-items: center;
    justify-content: center;
    z-index: -1;
    opacity: 1;
    display: flex;
`
        let pets = ((this.state.responseObj || {}).pets || []).map(item => {
            return (
                <Cards >
                    <div>
                        <ul class="one">
                            <h2><Link
                                to={{
                                    pathname: `/display/${item.name}`,
                                    state: {
                                        generalbreeddata: this.state.generalbreeddata,
                                        item: item
                                    }
                                }}>{item.name}</Link></h2>
                            <img src={item.images[0].medium}></img>
                        </ul>
                    </div>
                </Cards>
            )
        })

        return (
            <div>
                <HeaderStyles className='headers'>
                    <h1 style={{ alignContent: "center" }}>Paw Print <span><img className='pawHeader' src={`${headerImage}`} /></span></h1>
                </HeaderStyles>
                <div style={{ paddingTop: "100px", paddingLeft: "20px", paddingRight: "20px" }}>
                    {pets}
                </div>
            </div>
        )
    }
}
