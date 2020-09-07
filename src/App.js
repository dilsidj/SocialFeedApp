import React, { Component } from 'react';
import "./components/FontawesomeIcons";
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import MainContainer from './components/MainContainer';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navBarFold:'yes'
    }

  }

  toFoldNavbar(folded){
      this.setState({   navBarFold:folded  })
  }
  

  render() {
    return (
      <div className="App">
      
          <TopNavigationBar toFoldNavbar={this.toFoldNavbar.bind(this)}/>
         
          <MainContainer navBarFold={this.state.navBarFold}/>

      </div>
    )
  }
}


export default App;
