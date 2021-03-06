import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {
    render() {
        const {completed, text, onClick} = this.props
        return (
            <li style={{textDecoration: completed && 'line-through'}}
                onClick={onClick}
            >
                {text}
            </li>
        )
    }
}

export default Todo