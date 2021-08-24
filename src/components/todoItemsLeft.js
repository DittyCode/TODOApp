export const itemsLeft = () => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	const items = document.querySelector('[data-items]');

	const left = todoContainer.children.length || 1;

	items.innerHTML = left - 1;
};
