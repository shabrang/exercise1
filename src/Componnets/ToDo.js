import React, {Component, Fragment} from 'react'

class ToDo extends Component {
    state = {
        value: null,
        task: []

    }

    getTask = (e) => {
        this.setState({value: e.target.value})
    }

    addTask = () => {
        //this.setState({(...task),thi
        // s.state.value})
        this.setState((state) => {
            return {
                task: [...state.task, this.state.value]
            }
        })
    }

    render() {
        console.log(this.state.task)
        return (
            <Fragment>
                <input type="text" placeholder='your tasks' onKeyUp={this.getTask}/>
                <button onClick={this.addTask}>add task</button>
                <ul>
                    {this.state.task.map((item, index) =>
                        <li>
                            <div id={index}>{item}</div>
                        </li>)}
                </ul>
            </Fragment>


        );

    }

}

export default ToDo