import React from 'react';

import './Dashboard.css';

const Dashboard = () => {

const data = [ "one", "dos", "tres" ]
const divs = data.map((d,i) => <div key={i}> {d}</div>)

const wrap = <div style={{ marginLeft: "20px" }}
    className="wrapper">{divs}</div>

return (
    <div>{wrap}</div>
)
};

export default Dashboard;



