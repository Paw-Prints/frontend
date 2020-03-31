# Paw Prints

[Paw Prints](https://pawprints.netlify.com/) is a web application that helps potential dog adopters locate nearby dogs available for adoption and provides an estimated budget required to adopt. 

The American Humane Association found that [1 in 10 pets is no longer in their adoptive home just six months later](https://news.orvis.com/dogs/pet-adoption-statistics-the-numbers-behind-the-need), with one commonly cited reason for surrender being unexpected cost. 

Our goal is to inform potential adopters of the lifetime costs of dog ownership to reduce the rate of return. Our API provides monthly, annual and lifetime estimate costs based on dog breed as well as comparisons for average savings with pet insurance.

Paw Prints API was built with [Node.js](https://www.nodejs.org/en) with [Express](http://expressjs.com), integrating the [PetFinder API](https://www.petfinder.com/developers/).

<br>

## Team

|   [**Julie Jonak**](https://github.com/juliejonak)  |   [**Joseph Rios**](hhttps://github.com/orgs/Paw-Prints/people/josephriosIO)   |    [**Lesley Banadzem**](https://github.com/lesleyfon)    |   [**Tosha Kamath**](https://github.com/toshakamath)  |   [**Thomas Mak**](https://github.com/tomcoder132)  |
|:----------------:|:----------------:|:---------------:|:---------------:|:---------------:|
| [<img src="https://avatars0.githubusercontent.com/u/41002881?s=460&v=4" width="80">](https://github.com/juliejonak) | [<img src="https://avatars2.githubusercontent.com/u/43492172?s=400&v=4" width="80">](https://github.com/orgs/Paw-Prints/people/josephriosIO)  | [<img src="https://avatars2.githubusercontent.com/u/35934525?s=400&v=4" width="80">](https://github.com/lesleyfon) | [<img src="https://avatars3.githubusercontent.com/u/36335212?s=400&v=4" width="80">](https://github.com/toshakamath) | [<img src="https://avatars2.githubusercontent.com/u/10238000?s=460&v=4" width="80">](https://github.com/tomcoder132) 
| [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/juliejonak)  |  [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/orgs/Paw-Prints/people/josephriosIO) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/lesleyfon)  | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/toshakamath) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/tomcoder132)  
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/juliejonak/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/josephiosdev/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/lesley-banadzem-287418158/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/toshakamath/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/thomas-mak-pmp-22a4b657/) |

<br>

## Features

### Landing Page 

Intakes a user's ideal dog breed and location to return results. 

- Accepts either a 5 digit valid US zip code or City, State. 
- Includes error handling for invalid inputs and a loading spinner while the API data is fetched  
- Links to a dog breed quiz for users who don't know what dog would match their lifestyle

<br>

### Results Page

Returns a list of matching dogs that are nearby and available to adopt.

- Paginated feed of available to adopt dogs (sorted by distance from the user)
- Estimated annual cost of adopting that dog breed
- Photos and mini profiles of each dog, with icons to indicate if the pet is house trained, declawed, neutered/spayed, current vaccinations or has special needs.

<br>

### Individual Dog Profile

Clicking on a single dog's card takes the user to this individual profile page.

- Detailed description of the dog with photo, description, age, breed and icons to indicate if the pet is house trained, declawed, neutered/spayed, current vaccinations or has special needs.
- Estimated and detailed Monthly, Annual and Lifetime costs
- Insurance toggle to compare costs with and without pet insurance
- Link to the PetFinder listing
- Ability to directly email the shelter for more information

<br>

All of Paw Prints is optimized for mobile and desktop views.

<br>



## Tech Stack

For the frontend, our team used:

- React  
- React Router  
- Styled Components    
- [Ant Design](https://ant.design/)  
- Javascript  
- HTML/CSS  

<br>

[Our custom API](https://paw-prints.herokuapp.com/) was built with:

- [Node.js](https://www.nodejs.org/en)  
- [Express](http://expressjs.com)  
- [PetFinder's API](https://www.petfinder.com/developers/)  

More information about our API, including a detailed data model and source code, can be found [here](https://github.com/Paw-Prints/backend).

<br>
<br>

## Future Features

Our team would like to implement several features moving forward:

- Integrate Nationwide's Pet Insurance API for more accurate quotes and the ability to quick-start an application  
- Publish our custom API to RapidAPI to make this information more accessible  
- Expand the number of breeds and pets searchable  
- Include more information about each pet, including a photo gallery  

<br>
<br>

## To Use

After forking and cloning the project directory, you can locally run Paw Prints with:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
