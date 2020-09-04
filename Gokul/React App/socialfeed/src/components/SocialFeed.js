import React, {Component} from 'react';
import Header from './Header';
import MainContent from './MainContent';


class socialFeed extends Component{
    
    render(){
        return(
            <div className="allContent">
                <Header/>
                <MainContent/>

                
            </div>
        )
    }
}

export default socialFeed;