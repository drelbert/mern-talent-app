import React, { useState } from 'react';

const LearningAssets = () => {

    const [count, setCount] = useState(0);

    return (
      <div>
        <h2>Learning Assets</h2>
        <p>Clicked this many {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Click This
        </button>
      </div>
    );
}

export default LearningAssets;