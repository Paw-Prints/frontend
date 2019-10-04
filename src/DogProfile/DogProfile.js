import React from "react";
import Header from "../Components /Header/Header";
import declawed from "../Images/Attributes/declawed.png";
import houseTrained from "../Images/Attributes/houseTrained.png";
import vaccinated from "../Images/Attributes/vaccination-color.png";
import neutered from "../Images/Attributes/neutered.png";
import speicalNeeds from "../Images/Attributes/special_need_color.png";

class DogProfile extends React.Component {
  state = {};

  render() {
    const { pet, generalbreeddata } = this.props.location.state;
    const { images, name, description, breeds, attributes, contact, age } = pet;
    console.log(pet, generalbreeddata);

    return (
      <div>
        <Header />
        <div>
          <img src={images[0].medium} />
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div>
          {attributes.declawed ? <img src={declawed} /> : null}
          {attributes.house_trained ? <img src={houseTrained} /> : null}
          {attributes.shots_current ? <img src={vaccinated} /> : null}
          {attributes.spayed_neutered ? <img src={neutered} /> : null}
          {attributes.special_needs ? <img src={speicalNeeds} /> : null}
        </div>
      </div>
    );
  }
}

export default DogProfile;
