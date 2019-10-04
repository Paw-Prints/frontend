import React, { Component } from "react";
import { Spin, List } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components /Header/Header";
import DogProfile from "../DogProfile/DogProfile";

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
    const generalbreeddata = this.props.location.state.responseObj.costs;

    this.setState({
      pets: this.props.location.state.responseObj.pets,
      generalbreeddata: generalbreeddata,
      loading: false
    });
  }

  render() {
    // Issues with this rendering before props are filled

    let pets = this.state.pets || [];
    let totalCost = this.state.generalbreeddata

    console.log(this.state.generalbreeddata)

    return (
      <div>
        <Header style={{ zIndex: "3"}} />

        <div style={{minWidth: "400px", width: "70%", margin: "auto", marginTop: "60px", zIndex: "0"}}>

          <h2>Estimated Annual Costs: </h2>
          {/* { totalCost ? <h2>Estimated Annual Costs: {totalCost.annual.total.withInsurance} </h2> : null } */}
        </div>

      <div style={{minWidth: "400px", width: "70%", margin: "auto", marginTop: "60px", zIndex: "0"}}>

        <List
          itemLayout="vertical"
          size="small"

          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
            style: {display: "flex",
              justifyContent: "center"}
          }}

          dataSource={this.state.pets}
          renderItem={item => (
            <List.Item style={{flexDirection: "row-reverse"}}
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
                description={item.description}
              />
              {
                <p>
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
                </p>
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
`