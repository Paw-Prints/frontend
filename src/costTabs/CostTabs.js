import React, { Component } from 'react';
import styled from 'styled-components';
import { Tabs, Switch, Icon } from 'antd';
const { TabPane } = Tabs;


export default class CostTabs extends Component {
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
        <Tabs defaultActiveKey="1" onChange={this.tabChange} style={{maxWidth: "70%", minWidth: "400px", margin: "auto"}}>
            <TabPane tab="Monthly" key="1">
                <h2>{monthlyTotal} monthly costs:</h2>
                <br />

                <InsuranceSwitchDiv>
                    <p><b>Will you have pet insurance?</b></p>
                    <Switch
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                        onChange={this.withInsurance}
                    />
                </InsuranceSwitchDiv>

                <CostTraitsDiv>
                    <p><b>Food:</b> {costs.monthly.food}</p>
                    <p><b>Grooming:</b> {costs.monthly.grooming}</p>
                </CostTraitsDiv>

                <CostTraitsDiv>
                    <p><b>Medical:</b> {monthlyMedical}</p>
                    <p><b>Toys and Treats:</b> {costs.monthly.toysTreats} </p>
                </CostTraitsDiv>

            </TabPane>

            <TabPane tab="Annual" key="2">
                <h2>{annualTotal} annual costs:</h2>
                <br />

                <InsuranceSwitchDiv>
                    <p><b>Will you have pet insurance?</b></p>
                    <Switch
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                        onChange={this.withInsurance}
                    />
                </InsuranceSwitchDiv>

                <CostTraitsDiv>
                    <p><b>Food:</b> {costs.annual.food}</p>
                    <p><b>Grooming:</b> {costs.annual.grooming}</p>
                </CostTraitsDiv>

                <CostTraitsDiv>
                    <p><b>Medical:</b> {annualMedical}</p>
                    <p><b>Toys and Treats:</b> {costs.annual.toysTreats} </p>
                </CostTraitsDiv>

            </TabPane>

            <TabPane tab="Lifetime" key="3">
                <h2>{lifetimeTotal} lifetime costs:</h2>
                <br />

                <InsuranceSwitchDiv>
                    <p><b>Will you have pet insurance?</b></p>
                    <Switch
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                        onChange={this.withInsurance}
                    />
                </InsuranceSwitchDiv>

                <CostTraitsLifetimeDiv>
                    <p><b>Food:</b> {costs.lifetime[this.state.age].food}</p>
                    <p><b>Grooming:</b> {costs.lifetime[this.state.age].grooming}</p>
                </CostTraitsLifetimeDiv>

                <CostTraitsDiv>
                    <p><b>Toys and Treats:</b> {costs.lifetime[this.state.age].toysTreats} </p>
                    <p><b>Miscellaneous:</b> {costs.lifetime[this.state.age].miscellaneous} </p>
                </CostTraitsDiv>

                <p><b>Medical:</b> {lifetimeMedical}</p>

                <p><b>Breed Health:</b> {costs.healthIssues}</p>
                
            </TabPane>
        </Tabs>)
    }
};


const CostTraitsDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CostTraitsLifetimeDiv = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const InsuranceSwitchDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto;
    width: 60%;
    margin-bottom: 5%;

    @media (max-width: 780px) {
        width: 80%;
    }

`;

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