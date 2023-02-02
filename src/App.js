import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter , Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter >
            <NavBar/>
            <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            />
                     <Routes>
                     <Route exact path = "/" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="general" pazeSize={5} country="in" category="general"/>}/>
                     <Route exact path = "/business" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="business" pazeSize={5} country="in" category="business"/>}  />
                    <Route exact path = "/entertainment" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="entertainment" pazeSize={5} country="in" category="entertainment"/>}  />
                    <Route exact path = "/general" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="general" pazeSize={5} country="in" category="general"/>}  />
                    <Route exact path = "/health" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="health" pazeSize={5} country="in" category="health"/>}  />
                    <Route exact path = "/science" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="science" pazeSize={5} country="in" category="science"/>}  />
                    <Route exact path = "/sports" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="sports" pazeSize={5} country="in" category="sports"/>}  />
                    <Route exact path = "/technology" element ={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="technology" pazeSize={5} country="in" category="technology"/>}  />
                    </Routes>
                     {/* <News setProgress={this.setProgress}   apiKey={this.apiKey} key="/general" pazeSize={5} country="in" category="general"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="business" pazeSize={5} country="in" category="business"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="entertainment" pazeSize={5} country="in" category="entertainment"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="general" pazeSize={5} country="in" category="general"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="health" pazeSize={5} country="in" category="health"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="science" pazeSize={5} country="in" category="science"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="sports" pazeSize={5} country="in" category="sports"/>
                    <News setProgress={this.setProgress}   apiKey={this.apiKey} key="technology" pazeSize={5} country="in" category="technology"/>
                    </> */}
        </BrowserRouter>
      </div>
    )
  }
}


