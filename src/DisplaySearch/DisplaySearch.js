import React, { Component } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerImage from "./../Images/Logo_Headers/dog-paw_orange_50x50.png";

export default class DisplaySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalbreeddata: {},
      pets: []
    };
  }
  componentDidMount() {
    const generalbreeddata = this.props.location.state.responseObj.costs;

    this.setState({
      pets: this.props.location.state.responseObj.pets,
      generalbreeddata: generalbreeddata
    });
  }

  render() {
    const HeaderStyles = styled.div`
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
      .headers > h1 {
        margin: 0px 0px 0px 0px;
      }
      .pawHeader {
        height: 35px;
      }
    `;
    return (
      <div className="container">
        <div className="col">
          <div className="row-md-2">
            <HeaderStyles className="headers">
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
            </HeaderStyles>
          </div>
          <div
            style={{
              marginTop: "60px",
              position: "fixed",
              zIndex: 1,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 1)"
            }}
            className="row-md-2"
          >
            <div
              style={{ marginTop: "10px", height: "70px", lineHeight: "3px" }}
            />
            <hr />
          </div>
          <div className="row-md-8">
            <div
              style={{
                paddingTop: "160px",
                paddingLeft: "20px",
                paddingRight: "20px"
              }}
            >
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3
                }}
                dataSource={this.state.pets}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    extra={
                      <img width={272} alt="logo" src={item.images[0].medium} />
                    }
                  >
                    <List.Item.Meta
                      title={
                        <a
                          onClick={this.handleClick}
                          value={item.name}
                          href={item.href}
                        >
                          {item.title}
                        </a>
                      }
                      description={item.description}
                    />
                    {<a href={item.content}>{item.name}'s listingLink </a>}
                    {
                      <p>
                        <Link
                          to={{
                            pathname: `/display/${item.name}`,
                            state: {
                              generalbreeddata: this.state.generalbreeddata,
                              pet: item
                            }
                          }}
                        >
                          link
                        </Link>
                      </p>
                    }
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
