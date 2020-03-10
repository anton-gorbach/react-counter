// rcc - create class component

import React, {Component} from 'react';
import './Counter.css'

function Counter({count})  {
        return (
            <div className="count">
               <h1>{count}</h1>
            </div>
        );
}

export default Counter;