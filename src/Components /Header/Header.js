import React, { Component } from 'react'
import styled from "styled-components";

export default class Header extends Component {
    render() {
        return (
            <HeaderStyles className='headers'>
                <h1>Paw Print </h1>
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
    .pawHeader{
        height: 35px;
    }
`
