import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleClick() {
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue)
        this.state.inputValue = '';
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="input new todo"
                       value={this.state.inputValue}
                       onChange={this.handleChange}
                />
                <br/>
                <button onClick={this.handleClick}>Register</button>
            </div>
        );
    }
}

export default TodoInput;