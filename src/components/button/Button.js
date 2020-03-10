import React, {Component} from 'react';

function Button({addingFunc, getValueFunc, sendFunc, value}) {

    const getValueFunction = (e)=> {
        getValueFunc(e);
    };

    const addingFunction = (i,e)=> {
        addingFunc(i);
    };

    const sendFunction = () => {
        sendFunc();
    };

    return (
            <div>
                <div>
                    <input type="number" value={value} placeholder="Enter number" onChange={getValueFunction} />
                    <button onClick={sendFunction}>Send</button>
                    <button onClick={addingFunction.bind(null,'reset')}>Reset</button>
                </div>
                <button onClick={addingFunction.bind(null,1)}>+1</button>
                <button onClick={addingFunction.bind(null,-1)}>-1</button>
                <button onClick={addingFunction.bind(null,100)}>+100</button>
                <button onClick={addingFunction.bind(null,-100)}>-100</button>
            </div>
        );
}

export default Button;