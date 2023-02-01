import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Movies from './Components/Movies/Movies'
import Notfound from './Components/Notfound/Notfound'
import { Routes,Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>

        <Footer/>
      </div>
    )
  }
}
