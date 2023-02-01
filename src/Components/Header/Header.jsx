import React, { Component } from 'react'
import style from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <header className={`${style.header} text-center`}>
        <div className="header-content text-white">
            <h1>Unlimited movies, TV shows, & more..</h1>
            <p>Watch anywhere. Cancel anytime.</p>
        </div>
      </header>
    )
  }
}
