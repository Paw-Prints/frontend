import React, { Component } from 'react'
import { token } from "../token"

export default class DogProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: `${token}`,
            dogid: "",
        }
    }
    componentDidMount(){
        console.log("check this out!! ",((this.props.location.state||{}).generalbreeddata||{}));
        console.log("and this !! ",((this.props.location.state||{}).item||{}));
        let dogid =((this.props.match||{}).params||{}).dogid;
        console.log("CHECK OUT THE DOG ID",dogid);
        this.setState({
            dogid: dogid
        })
    }

    render() {
        
        return (
            <div>
                CHECK OUT THE DOG ID ${this.state.dogid}
            </div>
        )
    }
}
