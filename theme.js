const theme_toggle = document.getElementById('theme-toggle');
const theme_icon = document.getElementById('theme-icon');
const GIF_COW = document.getElementById('gif-cow');
const body = document.body;

function APPLY(DARK) {
	if(DARK) {
		body.classList.add('dark-mode');
		theme_icon.src = 'resources/ICO-Sun.png';
		if(GIF_COW) { GIF_COW.src = 'resources/GIF-Cow-Dark.gif'; }
		localStorage.setItem('theme', 'DARK');
	}
	else {
		body.classList.remove('dark-mode');
        theme_icon.src = 'resources/ICO-Moon.png';
		if(GIF_COW) { GIF_COW.src = 'resources/GIF-Cow-Light.gif'; }
		localStorage.setItem('theme', 'LIGHT');
	}
}

(function() {
	_THEME_ = localStorage.getItem('theme') === 'DARK';
	APPLY(_THEME_);
	if(_THEME_) { localStorage.setItem('goto', 'LIGHT'); }
	else { localStorage.setItem('goto', 'DARK'); }
})();

theme_toggle.addEventListener('click', () => {
	_THEME_ = localStorage.getItem('goto') === 'DARK';
	APPLY(_THEME_);
	if(_THEME_) { localStorage.setItem('goto', 'LIGHT'); }
	else { localStorage.setItem('goto', 'DARK'); }
});
