import React, { Component } from 'react';
import Chart from './chart'

import './trend.css'

class Trending extends Component {

    render() {

        let { title, id } = this.props

        return (

            <div className="trend cf">

                <Chart />
                <div className="number">{id}.</div>
                <h2>{title}</h2>
                <small>Past 24hrs</small>
                
            </div>


        );
    }
}

export default Trending;
