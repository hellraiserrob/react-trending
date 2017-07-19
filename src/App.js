import React, { Component } from 'react';
import './App.css';

import Trend from './components/trend'

class App extends Component {
  render() {

    let trends = [{
      id: 1,
      title: '‪‪Coverack‬, ‪Cornwall‬, ‪United Kingdom'
    },{
      id: 2,
      title: '‪‪Ben Affleck‬, ‪Evan Rachel Wood‬, ‪Chasing Amy‬, ‪Kevin Smith‬, ‪Jason Lee‬‬'
    },{
      id: 3,
      title: '‪‪Murder of Sarah Payne‬, ‪Roy Whiting‪‪'
    },{
      id: 4,
      title: '‪‪West Bromwich Albion F.C.‬, ‪Leicester City F.C.‬, ‪Premier League Asia Trophy‬‬‪‪'
    },{
      id: 5,
      title: '‪‪‪‪Disney Magic‬, ‪River Tyne‬, ‪The Walt Disney Company‬, ‪Shields Ferry‬, ‪Disney Cruise Line‬‬'
    },{
      id: 6,
      title: '‪‪Paul Nicholls‬, ‪EastEnders‬, ‪Thailand‬, ‪Ko Samui‬, ‪Joe Wicks‪‪'
    },{
      id: 7,
      title: '‪‪‪‪‪‪Aviva‬, ‪Friends Life‬, ‪Friends Provident International Limited‬‬'
    },{
      id: 8,
      title: '‪‪‪‪BBC‬, ‪Tony Hall, Baron Hall of Birkenhead‬, ‪Gender pay gap‬, ‪Fiona Bruce'
    },{
      id: 9,
      title: '‪‪The Disaster Artist‬, ‪James Franco‬, ‪Tommy Wiseau‬, ‪The Room‬, ‪Dave Franco‬, ‪Seth Rogen‪‪'
    },{
      id: 10,
      title: '‪‪‪‪Luis Fonsi‬, ‪Daddy Yankee‬, ‪Justin Bieber‬, ‪Universal Music Latin Entertainment'
    }]

    return (
      <div className="container">
        <h1>Trending now</h1>

        <div className="trends">
          {trends.map(trend => <Trend key={trend.id} title={trend.title} id={trend.id} />)}
        </div>


      </div>
    );
  }
}

export default App;
