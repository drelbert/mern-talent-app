import React, { Component } from 'react';

import BarChart from './charts/BarChart';

import './Dashboard.css';

class Dashboard extends Component {

  render() {
    return (
        <div>
        <div>
          <h2>d3ia dashboard</h2>
        </div>
        <div>
        <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
     )
    };
}

export default Dashboard;



