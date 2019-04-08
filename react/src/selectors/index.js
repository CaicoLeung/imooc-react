import {createSelector} from 'reselect'

export const getText = (state) => state.text

export const getFilter = (state) => state.filter

const getTodos = (state) => state.todos.data

export const getVisibleTodos = createSelector(
	[getTodos, getFilter],
	(todos, filter) => {
		switch (filter) {
			case 'all':
				return todos
			case 'completed':
				return todos.filter(todo => todo.completed)
			case 'active':
				return todos.filter(todo => !todo.completed)
			default:
				return new Error('Unknow filter: ' + filter)
		}
	}
)