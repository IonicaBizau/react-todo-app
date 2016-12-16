import React from "react";

export default class CreateTodo extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Task" ref="taskMessage"/>
                <button>Add</button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}
