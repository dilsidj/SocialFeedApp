import React, { Component } from 'react'


   
class MenuItem extends Component {
    render() {
        const { icon, menuItemName, notification }=this.props
        return (
            <div className="menuItem">
                <div className="menuTitle">
                    { icon }
                    <p>{ menuItemName }</p>
                </div>
                <p className="notification">{ notification }</p>
            </div>
        )
    }
}

export default MenuItem;