const magic = document.getElementById('magic');
const _text = magic.textContent;
let animating = null;

function shuffle(str) {
	return str.split('').sort(() => Math.random() - 0.5).join('');
}

function animate() {
	let counter = 0;
	const duration = 1152;
	const interval = 96;
	
	if(animating) {
		clearInterval(animating);
	}

	animating = setInterval(() => {
		magic.textContent = shuffle(_text);
		counter += interval;

		if (counter >= duration) {
			clearInterval(animating);
			animating = null;
			magic.textContent = _text;
		}
	}, interval);
}

magic.addEventListener('click', () => {
	animate();
});