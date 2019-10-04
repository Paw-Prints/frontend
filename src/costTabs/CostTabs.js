import React, { Component } from 'react';
import styled from 'styled-components';
import { Tabs, Switch, Icon, Modal, Button } from 'antd';
const { TabPane } = Tabs;


export default class CostTabs extends Component {
    constructor(props){
        super();
        this.state = {
            insurance: true,
            age: "Baby",
            infoVisible: false
        }
    }

    componentDidMount = () => {
        if(this.props.age){
            this.setState({
                age: this.props.age
            })
        } else {
            this.setState({
                age: "Baby"
            })
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

    render(){
        const {monthly, annual, lifetime, healthIssues} = this.props.props;

        let monthlyTotal, monthlyMedical, annualTotal, annualMedical, lifetimeTotal, lifetimeMedical

        if (this.state.insurance) {

            monthlyTotal = monthly.total.withInsurance
            monthlyMedical = monthly.medical.withInsurance

            annualTotal = annual.total.withInsurance
            annualMedical = annual.medical.withInsurance

            lifetimeTotal = lifetime[this.state.age].total.withInsurance
            lifetimeMedical = lifetime[this.state.age].medical.withInsurance

        } else {

            monthlyTotal = monthly.total.without
            monthlyMedical = monthly.medical.without

            annualTotal = annual.total.without
            annualMedical = annual.medical.without

            lifetimeTotal = lifetime[this.state.age].total.without
            lifetimeMedical = lifetime[this.state.age].medical.without

        }

        return (
        <Tabs defaultActiveKey="1" onChange={this.tabChange} style={{maxWidth: "70%", minWidth: "400px", margin: "auto"}}>
            <TabPane tab="Monthly" key="1">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h2>{monthlyTotal} monthly costs:</h2>
                    <Icon type="question-circle" onClick={this.showInfoModal} style={{ fontSize: "18px", marginLeft: "10px"}} />

                    <Modal
                        title="How were these costs estimated?"
                        visible={this.state.infoVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="Close" type="primary" onClick={this.handleCancel}>
                              Close
                            </Button>
                        ]}
                    >
                        <p>We've calculated average nutritional, grooming and medical needs for each breed available on Paw Prints.</p>
                        <p>Using that information and the age of the pet, we can estimate lifetime costs.</p>
                        <p>For a detailed breakdown of the process, read more <a href="https://github.com/Paw-Prints/backend/blob/master/README.md" target="_blank" rel="noopener noreferrer">here</a></p>

                    </Modal>
                </div>
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
                    <p><b>Food:</b> {monthly.food}</p>
                    <p><b>Grooming:</b> {monthly.grooming}</p>
                </CostTraitsDiv>

                <CostTraitsDiv>
                    <p><b>Medical:</b> {monthlyMedical}</p>
                    <p><b>Toys and Treats:</b> {monthly.toysTreats} </p>
                </CostTraitsDiv>

            </TabPane>

            <TabPane tab="Annual" key="2">
                 <div style={{ display: "flex", justifyContent: "center" }}>
                    <h2>{annualTotal} annual costs:</h2>
                    <Icon type="question-circle" onClick={this.showInfoModal} style={{ fontSize: "18px", marginLeft: "10px"}} />
                </div>
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
                    <p><b>Food:</b> {annual.food}</p>
                    <p><b>Grooming:</b> {annual.grooming}</p>
                </CostTraitsDiv>

                <CostTraitsDiv>
                    <p><b>Medical:</b> {annualMedical}</p>
                    <p><b>Toys and Treats:</b> {annual.toysTreats} </p>
                </CostTraitsDiv>

            </TabPane>

            <TabPane tab="Lifetime" key="3">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h2>{lifetimeTotal} lifetime costs:</h2>
                    <Icon type="question-circle" onClick={this.showInfoModal} style={{ fontSize: "18px", marginLeft: "10px"}} />
                </div>
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
                    <p><b>Food:</b> {lifetime[this.state.age].food}</p>
                    <p><b>Grooming:</b> {lifetime[this.state.age].grooming}</p>
                </CostTraitsLifetimeDiv>

                <CostTraitsDiv>
                    <p><b>Toys and Treats:</b> {lifetime[this.state.age].toysTreats} </p>
                    <p><b>Miscellaneous:</b> {lifetime[this.state.age].miscellaneous} </p>
                </CostTraitsDiv>

                <p><b>Medical:</b> {lifetimeMedical}</p>

                <p><b>Breed Health:</b> {healthIssues}</p>
                
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