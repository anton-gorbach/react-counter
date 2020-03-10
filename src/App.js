import React from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Button from "./components/button/Button";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            value: '',
            data: null
        };
    }

    addingFunc =(i)=>{
        const {count} = this.state;
        let counter = count+i;
        counter >= 0 && this.setState({count: counter});

        if(i === 'reset') this.setState({count: 0});
    }

    getValueFunc =(e)=> {
        this.setState({value: e.target.value})
    }

    sendFunc =()=>{
        const {count, value} = this.state;
        let newCount = count + Number(value);
        if (newCount >= 0) {
            this.setState({count: newCount, value: 0})
        } else {
            this.setState({count: 0, value: 0})
        }
    }

    render() {
        const {count, value} = this.state;
        return (
            <div className="App">
                <Counter count={count} />
                <Button
                    value={value}
                    getValueFunc={this.getValueFunc}
                    addingFunc={this.addingFunc}
                    sendFunc={this.sendFunc}
                />
            </div>
        );
    }
}

export default App;
