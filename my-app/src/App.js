import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', word: ''};
        this.inputChange = this.inputChange.bind(this);
        this.change = this.change.bind(this);
    }
    inputChange (event) {
        this.setState({value: event.target.value});
    }
    change () {
        var vowels = ["a", "e", "i", "o", "u"];
        console.log(this.state.value);
        var val = this.state.value;
        var split = val.split("");
        var firstLetter = split[0];
        console.log(firstLetter);
        if (vowels.includes(firstLetter)) {
            this.setState({word: val + "ay"});
        } else {
        //   var change = input.substring(1,4);
        // $(".output").text(change + firstLetter + "ay");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="App">
                    <h1> Pig Latinizer </h1>
                    <input className="input" type="text" onChange={this.inputChange} placeholder="Type some words here" />
                    <button id="button" type="submit" onClick={this.change}>Go!</button>
                    <div className="output">{this.state.word}</div>
                </div>
            </div>
        );
    }
}

export default App;
