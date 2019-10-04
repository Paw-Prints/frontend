import React from "react";
import Header from "../Components /Header/Header";
import declawed from "../Images/Attributes/declawed.png";
import houseTrained from "../Images/Attributes/houseTrained.png";
import vaccinated from "../Images/Attributes/vaccination-color.png";
import neutered from "../Images/Attributes/neutered.png";
import specialNeeds from "../Images/Attributes/special_need_color.png";
import styled from 'styled-components';
import { Card, Popover } from 'antd';
import CostTabs from '../costTabs/CostTabs';

const { Meta } = Card;

class DogProfile extends React.Component {
  state = {};

  render() {
    const { pet, generalbreeddata } = this.props.location.state;
    const { images, name, description, breeds, attributes, contact, age } = pet;
    console.log(pet, generalbreeddata);

    return (
      <div>
        <Header />

        <div
          style={{ margin: "auto", width: "70%", minWidth: "400px", display: "flex", marginTop: "60px", maxHeight: "50vh", justifyContent: "center", paddingTop: "5%", marginBottom: "6%" }}
        >

          <PetCard>
            <img src={images[0].medium} alt="dog" style={{ height: "30vh", width: "auto"}} />

            <CardText style={{marginTop: "-2%"}}>
              <h1>{name}</h1>

              <p style={{ textAlign: "left" }}><b>Description:</b> {description}</p>
              <p><b>Age:</b> {age}</p>
              <p><b>Breed:</b> {breeds.primary} </p>


            <div style={{ marginTop: "5%" }}>
              {attributes.spayed_neutered ? (
                <div> 
                  <Popover placement="topLeft" content={<p>Spayed/Neutered</p>} arrowPointAtCenter>
                    <img src={neutered} style={{ height: "6vh", width: "auto", marginRight: "10px"  }} alt="neutered" />
                  </Popover>
                </div>
              ) : null}

              {attributes.declawed ? (
                <div> 
                  <Popover placement="topLeft" content={<p>De-clawed</p>} arrowPointAtCenter>
                    <img src={declawed} style={{ height: "6vh", width: "auto", marginRight: "10px"  }} alt="declawed" />
                  </Popover>
                </div>
              ) : null}

              {attributes.house_trained ? (
                <div> 
                  <Popover placement="topLeft" content={<p>House Trained</p>} arrowPointAtCenter>
                    <img src={houseTrained} style={{ height: "6vh", width: "auto", marginRight: "10px"  }} alt="house trained" />
                  </Popover>
                </div>
              ) : null}

              {attributes.shots_current ? (
                <div> 
                  <Popover placement="topLeft" content={<p>Vaccinated</p>} arrowPointAtCenter>
                    <img src={vaccinated} style={{ height: "6vh", width: "auto", marginRight: "10px"  }} alt="vaccinated" />
                  </Popover>
                </div>
              ) : null}

              {attributes.special_needs ? (
                <div> 
                  <Popover placement="topLeft" content={<p>Special Needs</p>} arrowPointAtCenter>
                    <img src={specialNeeds} style={{ height: "6vh", width: "auto" }} alt="special needs" />
                  </Popover>
                </div>
              ) : null}
            </div>

          </CardText>

          </PetCard>

        </div>

        <CostTabs />
      </div>
    );
  }
};

const PetCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 50%;
`;

export default DogProfile;