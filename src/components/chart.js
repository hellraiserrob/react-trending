import React, { Component } from 'react';
import './chart.css'

import { scaleTime, scaleLinear } from 'd3-scale'
import { extent, min } from 'd3-array'
import { line, area } from 'd3-shape'
import { timeParse } from 'd3-time-format'

class Chart extends Component {

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    generate(total = 25, parseTime){

        let data = [];
        let start = this.random(0, 100)

        for(let i = 0; i < total; i++){
            data.push({
                date: parseTime(`${i + 1}-Apr-07`),
                close: start += this.random(-20, 20)
            })
        }

        return data

    }


    render() {

        let width = 100
        let height = 20
        let margin = 3

        let parseTime = timeParse('%d-%b-%y')

        let data = this.generate(28, parseTime)

        let y = scaleLinear().rangeRound([height - margin, margin])

        let x = scaleTime().rangeRound([margin, width - margin])

        x.domain(extent(data, function (d) { return d.date; }));
        y.domain(extent(data, function (d) { return d.close; }));

        let myMin = min(data, function (d) { return d.close; })

        let myLine = line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) { return y(d.close); })


        let myArea = area()
            .x(function(d) { return x(d.date); })
            .y1(function(d) { return y(d.close); })
            .y0(y(myMin))



        return (
            <svg className="chart" width={width} height={height}>
                <g>
                    <path className="area"
                        d={myArea(data)}
                    />
                    <path className="line"
                        d={myLine(data)}
                    />

                </g>
            </svg>
        );
    }
}

export default Chart;
