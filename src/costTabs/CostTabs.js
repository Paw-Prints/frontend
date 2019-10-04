import React, { Component } from 'react';
import styled from 'styled-components';
import { Tabs, Switch, Icon } from 'antd';
const { TabPane } = Tabs;


export default class HomePage extends Component {
    constructor(props){
        super();
        this.state = {
            insurance: true,
            age: "Baby"
        }
    }

    tabChange = (key) => {
        console.log(key)
    }

    withInsurance = (toggle) => {
        if (toggle) {
            this.setState({ insurance: true })
        } else {
            this.setState({ insurance: false })
        }
    }

    render(){
        let monthlyTotal, monthlyMedical, annualTotal, annualMedical, lifetimeTotal, lifetimeMedical

        if (this.state.insurance) {

            monthlyTotal = costs.monthly.total.withInsurance
            monthlyMedical = costs.monthly.medical.withInsurance

            annualTotal = costs.annual.total.withInsurance
            annualMedical = costs.annual.medical.withInsurance

            lifetimeTotal = costs.lifetime[this.state.age].total.withInsurance
            lifetimeMedical = costs.lifetime[this.state.age].medical.withInsurance

        } else {

            monthlyTotal = costs.monthly.total.without
            monthlyMedical = costs.monthly.medical.without

            annualTotal = costs.annual.total.without
            annualMedical = costs.annual.medical.without
            
            lifetimeTotal = costs.lifetime[this.state.age].total.without
            lifetimeMedical = costs.lifetime[this.state.age].medical.without

        }

        return (
        <Tabs defaultActiveKey="1" onChange={this.tabChange}>
            <TabPane tab="Tab 1" key="1">
                <h4>{monthlyTotal} monthly costs:</h4>
                <br />

                <p><b>Food:</b> {costs.monthly.food}</p>
                <p><b>Grooming:</b> {costs.monthly.grooming}</p>


                <p><b>Will you have pet insurance?</b></p>
                <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked
                    onChange={this.withInsurance}
                />

                <p><b>Medical:</b> {monthlyMedical}</p>
                <p><b>Toys and Treats:</b> {costs.monthly.toysTreats} </p>
            </TabPane>

            <TabPane tab="Tab 2" key="2">
                <h4>{annualTotal} annual costs:</h4>
                <br />

                <p><b>Food:</b> {costs.annual.food}</p>
                <p><b>Grooming:</b> {costs.annual.grooming}</p>


                <p><b>Will you have pet insurance?</b></p>
                <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked
                    onChange={this.withInsurance}
                />

                <p><b>Medical:</b> {annualMedical}</p>
                <p><b>Toys and Treats:</b> {costs.annual.toysTreats} </p>
            </TabPane>

            <TabPane tab="Tab 3" key="3">
                <h4>{lifetimeTotal} lifetime costs:</h4>
                <br />

                <p><b>Food:</b> {costs.lifetime[this.state.age].food}</p>
                <p><b>Grooming:</b> {costs.lifetime[this.state.age].grooming}</p>


                <p><b>Will you have pet insurance?</b></p>
                <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked
                    onChange={this.withInsurance}
                />

                <p><b>Medical:</b> {lifetimeMedical}</p>
                <p><b>Toys and Treats:</b> {costs.lifetime[this.state.age].toysTreats} </p>
            </TabPane>
        </Tabs>)
    }
}

const costs = {
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
}
const pet = {
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
}