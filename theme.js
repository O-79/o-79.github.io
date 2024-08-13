const theme_toggle = document.getElementById('theme-toggle');
const theme_icon = document.getElementById('theme-icon');
const GIF_COW = document.getElementById('gif-cow');
const body = document.body;

theme_toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        theme_icon.src = 'resources/ICO-Sun.png';
		GIF_COW.src = 'resources/GIF-Cow-Dark.gif';
    } else {
        theme_icon.src = 'resources/ICO-Moon.png';
		GIF_COW.src = 'resources/GIF-Cow-Light.gif';
    }
});