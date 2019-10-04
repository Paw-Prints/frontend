import React from "react";
import Header from "../Components /Header/Header";
import declawed from "../Images/Attributes/declawed.png";
import houseTrained from "../Images/Attributes/houseTrained.png";
import vaccinated from "../Images/Attributes/vaccination-color.png";
import neutered from "../Images/Attributes/neutered.png";
import specialNeeds from "../Images/Attributes/special_need_color.png";
import styled from 'styled-components';
import { Popover, Button, Row, Col } from 'antd';
import CostTabs from '../costTabs/CostTabs';


class DogProfile extends React.Component {
  state = { contactVisible: false, infoVisible: false };

  showContactModal = () => {
    this.setState({
      contactVisible: true,
    });
  };

  showInfoModal = () => {
    this.setState({
      infoVisible: true,
    });
  };

  handleOk = e => {
    this.setState({
      contactVisible: false,
      infoVisible: false
    });
  };

  handleCancel = e => {
    this.setState({
      contactVisible: false,
      infoVisible: false
    });
  };

  goBack = (e) => {
    console.log(e)
    e.preventDefault();
    this.props.history.goBack();
}

  render() {
    const { pet, generalbreeddata } = this.props.location.state;
    const { images, name, description, breeds, attributes, contact, age, listingLink } = pet;
    const subject = `Is ${name} available to adopt?`
    const body = `Hello! \n I am interested in possibly adopting ${name}, your available ${breeds.primary} listed on Petfinder. \n Do you have any more information about next steps? \n Thank you!`

    console.log(pet)

    return (
      <div>

      <Header />

        <Row type="flex" >
          <Col style={{marginTop: "80px", marginLeft: "3%"}}>

          <Button onClick={this.goBack} type="default">Back</Button>

          </Col>

        
        <Col >
        <div
          style={{ margin: "auto", width: "70%", minWidth: "400px", display: "flex", marginTop: "40px", maxHeight: "50vh", justifyContent: "center", paddingTop: "5%", marginBottom: "6%" }}
        >

          <PetCard>
            <img src={images[0].medium} alt="dog" style={{ height: "30vh", width: "auto", marginRight: "15px"}} />

            <CardText style={{marginTop: "-2%"}}>
              <h1>{name}</h1>

              <p style={{ textAlign: "left" }}><b>Description:</b> {description}</p>
              <p><b>Age:</b> {age}</p>
              <p><b>Breed:</b> {breeds.primary} </p>


            <div style={{ marginTop: "5%", display: "flex" }}>
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
        </Col>
        </Row>

        <CostTabs props={generalbreeddata} age={age} />

        <ButtonBox>          
          <Button href={`${listingLink}`} target="_blank">See {name}'s PetFinder Listing</Button>
          <Button type="primary" href={`mailto:${contact.email}?subject=${subject}&body=${body}`} target="_blank">
            Email Shelter to Adopt
          </Button>
        </ButtonBox>

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

const ButtonBox = styled.div`
  display: flex;
  justify-items: center;
  width: 50%;
  margin: auto;
  justify-content: space-evenly;
  margin-bottom: 3%;
  margin-top: 4%;

  @media (max-width: 780px) {
    flex-direction: column;
    width: 60%;
    align-items: center;
    height: 20vh;
    min-width: 400px;
}`;

const BackButton = styled.div`
  position: absolute;
  z-index: 6;
  margin-left: 3%;
  margin-top: 2%;
`;

export default DogProfile;