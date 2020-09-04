import React, { Component } from 'react';
import { AiOutlineVideoCamera,AiOutlineCamera, BiMicrophone } from "react-icons/all";
import MessageBlock from './MessageBlock';
// import { jsonData } from "../../public/api/messageCards.json";

class Content extends Component {

    state = {
            loading: true,
            dataSource:[] 
        };
            
    myprofile='../assets/images/profile1.jpg';
    componentDidMount(){
        var url="http://localhost:3000/api/messageCards.json";
        
        fetch(url)
            .then(response=>{
                return response.json()
            })
            .then((data)=>{
                this.setState({
                    loading:false,
                    dataSource:data
                })
                console.log("data",this.state.dataSource);
            })
            .catch(err=>console.log(err))
    }


    render() {
        var data=this.state.dataSource;
        var message=[];
        
        data.map((card)=>{
            var messagedDate=new Date(card["messagedTime"]);
            var todayDate=new Date();
            var timeDiff=todayDate.getTime()-messagedDate.getTime();
            var dateDiff=Math.trunc(timeDiff/(1000*3600*24)).toString()+'d';          

            message.push(
                <MessageBlock 
                    imgsource={card["image"]}
                    messagerName={card["name"]}
                    role={card["role"]}
                    messagedTime={dateDiff}
                    messageContent={card["messageContent"]}
                    />
            )
        })



        
        return (
            <div className="content">
                <div className="shareMessage">
                    <div className="shareMessageHead">
                        <img src={this.myprofile} alt="pro"/>
                        <input className="messageBox" type="text" placeholder="Share something here..."/>
                    </div>
                    <div className="shareMessageOption">
                        <div className="addAttachment">
                            <AiOutlineVideoCamera/>
                            <p>Any Attachment</p>
                        </div>
                        <div className="captureMessage">
                            <AiOutlineCamera/>
                            <p>capture it</p>
                        </div>
                        <div className="voiceMessage">
                            <BiMicrophone/>
                            <p>say it</p>
                        </div>
                    </div>
                </div>

                {
                    message
                }

                {/* <MessageBlock 
                    imgsource={profile2}
                    messagerName="Alex"
                    role="Web Developer"
                    messagedTime="1d"
                    messageContent="React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it."
                    />

                <MessageBlock 
                    imgsource={profile3}
                    messagerName="Christoper"
                    role="Network Engineer"
                    messagedTime="1d"
                    messageContent="If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful. We will explain this more in one of the next chapters. We will also use EcmaScript 2015 syntax so any knowledge in this area can be helpful."
                    />

                <MessageBlock 
                    imgsource={profile4}
                    messagerName="Suman"
                    role="Systems Analyst"
                    messagedTime="2d"
                    messageContent="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding."
                    />

                <MessageBlock 
                    imgsource={profile5}
                    messagerName="Alen"
                    role="Software Developer"
                    messagedTime="3d"
                    messageContent="Webpack is a module bundler (manages and loads independent modules). It takes dependent modules and compiles them to a single (file) bundle. You can use this bundle while developing apps using command line or, by configuring it using webpack.config file.

                    Babel is a JavaScript compiler and transpiler. It is used to convert one source code to other. Using this you will be able to use the new ES6 features in your code where, babel converts it into plain old ES5 which can be run on all browsers."
                   />          */}
            </div>

        )
    }
}

export default Content;
