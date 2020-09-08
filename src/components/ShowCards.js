import React from 'react';
import '../Styles/ShowCards.scss';
import Time from './Time.js';

function ShowCards(props) {


    const items=props.items;

    const listItems = items.map((item,key) =>
        {
            return <div  className="show-card" key={key}>

                        <div className="top-show-card">

                            <div className="show-card-image">
                                <img  src={item.image}  alt="show-card-user" />
                            </div>

                            <div className="show-card-user-details">
                                <h2 className="user-name">{item.name}</h2>
                                <p className="user-role">{item.role}</p>
                                <p className="user-time"><Time time={item.time} /></p>
                            </div>

                            <div className="show-card-share">
                                <p className="share">...</p>
                            </div>

                        </div>
                        <div className="bottom-show-card">

                            <p className="show-card-content" >
                                {item.text}
                            </p>

                        </div>
                        
                    </div>

        })

    return (
        <div className="">
            {listItems}
        </div>
    )
}

export default ShowCards;
