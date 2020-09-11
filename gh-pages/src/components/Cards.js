import React, { Component } from 'react';
import '../Styles/Cards.scss';
import ShowCards from './ShowCards';
import userImage from '../image/girl-user.jpg';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CameraEnhanceOutlinedIcon from '@material-ui/icons/CameraEnhanceOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
// import JSON_items from '../api/items.json';


class Cards extends Component {


  constructor(props) {
    super(props)
    
    this.submitRef = React.createRef();

    this.state = {

       dummyItems:[
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
                time:Date.now() + 1 
              }
            ],
       items:[],
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
       addingCard:false
    }

    


    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.updateEditedText = this.updateEditedText.bind(this);
  }



  componentDidMount(){

    console.log(localStorage.getItem("items") === "null" + localStorage.getItem("items") === "[]");

    if(localStorage.getItem("items") === "null" || localStorage.getItem("items") === "[]")
      localStorage.setItem("items",JSON.stringify(this.state.dummyItems));
    
    this.setState({
       items:JSON.parse(localStorage.getItem("items"))
    });

    
 
  }

  componentDidUpdate(){
    
      localStorage.setItem("items",JSON.stringify(this.state.items));
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
        currentItem:{
          name:this.props.userDetails.name,
          role:this.props.userDetails.role,
          image:this.props.userDetails.image,
          text:e.target.value,
          time:Date.now()
        },
        addingCard:true
      });
      
      this.refs.child.toggleCards();

    }



    addItem(e){
      const newItem= this.state.currentItem;
    
      const json_items = JSON.parse(localStorage.getItem("items"));
      
      if(newItem.text!==""){
        const newitems=[newItem,...json_items];
        
        localStorage.setItem("items",JSON.stringify(newitems));

        this.setState({
          items:JSON.parse(localStorage.getItem("items")),
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



    deleteItem(key){
      const remainingItems = this.state.items.filter(item => item.time !== key);
      this.setState({items : remainingItems})
      
      console.log("deleted" + remainingItems);

    }


    updateEditedText(key,text){

      const newItems = this.state.items.map((item,index) =>
          {
              if(key === index) item.text = text;

              return item;
          }
      )

      this.setState({items:newItems})


    }


    

    render() {
        return (

            <div className="cards">
              <div className={this.props.navBarFold === "yes" ? "overlay":"overlay active"} ></div>
              <div className="wrapper">
                <div className="fill-card">
                  <div className="top-fill-card">
                    <img alt="use" src={this.props.userDetails.image} className="fill-card-image" />
                    
                    <form id="" onSubmit={this.addItem} >
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


                
                <ShowCards  items ={this.state.items} 
                            ref="child"
                            deleteItem={this.deleteItem}  
                            updateEditedText ={ this.updateEditedText}
                            addingCard = {this.state.addingCard}
                />


              </div>
            </div>
        )
    }
}

export default Cards;
