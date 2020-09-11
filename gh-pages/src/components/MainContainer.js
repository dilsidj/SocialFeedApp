import React, { Component } from 'react';
import LeftNavigationBar from './LeftNavigationBar';
import Cards from './Cards';
import '../Styles/MainContainer.scss';



class MainContainer extends Component {
    

    constructor(props) {
        super(props)
    
        this.state = {
            userDetails:{
                name:'',
                role:'',
                image:''
            }
        }

    }

    updateUser(user){
        this.setState({
            userDetails:user
        })

    }


    
    
    render() {
        return (
            <div className="main-container">
                
                <LeftNavigationBar navBarFold={this.props.navBarFold} updateUser={this.updateUser.bind(this)}/>
                
                <Cards navBarFold={this.props.navBarFold} userDetails={this.state.userDetails}/>
                
            </div>
            
        )
    }
}

export default MainContainer;
