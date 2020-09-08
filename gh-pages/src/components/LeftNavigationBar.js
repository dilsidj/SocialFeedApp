import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Styles/LeftNavigationBar.scss";
import userImage from '../image/user-1.jpg';
import {FaRegAddressCard} from 'react-icons/fa';
import {RiUserSharedLine,RiUserReceivedLine,RiArticleLine,RiFileEditLine} from 'react-icons/ri';
import {FiFileText} from 'react-icons/fi';
import {AiOutlineFileText} from 'react-icons/ai';
import {GrGroup} from 'react-icons/gr';
import {BiBrain } from 'react-icons/bi';
import {ImFileText} from 'react-icons/im';


class LeftNavigationBar extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       details:{
          name:'Mamtha Patel',
          role:'Marketing Expert',
          image: userImage
        }
    }

    this.props.updateUser(this.state.details);
  }

    render() {
        return (
          <div className={this.props.navBarFold === 'yes' ? "left-navbar" : "left-navbar active"} >

                <div className="user">
                  <img  src={userImage} alt="" className="user-image" />
                  <h3 className="user-name">{this.state.details.name}</h3>
                </div>
   

   

                <div className="section-1">

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="file-alt" */}
                        <FiFileText className="navbar-img"/></i>
                      <p className="navbar-title">Buzz home</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="file-alt"  */}
                        <AiOutlineFileText className="navbar-img"/></i>
                      <p className="navbar-title">My Buzz Posts</p>
                      <p className="navbar-number">8</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="file-word"  */}
                        <RiFileEditLine className="navbar-img"/></i>
                        <p className="navbar-title">Draft Posts</p>
                        <p className="navbar-number">2</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img"> 
                      {/* <FontAwesomeIcon icon="user"  */}
                      <RiUserSharedLine className="navbar-img"/></i>
                        <p className="navbar-title">My Followers</p>
                        <p className="navbar-number">33</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="user"  */}
                        <RiUserReceivedLine className="navbar-img"/></i>
                      
                      <p className="navbar-title">I am Following</p>
                      <p className="navbar-number">33</p>
                    </div>

                    <div className="options">
                    <i className="navbar-img">
                      {/* <FontAwesomeIcon icon="user-friends"  */}
                      <GrGroup className="navbar-img"/></i>
                      <p className="navbar-title">My Teams</p>
                      <p className="navbar-number">12</p>
                    </div>

                    <div className="options">
                    <i className="navbar-img">
                      {/* <FontAwesomeIcon icon="envelope"  */}
                      <FaRegAddressCard className="navbar-img"/></i>
                      <p className="navbar-title">My Reportees</p>
                      <p className="navbar-number">12</p>
                    </div>

                    <div className="see-more">
                      <p className="navbar-arrow">see more</p>
                      <i className="navbar-img"><FontAwesomeIcon icon="chevron-down" /></i>
                    </div>
                </div>



             



                <div className="section-2">

                    <h2 className="topic">Recently added:</h2>

                    <div className="options">
                        <i className="navbar-img">
                          {/* <FontAwesomeIcon icon="newspaper"  */}
                          <RiArticleLine className="navbar-img"/></i>
                        <p className="navbar-title">New Artefatcs</p>
                        <p className="navbar-number">82</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="book"  */}
                        <ImFileText className="navbar-img"/></i>
                        <p className="navbar-title">New Module</p>
                        <p className="navbar-number">42</p>
                    </div>

                    <div className="options">
                      <i className="navbar-img">
                        {/* <FontAwesomeIcon icon="brain" */}
                         < BiBrain className="navbar-img"/></i>
                        <p className="navbar-title">New Skills</p>
                        <p className="navbar-number">23</p>
                    </div>

                    <div className="see-more">
                        <p className="navbar-arrow">see more</p>
                        <i className="navbar-img"><FontAwesomeIcon icon="chevron-down" /></i>
                    </div>

                </div>
      
          </div>
        )
    }
}

export default LeftNavigationBar;
