const changeThemeImage = target => {
	const actualImage = target.getAttribute('src');

	if (actualImage === './images/icon-sun.svg') {
		target.setAttribute('src', './images/icon-moon.svg');
	} else {
		target.setAttribute('src', './images/icon-sun.svg');
	}
};

export const changeTheme = ({ target }) => {
	changeThemeImage(target);
	let themeData = document.body.dataset.theme;

	if (themeData === 'light') {
		themeData = 'dark';
		localStorage.setItem('theme', 'dark');
	} else {
		themeData = 'light';
		localStorage.setItem('theme', 'light');
	}
	document.body.dataset.theme = themeData;
};
