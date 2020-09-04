import React, { Component } from 'react';
import { FiFileText, GoFile,FaFileSignature, RiUserReceived2Line,RiUserShared2Line,
        HiOutlineUserGroup,BsLayoutTextSidebarReverse , AiOutlineDown,RiFileListLine, GiBrain,FaRegListAlt
        } from "react-icons/all";
import MenuItem from './MenuItem';


class leftMenu extends Component {

    myprofile='../assets/images/profile1.jpg';

    mobileViewMenu=React.createRef();
    clickOutsideMenu=event=>{
        if(this.mobileViewMenu.current.style.width==='250px' && !this.mobileViewMenu.current.contains(event.target)){
            // document.getElementsByClassName("leftMenu")[0].style.display="none";
            document.getElementsByClassName("leftMenu")[0].style.width="0px";
        }
    }


    componentDidMount() {
        document.addEventListener("mousedown", this.clickOutsideMenu);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.clickOutsideMenu);
    }

    render() {
        return (
            <div className="leftMenu" ref={this.mobileViewMenu} >
                <div className="profile">
                    <img src={this.myprofile} alt="Profile pic"></img>
                    <p className="profileName">Mamtha Patel</p>
                </div>

                <MenuItem icon={ <FiFileText className="icon"/> } menuItemName="Buzz Home" notification=""/>
                <MenuItem icon={ <GoFile className="icon"/> } menuItemName="My Buzz Posts" notification="8"/>
                <MenuItem icon={ <FaFileSignature className="icon"/> } menuItemName="Draft Posts" notification="2"/>
                <MenuItem icon={ <RiUserReceived2Line className="icon"/> } menuItemName="My followers" notification="33"/>
                <MenuItem icon={ <RiUserShared2Line className="icon"/> } menuItemName="I am following" notification="33"/>
                <MenuItem icon={ <HiOutlineUserGroup className="icon"/> } menuItemName="My Teams" notification="12"/>
                <MenuItem icon={ <BsLayoutTextSidebarReverse className="icon"/> } menuItemName="My Reportees" notification="12"/>

                <div className="moreMenu">
                    <p>See more <AiOutlineDown/></p>
                </div>
                <p className="recentlyAddedHead">Recently added:</p>
                <MenuItem icon={ <FaRegListAlt className="icon"/> } menuItemName="New Artefacts" notification="82"/>
                <MenuItem icon={ <RiFileListLine className="icon"/> } menuItemName="New Modules" notification="42"/>
                <MenuItem icon={ <GiBrain className="icon"/> } menuItemName="New skills" notification="23"/>

                <div className="moreMenu">
                    <p>See more <AiOutlineDown/></p>
                </div>                  

            </div>
             
                
        )
    }
}

export default leftMenu;



