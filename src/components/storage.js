export const addTodoToStorage = (value, { dataset }) => {
	console.log(value, dataset.pressed);
	const todoStorage =
		JSON.parse(localStorage.getItem('todosTasksListening')) || [];
	todoStorage.push(`${value}:${dataset.pressed}`);
	localStorage.setItem('todosTasksListening', JSON.stringify(todoStorage));
};

export const deleteTodoFromStorage = ({ target }) => {
	const todoStorage = JSON.parse(localStorage.getItem('todosTasksListening'));
	const closestItem = target
		.closest('.todo')
		.querySelector('.todo__item-value').innerHTML;
	const index = todoStorage.indexOf(closestItem);
	todoStorage.splice(index, 1);
	localStorage.setItem('todosTasksListening', JSON.stringify(todoStorage));
};
