import React, { Component } from 'react'
import LeftMenu from './LeftMenu'
import Content from './Content'

class MainContent extends Component {
    render() {
        return (
            
            <div className="main">
                <LeftMenu/>
                <Content/>
            </div>
        )
    }
}


export default MainContent;