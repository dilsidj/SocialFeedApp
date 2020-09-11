import React, { Component } from 'react';
import '../Styles/ShowCards.scss';
import Time from './Time.js';

class ShowCards extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            textEdit:!(this.props.addingCard),
            changedText:"",
            key:"",
            rows: 4,
			minRows: 1,
			maxRows: 4

        }

        this.handleTextEdit=this.handleTextEdit.bind(this);
        this.toggleCards = this.toggleCards.bind(this);
        
    }
    

    handleTextEdit(e) {
        var newText = e.target.value;

        const textareaLineHeight = 20;
		const { minRows, maxRows } = this.state;
		
		const previousRows = e.target.rows;
  	    e.target.rows = minRows; 
		
		const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }
		
        if (currentRows >= maxRows) {
            e.target.rows = maxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }
          
        this.setState({changedText:newText,rows: currentRows < maxRows ? currentRows : maxRows,})
    }


    toggleCards (key,text){

        if(key === "" || this.state.key === key)
        this.setState({
                            textEdit: this.state.textEdit === true ? false : true,
                            key:key,
                            changedText:text
                        })
        else 
            this.setState({
                textEdit: true,
                key:key,
                changedText:text
            })

    }

    
    onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          this.setState({ textEdit:false })
          this.props.updateEditedText(this.state.key,this.state.changedText);  
        }
      }


    

    
    

    render() {

    const items=this.props.items;
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

                                <div className="show-card-alter">
                                    <button className="show-card-delete" 
                                        onClick={ () => this.props.deleteItem(item.time)}>
                                        Delete
                                    </button>
                                    <button className="show-card-edit"  
                                        onClick={() => this.toggleCards(key,item.text)}>
                                        {(this.state.textEdit && this.state.key === key)? "cancel" : "Edit"}
                                    </button>
                                </div>
                                
                            </div>

                        </div>
                        

                        <div className="bottom-show-card">
                            <p  className={(this.state.textEdit === true && this.state.key === key)?
                                   "show-card-content"  : "show-card-content active" }>
                                {item.text}
                            </p>

                            <textarea type="text"
                                className={(this.state.textEdit === true && this.state.key === key)?
                                    "show-card-edit-content active"  : "show-card-edit-content" }
                                rows={this.state.rows}
                                value={this.state.changedText} 
                                onKeyDown={this.onEnterPress}
                                onChange={this.handleTextEdit}
                            />
                        </div>
                        
                    </div>

        })

    return (
        <div className="">
            {listItems}
        </div>
    )
    }
}



export default ShowCards;
