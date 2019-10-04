import React, { Component } from 'react'
import styled from "styled-components";
import headerImage from './../../Images/Logo_Headers/dog-paw_orange_50x50.png'

export default class Header extends Component {
    render() {
        return (
            <HeaderStyles className='headers'>
                <p>Paw Print <span><img className='pawHeader' src = {`${headerImage}`}/></span></p>
            </HeaderStyles>
        )
    }
}

const HeaderStyles = styled.div`
    width: 100vw;
    height: 60px;
    background: #E04E00;
    opacity: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    .pawHeader{
        height: 35px;
    }
`
