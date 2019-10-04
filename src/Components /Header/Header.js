import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import headerImage from "./../../Images/Logo_Headers/dog-paw_black_50x50.png";

export default class Header extends Component {
  render() {
    return (
      <HeaderStyles className="headers">
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          <h1>
            Paw Print{" "}
            <span>
              <img
                alt="paw print"
                className="pawHeader"
                src={`${headerImage}`}
              />
            </span>
          </h1>
        </Link>
      </HeaderStyles>
    );
  }
}

const HeaderStyles = styled.div`
  text-decoration: none;
  color: black;
  width: 100vw;
  height: 60px;
  background: #e04e00;
  opacity: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  min-width: 400px;

  .headers > h1 {
    margin: 0px 0px 0px 0px;
  }
  .pawHeader {
    height: 35px;
    padding-left: 10px;
    padding-bottom: 8px;
  }
  h1 {
      margin-top: 8%;
  }
`;
