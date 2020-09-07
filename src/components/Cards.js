import React, { Component } from 'react';
import '../Styles/Cards.scss';
import ShowCards from './ShowCards';
import userImage from '../image/girl-user.jpg';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CameraEnhanceOutlinedIcon from '@material-ui/icons/CameraEnhanceOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';



class Cards extends Component {


  constructor(props) {
    super(props)
    
    this.submitRef = React.createRef();

    this.state = {

       items:[
              {
                name:'Oslo',
                role:'Marketing Expert',
                image: userImage,
                text:"Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l...",
                time:Date.now()
              },
              {
                name:'Oslo',
                role:'Marketing Expert',
                image: userImage,
                text:"Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l...",
                time:Date.now()
              }
            ],

       currentItem:{
        name:'',
        role:'',
        image: '',
        text:'',
        key:'',
        time:''
       },
       rows: 1,
			 minRows: 1,
			 maxRows: 4,

    }


    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }



  
  
    handleInput(e){



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
    
  	  this.setState({
    	  value: e.target.value,
        rows: currentRows < maxRows ? currentRows : maxRows,
    });



      this.setState({
        currentItem:{
          name:this.props.userDetails.name,
          role:this.props.userDetails.role,
          image:this.props.userDetails.image,
          text:e.target.value,
          time:Date.now()
        }
      })
    }

    addItem(e){
      const newItem= this.state.currentItem;
      // console.log(newItem);
      if(newItem.text!==""){
        const newitems=[newItem,...this.state.items];
        this.setState({
          items:newitems,
          currentItem:{
            text:'',
            key:'',
            time:''
          },
          rows:1,
          maxRows:4,
          minRows:1
        })
      }
      
    }


     

    onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        this.addItem();
      }
    }

    

    render() {
        return (

            <div className="cards">
              <div className={this.props.navBarFold === "yes" ? "overlay":"overlay active"} ></div>
              <div className="wrapper">
                <div className="fill-card">
                  <div className="top-fill-card">
                    <img alt="use" src={this.props.userDetails.image} className="fill-card-image" />
                    
                    <form id="" onSubmit={this.addItem} ref={this.submitRef}>
                       <textarea type="text" rows={this.state.rows}  
                            placeholder="share something here ...."  
                            className="fill-card-box"
                            value={this.state.currentItem.text} 
                            onKeyDown={this.onEnterPress}
                            onChange={this.handleInput} />
                    </form>
                  </div>

                  <div className="bottom-fill-card">

                    <div className="fill-card-media">
                      <i className="media-icon">
                        <VideocamOutlinedIcon/>
                      </i>
                      <p className="media-title">Any attachment</p>
                    </div>

                    <div className="fill-card-media">
                      <i className="media-icon">
                        <CameraEnhanceOutlinedIcon />
                      </i>
                      <p className="media-title">capture it</p>
                    </div>
                    
                    <div className="fill-card-media">
                      <i className="media-icon">
                        <MicNoneOutlinedIcon />
                      </i>
                      <p className="media-title">say it</p>
                    </div>

                  </div>
                </div>


                
                <ShowCards items ={this.state.items}/>


              </div>
            </div>
        )
    }
}

export default Cards;
