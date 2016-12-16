import React from "react";
import TodosList from "./todos-list"
import CreateTodo from "./create-todo";

const todos = [
    {
        task: "Make pie",
        isCompleted: false
    },
    {
        task: "Make tea",
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            todos
        };
    }
    render () {
        return (
            <div>
                <h1>Hi there</h1>
                <CreateTodo
                    createTask={this.createTask.bind(this)}
                />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    createTask (task) {
        this.state.todos.push({
            task,
            isCompletedL: false
        });
        this.setState({ todos: this.state.todos });
    }

    toggleTask (taskId) {
        let todoItem = todos[taskId];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.setState({ todos: this.state.todos });
    }
    editTask (taskId, task) {
        let todoItem = todos[taskId];
        todoItem.task = task;
        this.setState({ todos: this.state.todos });
    }
    deleteTask (taskId) {
        todos.splice(taskId, 1);
        this.setState({ todos: this.state.todos });
    }
}
