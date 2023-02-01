import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/img/logo.png" alt="logo" width="100px" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto gap-5">
                                <Link className="nav-link active text-danger" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link text-danger" to="/movies">Movies</Link>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
