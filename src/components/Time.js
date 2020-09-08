import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             time:this.props.time,
             timeDiff:moment(this.props.time).fromNow()
        }
        
    }

    componentDidMount(){
        this.intervalID =  setInterval(() =>{
            this.setState({timeDiff:moment(this.props.time).fromNow()});
        },1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <>
                {this.state.timeDiff}
            </>
        )
    }
}

export default Time;
