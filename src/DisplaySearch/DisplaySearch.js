import React, { Component } from "react";
import { Spin, List, Popover, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components /Header/Header";
import declawed from "../Images/Attributes/declawed.png";
import houseTrained from "../Images/Attributes/houseTrained.png";
import vaccinated from "../Images/Attributes/vaccination-color.png";
import neutered from "../Images/Attributes/neutered.png";
import specialNeeds from "../Images/Attributes/special_need_color.png";

export default class DisplaySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalbreeddata: {},
      pets: [],
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
      pets: this.props.location.state.responseObj.pets,
      generalbreeddata: this.props.location.state.responseObj.costs
    });
  }

  render() {
    let costHeader;

    console.log(this.state.pets);

    if (this.state.loading) {
      costHeader = (
        <div>
          <SpinnerDiv>
            <Spin tip="Loading..." size="large" />
          </SpinnerDiv>
        </div>
      );
    } else {
      costHeader = (
        <SpinnerDiv>
          <h2>
            Estimated Annual Costs:{" "}
            {this.state.generalbreeddata.annual.total.withInsurance}{" "}
          </h2>
        </SpinnerDiv>
      );
    }

    return (
      <div>
        <Header style={{ zIndex: "3" }} />
        <div
          style={{
            minWidth: "400px",
            width: "70%",
            margin: "auto",
            marginTop: "60px",
            zIndex: "0",
            marginBottom: "-60px"
          }}
        >
          {costHeader}
        </div>

        <div
          style={{
            minWidth: "400px",
            width: "70%",
            margin: "auto",
            marginTop: "60px"
          }}
        >
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
              style: { display: "flex", justifyContent: "center" }
            }}
            dataSource={this.state.pets}
            renderItem={item => (
              <List.Item
                style={{ flexDirection: "row-reverse" }}
                key={item.title}
                extra={
                  <img width={150} alt="logo" src={item.images[0].medium} />
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
                />
                {
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.distance.toFixed(2)} miles from you</p>

                    <div
                      style={{
                        display: "flex",
                        width: "70%",
                        margin: "auto",
                        marginBottom: "5%",
                        justifyContent: "center"
                      }}
                    >
                      {item.attributes.spayed_neutered ? (
                        <div>
                          <Popover
                            placement="topLeft"
                            content={<p>Spayed/Neutered</p>}
                            arrowPointAtCenter
                          >
                            <img
                              src={neutered}
                              style={{
                                height: "6vh",
                                width: "auto",
                                marginRight: "10px"
                              }}
                              alt="neutered"
                            />
                          </Popover>
                        </div>
                      ) : null}

                      {item.attributes.declawed ? (
                        <div>
                          <Popover
                            placement="topLeft"
                            content={<p>De-clawed</p>}
                            arrowPointAtCenter
                          >
                            <img
                              src={declawed}
                              style={{
                                height: "6vh",
                                width: "auto",
                                marginRight: "10px"
                              }}
                              alt="declawed"
                            />
                          </Popover>
                        </div>
                      ) : null}

                      {item.attributes.house_trained ? (
                        <div>
                          <Popover
                            placement="topLeft"
                            content={<p>House Trained</p>}
                            arrowPointAtCenter
                          >
                            <img
                              src={houseTrained}
                              style={{
                                height: "6vh",
                                width: "auto",
                                marginRight: "10px"
                              }}
                              alt="house trained"
                            />
                          </Popover>
                        </div>
                      ) : null}

                      {item.attributes.shots_current ? (
                        <div>
                          <Popover
                            placement="topLeft"
                            content={<p>Vaccinated</p>}
                            arrowPointAtCenter
                          >
                            <img
                              src={vaccinated}
                              style={{
                                height: "6vh",
                                width: "auto",
                                marginRight: "10px"
                              }}
                              alt="vaccinated"
                            />
                          </Popover>
                        </div>
                      ) : null}

                      {item.attributes.special_needs ? (
                        <div>
                          <Popover
                            placement="topLeft"
                            content={<p>Special Needs</p>}
                            arrowPointAtCenter
                          >
                            <img
                              src={specialNeeds}
                              style={{ height: "6vh", width: "auto" }}
                              alt="special needs"
                            />
                          </Popover>
                        </div>
                      ) : null}
                    </div>

                    <Button type="primary">
                      <Link
                        to={{
                          pathname: `/display/${item.name}`,
                          state: {
                            generalbreeddata: this.state.generalbreeddata,
                            pet: item,
                            pets: this.state.pets
                          }
                        }}
                      >
                        Learn More about {item.name}
                      </Link>
                    </Button>
                  </div>
                }
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

const SpinnerDiv = styled.div`
  margin-top: 60px;
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
