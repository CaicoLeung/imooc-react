import React, {Component} from 'react'
import AddTodoListContainer from '../containers/AddTodoContainer'
import FooterContainer from '../containers/FooterContainer'
import TodoListContainer from '../containers/TodoListContainer'

class App extends Component {

  render() {
    return (
      <div>
        <AddTodoListContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    )
  }

}

export default App
