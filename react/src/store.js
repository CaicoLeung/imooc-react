import { createStore } from 'redux'
import rootReducer from './reduces'
import {addTodo, toggleTodo, setFilter, setTodoText} from "./actions/index"

const store = createStore(rootReducer)

// 初始化state
console.log(store.getState())

// 订阅
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 派发actions
store.dispatch(addTodo("Learn about actions"))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('Learn'))

// 取消订阅
unsubscribe()