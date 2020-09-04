import React, { Component } from 'react';
import { BsThreeDots } from "react-icons/all";

class MessageBlock extends Component {
    render() {
        const {imgsource, messagerName, role, messagedTime, messageContent}=this.props;
        return (

            <div className="messageBlock">
                <div className="messagerDetails">
                    
                    <img src={ imgsource } alt="pro" />
                    <div className="messagerProfile">
                        <p className="messagerName">{ messagerName }</p>
                        <p className="role">{ role }</p>
                        <p className="messagedTime">{ messagedTime }</p>
                    </div>
                    <spam className="messageBlockOption"><BsThreeDots /></spam>
                </div>
                <div className="messageContent">
                    <p>{ messageContent }</p>
                </div>
            </div>
        )
    }
}

export default MessageBlock
