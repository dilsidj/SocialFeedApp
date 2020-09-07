import React, { Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Styles/TopNavigationBar.scss";


class TopNavigationBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             navBarFold:'yes',
             classname:'bars'
             
        }

        this.resizeCount = 0;
        

        this.toggleNavbar=this.toggleNavbar.bind(this);
        this.windowSize = this.windowSize.bind(this);
        
    }


   

    toggleNavbar(){
        this.setState({
            navBarFold:this.state.navBarFold === 'yes' ? 'no' : 'yes',
            classname:this.state.classname === 'bars hide' ? 'bars' : 'bars hide'
        },function(){ this.props.toFoldNavbar(this.state.navBarFold);})
    }




    windowSize(){

        window.addEventListener("resize",() => {
            if ( window.innerWidth > 790  &&  this.resizeCount === 1 && this.state.navBarFold === 'no')
            {
                this.toggleNavbar();
                this.resizeCount=0;
            }
        });

        if(window.innerWidth <= 790 && this.state.navBarFold === 'no'){
            this.resizeCount=1;
        }

        if(window.innerWidth <= 790 && this.state.navBarFold === 'yes'){
            this.resizeCount=0;
        }

        //  console.log(this.state.navBarFold,this.resizeCount );
        
    }

    
    
    
    render() {

      
        
        return (
            <div className="top-navbar">
            
                <div className="navbar-title">
                    <FontAwesomeIcon icon="arrow-left" className="arrow-left"/>
                    <p className="dashboard">Dashboard </p>
                    <FontAwesomeIcon icon="chevron-right" className="chevron-right"/>
                    <p className="social-feed">Social Feed</p>
                </div>
                
                {this.windowSize()}

                <div className="navbar-icons">
                    <button type="button" className="icon" onClick={this.toggleNavbar}>
                        <span className={this.state.navBarFold === "yes"?"icon-bar":"icon-bar active"}></span>
                        <span className={this.state.navBarFold === "yes"?"icon-bar":"icon-bar active"}></span>
                        <span className={this.state.navBarFold === "yes"?"icon-bar":"icon-bar active"}></span>
                    </button>
                </div>

            </div>
        )
    }
}

export default TopNavigationBar;