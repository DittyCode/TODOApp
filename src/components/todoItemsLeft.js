export const itemsLeft = () => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	const items = document.querySelector('[data-items]');
	const children = [...todoContainer.children]
		.map(child => {
			if (child.style.display != 'none') return child;
		})
		.filter(child => child !== undefined).length;

	items.innerHTML = children - 1;
};
