const error = document.querySelector('[data-error]');

export const showError = () => {
	error.classList.add('show');
};
export const hideError = () => {
	error.classList.remove('show');
};
export const isErrorActive = () => {
	return error.classList.contains('show');
};
