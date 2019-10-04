import React from "react";
import Header from "../Components /Header/Header";
import declawed from "../Images/Attributes/declawed.png";
import houseTrained from "../Images/Attributes/houseTrained.png";
import vaccinated from "../Images/Attributes/vaccination-color.png";
import neutered from "../Images/Attributes/neutered.png";
import specialNeeds from "../Images/Attributes/special_need_color.png";
import styled from 'styled-components';
import { Popover, Modal, Button, Icon } from 'antd';
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
    console.log(e);
    this.setState({
      contactVisible: false,
      infoVisible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      contactVisible: false,
      infoVisible: false
    });
  };

  render() {
    const { pet, generalbreeddata } = this.props.location.state;
    const { images, name, description, breeds, attributes, contact, age, listingLink } = pet;
    const subject = `Is ${name} available to adopt?`
    const body = `Hello! \n I am interested in possibly adopting ${name}, your available ${breeds.primary} listed on Petfinder. \n Do you have any more information about next steps? \n Thank you!`

    console.log(pet)

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

        <CostTabs props={generalbreeddata} age={age} />

        <div style={{ marginTop: "3%"}}>          

          <Button onClick={this.showContactModal} type="primary">Learn More About {name}</Button>

          <Modal
            visible={this.state.contactVisible}
            onOk={this.handleOk}
            footer={[
              <Button key="Close" type="primary" onClick={this.handleCancel}>
                Close
              </Button>
            ]}
            >
            <Button href={`${listingLink}`} target="_blank">See PetFinder Listing</Button>
            <Button type="ghost" href={`mailto:${contact.email}?subject=${subject}&body=${body}`} target="_blank">Email Shelter</Button>
          </Modal>
        </div>

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