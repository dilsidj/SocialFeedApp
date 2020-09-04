import React,{Component} from 'react';
import { HiArrowLeft, FiChevronRight, AiOutlineMenu } from "react-icons/all";


class Header extends Component{

    constructor(props){
        super(props);
        this.openMenu=this.openMenu.bind(this);
    }

    state={
        menuDisplay:"0px",
    }
    
    openMenu=()=>{
        if (this.state.menuDisplay==="250px"){
            
            document.getElementsByClassName("leftMenu")[0].style.width="0px";
            this.setState({menuDisplay:"0px"});
        }
        else if(this.state.menuDisplay==="0px"){
            
            document.getElementsByClassName("leftMenu")[0].style.width="250px";
            this.setState({menuDisplay:"250px"});
        }
        
    }
    

    
    render(){
        
        return(
            <div className="header">
                <spam className="backwardIcon">
                    <HiArrowLeft fontSize="25px"/>
                    
                </spam>
                <div className="filepath">
                    <p>Dashboard</p>
                    <FiChevronRight className="cheronRightIcon"/>
                    
                    <p>Social Feed</p>
                </div>
                
                <button className="mobileViewMenu" onClick={this.openMenu}><AiOutlineMenu/> </button>
            </div>
        )
    }
}



export default Header;


