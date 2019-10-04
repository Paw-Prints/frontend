import React, { Component } from 'react';
import styled from 'styled-components';
import { Tabs, Switch, Icon } from 'antd';

const { TabPane } = Tabs;

const age = "Senior"

export default class HomePage extends Component {

    tabChange = (key) => {
        console.log(key)
    }

    withInsurance = (toggle) => {
        if(toggle){
            // Change to with insurance prices
            console.log("Yes, insurance")
        } else {
            // Change to without
            console.log("No insurance")
        }
    }

    render(){
        return(
        <Tabs defaultActiveKey="1" onChange={this.tabChange}>
            <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
                <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked
                    onChange={this.withInsurance}
                />
            </TabPane>
            <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>)
    }
}

const responseObj = {
    "costs": {
        "monthly": {
            "food": "$24.64",
            "grooming": "$26.50",
            "toysTreats": "$4.58",
            "medical": {
                "withInsurance": "$67.82",
                "without": "$103.70"
            },
            "total": {
                "withInsurance": "$123.54",
                "without": "$159.42"
            }
        },
        "annual": {
            "food": "$299.76",
            "grooming": "$318.00",
            "toysTreats": "$55.00",
            "medical": {
                "withInsurance": "$254.48",
                "without": "$1037.00"
            },
            "total": {
                "withInsurance": "$927.24",
                "without": "$1,709.76"
            }
        },
        "lifetime": {
            "Baby": {
                "total": {
                    "withInsurance": "$25,235.38",
                    "without": "$46,363.42"
                },
                "food": "$8,093.42",
                "grooming": "$8,586.00",
                "toysTreats": "$1,485.00",
                "medical": {
                    "withInsurance": "$3,254.48",
                    "without": "$30,999.00"
                },
                "miscellaneous": "$1,215.00"
            },
            "Young": {
                "total": {
                    "withInsurance": "$18,776.53",
                    "without": "$34,622.56"
                },
                "food": "$6,070.06",
                "grooming": "$6,439.50",
                "toysTreats": "$1,113.75",
                "medical": {
                    "withInsurance": "$2,440.86",
                    "without": "$23,249.25"
                },
                "miscellaneous": "$911.25"
            },
            "Adult": {
                "total": {
                    "withInsurance": "$12,517.69",
                    "without": "$23,081.71"
                },
                "food": "$4,046.71",
                "grooming": "$4,293.00",
                "toysTreats": "$742.50",
                "medical": {
                    "withInsurance": "$1,627.24",
                    "without": "$15,499.50"
                },
                "miscellaneous": "$607.50"
            },
            "Senior": {
                "total": {
                    "withInsurance": "$6,258.84",
                    "without": "$11,540.85"
                },
                "food": "$2,023.35",
                "grooming": "$2,146.50",
                "toysTreats": "$371.25",
                "medical": {
                    "withInsurance": "$813.62",
                    "without": "$7,749.75"
                },
                "miscellaneous": "$303.75"
            }
        },
        "healthIssues": "Beagles are generally a healthy breed. The most common health issue is cherry eye, about $300-$500 to treat surgically."
    },
    "pets": [
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/1/?bust=1491327363&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/1/?bust=1491327363&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/1/?bust=1491327363&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/1/?bust=1491327363"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/2/?bust=1491327363&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/2/?bust=1491327363&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/2/?bust=1491327363&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/2/?bust=1491327363"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/3/?bust=1491327363&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/3/?bust=1491327363&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/3/?bust=1491327363&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/9390465/3/?bust=1491327363"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/libby-9390465/tx/houston/happily-ever-after-dog-rescue-tx1005/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": "Divorce is a really yucky thing since it has landed me back into a foster home after having been adopted...",
            "id": 9390465,
            "age": "Senior",
            "name": "Libby",
            "contact": {
                "email": "happilyeverafter4dogs@yahoo.com",
                "phone": "  ",
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Houston",
                    "state": "TX",
                    "postcode": "77062",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "distance": 2.1373,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": null,
                "special_needs": true,
                "shots_current": true
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45428421/1/?bust=1569952929&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45428421/1/?bust=1569952929&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45428421/1/?bust=1569952929&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45428421/1/?bust=1569952929"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/honey-45428421/tx/pasadena/pasadena-animal-shelter-and-pet-adoption-center-tx173/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 45428421,
            "age": "Young",
            "name": "HONEY",
            "contact": {
                "email": "adoptions@ci.pasadena.tx.us",
                "phone": "(281) 991-0602",
                "address": {
                    "address1": "5150 Burke",
                    "address2": null,
                    "city": "Pasadena",
                    "state": "TX",
                    "postcode": "77504",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": "Mixed Breed",
                "mixed": true,
                "unknown": false
            },
            "distance": 5.6785,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": false
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45726853/1/?bust=1569952884&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45726853/1/?bust=1569952884&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45726853/1/?bust=1569952884&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45726853/1/?bust=1569952884"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/manny-45726853/tx/pasadena/pasadena-animal-shelter-and-pet-adoption-center-tx173/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 45726853,
            "age": "Young",
            "name": "MANNY",
            "contact": {
                "email": "adoptions@ci.pasadena.tx.us",
                "phone": "(281) 991-0602",
                "address": {
                    "address1": "5150 Burke",
                    "address2": null,
                    "city": "Pasadena",
                    "state": "TX",
                    "postcode": "77504",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Labrador Retriever",
                "secondary": "Beagle",
                "mixed": true,
                "unknown": false
            },
            "distance": 5.6785,
            "attributes": {
                "spayed_neutered": false,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": false
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45787281/1/?bust=1570140284&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45787281/1/?bust=1570140284&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45787281/1/?bust=1570140284&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45787281/1/?bust=1570140284"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/miss-mandie-45787281/tx/pasadena/pasadena-animal-shelter-and-pet-adoption-center-tx173/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 45787281,
            "age": "Adult",
            "name": "MISS MANDIE",
            "contact": {
                "email": "adoptions@ci.pasadena.tx.us",
                "phone": "(281) 991-0602",
                "address": {
                    "address1": "5150 Burke",
                    "address2": null,
                    "city": "Pasadena",
                    "state": "TX",
                    "postcode": "77504",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": "Boston Terrier",
                "mixed": true,
                "unknown": false
            },
            "distance": 5.6785,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": false
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/1/?bust=1561927112&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/1/?bust=1561927112&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/1/?bust=1561927112&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/1/?bust=1561927112"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/2/?bust=1561927112&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/2/?bust=1561927112&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/2/?bust=1561927112&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/2/?bust=1561927112"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/3/?bust=1561927113&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/3/?bust=1561927113&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/3/?bust=1561927113&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/3/?bust=1561927113"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/4/?bust=1561927113&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/4/?bust=1561927113&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/4/?bust=1561927113&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907142/4/?bust=1561927113"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/markie-44907142/tx/san-leon/bay-area-pet-adoptions-spca-tx128/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 44907142,
            "age": "Baby",
            "name": "Markie",
            "contact": {
                "email": "Info@BayAreaPetAdoptions.org",
                "phone": "281-339-2086 ",
                "address": {
                    "address1": "3000 Avenue R",
                    "address2": null,
                    "city": "San Leon",
                    "state": "TX",
                    "postcode": "77565",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "distance": 6.6207,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/1/?bust=1561927017&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/1/?bust=1561927017&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/1/?bust=1561927017&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/1/?bust=1561927017"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/2/?bust=1561927018&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/2/?bust=1561927018&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/2/?bust=1561927018&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44907170/2/?bust=1561927018"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/mack-44907170/tx/san-leon/bay-area-pet-adoptions-spca-tx128/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 44907170,
            "age": "Baby",
            "name": "Mack",
            "contact": {
                "email": "Info@BayAreaPetAdoptions.org",
                "phone": "281-339-2086 ",
                "address": {
                    "address1": "3000 Avenue R",
                    "address2": null,
                    "city": "San Leon",
                    "state": "TX",
                    "postcode": "77565",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": "Mixed Breed",
                "mixed": true,
                "unknown": false
            },
            "distance": 6.6207,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45797613/1/?bust=1568562409&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45797613/1/?bust=1568562409&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45797613/1/?bust=1568562409&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45797613/1/?bust=1568562409"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/atom-45797613/tx/san-leon/bay-area-pet-adoptions-spca-tx128/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 45797613,
            "age": "Baby",
            "name": "Atom",
            "contact": {
                "email": "Info@BayAreaPetAdoptions.org",
                "phone": "281-339-2086 ",
                "address": {
                    "address1": "3000 Avenue R",
                    "address2": null,
                    "city": "San Leon",
                    "state": "TX",
                    "postcode": "77565",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": "Mixed Breed",
                "mixed": true,
                "unknown": false
            },
            "distance": 6.6207,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/1/?bust=1567356499&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/1/?bust=1567356499&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/1/?bust=1567356499&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/1/?bust=1567356499"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/2/?bust=1567356500&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/2/?bust=1567356500&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/2/?bust=1567356500&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/2/?bust=1567356500"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/3/?bust=1567356500&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/3/?bust=1567356500&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/3/?bust=1567356500&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/3/?bust=1567356500"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/4/?bust=1567356501&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/4/?bust=1567356501&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/4/?bust=1567356501&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45796933/4/?bust=1567356501"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/daisy-45796933/tx/san-leon/bay-area-pet-adoptions-spca-tx128/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": null,
            "id": 45796933,
            "age": "Adult",
            "name": "Daisy",
            "contact": {
                "email": "Info@BayAreaPetAdoptions.org",
                "phone": "281-339-2086 ",
                "address": {
                    "address1": "3000 Avenue R",
                    "address2": null,
                    "city": "San Leon",
                    "state": "TX",
                    "postcode": "77565",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "distance": 6.6207,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        },
        {
            "images": [],
            "listingLink": "https://www.petfinder.com/dog/brandi-46112520/tx/san-leon/bay-area-pet-adoptions-spca-tx128/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": "www.BayAreaPetAdoptions.org",
            "id": 46112520,
            "age": "Baby",
            "name": "Brandi",
            "contact": {
                "email": "Info@BayAreaPetAdoptions.org",
                "phone": "281-339-2086 ",
                "address": {
                    "address1": "3000 Avenue R",
                    "address2": null,
                    "city": "San Leon",
                    "state": "TX",
                    "postcode": "77565",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "distance": 6.6207,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        },
        {
            "images": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/1/?bust=1569452778&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/1/?bust=1569452778&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/1/?bust=1569452778&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/1/?bust=1569452778"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/2/?bust=1569452779&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/2/?bust=1569452779&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/2/?bust=1569452779&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/2/?bust=1569452779"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/3/?bust=1569452779&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/3/?bust=1569452779&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/3/?bust=1569452779&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43884877/3/?bust=1569452779"
                }
            ],
            "listingLink": "https://www.petfinder.com/dog/roxy-43884877/tx/pearland/the-forgotten-pet-advocates-tx1682/?referrer_id=11ff9278-66c5-4f6f-be13-c666610f09e4",
            "description": "Houston, TX area: SENIOR &amp;#34;ROXY&amp;#34; is over 10 YEARS OLD. She in a kennel waiting for a HOME or FOSTER!...",
            "id": 43884877,
            "age": "Senior",
            "name": "Roxy",
            "contact": {
                "email": "forgottenpetadvocates@yahoo.com",
                "phone": null,
                "address": {
                    "address1": "P.O. Box 3037",
                    "address2": null,
                    "city": "Pearland",
                    "state": "TX",
                    "postcode": "77588",
                    "country": "US"
                }
            },
            "breeds": {
                "primary": "Beagle",
                "secondary": "Yellow Labrador Retriever",
                "mixed": true,
                "unknown": false
            },
            "distance": 10.6253,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            }
        }
    ]
}