import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        let {  img, name } = this.props.movie;
        return (
            <div className='col-lg-3 col-sm-12'>
                <img className='w-100' src={`assets/img/${img}`} alt="movie" />
                <h2 className='text-center'>{name}</h2>
            </div>
        )
    }
}
