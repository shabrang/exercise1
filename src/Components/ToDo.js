import React, { Component, Fragment } from 'react'

class ToDo extends Component {
  state = {
    value: null,
    task: []

  }

  getTask = (e) => {
    this.setState({ value: e.target.value })
  }

  addTask = () => {
    //this.setState({(...task),thi
    // s.state.value})
    this.setState((state) => {
      return {
        task: [...state.task, { title: state.value, is_done: false }]
      }
    })
  }

  changeDone = (item, index) => {
    if (item.is_done) {
      return (

        <li>
          <del>
            <span onClick={() => this.finishedTask(index)}>{item.title}</span>
            <button className='btn btn-danger' onClick={() => this.deleteTask(index)}>&times;</button>
          </del>
        </li>

      )

    } else {
      return (
        <li>
          <span onClick={() => this.finishedTask(index)}>{item.title}</span>
          <button className='btn btn-danger  ' onClick={() => this.deleteTask(index)}>&times;</button>
        </li>
      )

    }

  }

  finishedTask = (i) => {
    const tasks = this.state.task
    tasks[i].is_done = !tasks[i].is_done
    this.setState({ task: tasks })
  }
  deleteTask = (i) => {
    const tasks = this.state.task
    tasks.splice(i, 1)
    this.setState({ task: tasks })
  }

  render () {

    return (

      <div className='container'>
        <p className='bg-info col-md-12'>please enter your task</p>
        <div className='form-group col-md-12'>
          <div className='row'>
            <input className='form-control col-md-6' type="text" placeholder='your tasks' onKeyUp={this.getTask}/>
            <button className='btn btn-primary col-md-2' onClick={this.addTask}>add task</button>
          </div>

        </div>


        <ul>
          {
            this.state.task.map((item, index) => (
              <Fragment key={index}>
                {this.changeDone(item, index)}
              </Fragment>

            ))
          }

        </ul>
      </div>

    )

  }

}

export default ToDo