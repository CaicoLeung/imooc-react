import {ADD_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS} from "../actions/actionTypes"

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

const reducer = (state = initialState, acton) => {
  switch (acton.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: acton.data
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: acton.error
      }
    default:
      return {
        ...state,
        data: todos( state.data, acton)
      }
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? {
          ...todo, completed: !todo.completed
        } : todo
      )
    default:
      return state
  }
}

  export default reducer