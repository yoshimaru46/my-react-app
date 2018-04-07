import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: 'Todo first',
                    id: 0
                },
                {
                    title: 'Todo second',
                    id: 1
                }
            ],
            uniqueId: 1,
        };
        this.addTodo = this.addTodo.bind(this);
        this.resetTodo = this.resetTodo.bind(this);
    }

    addTodo(title) {
        const task = {
          title,
          id: this.state.uniqueId,
        };

        const newTasks = [...this.state.tasks, task];

        this.setState({
            tasks: newTasks,
        });
    }

    resetTodo() {
        this.setState({
            tasks: [],
        });
    }

    render() {
        return (
            <div className="App">
                <h1>TODO App</h1>
                <hr/>
                <TodoInput addTodo={this.addTodo} />
                <hr/>
                <TodoList tasks={this.state.tasks} />
                <hr/>
                <button onClick={this.resetTodo}>Reset</button>
            </div>
        );
    }
}

export default App;