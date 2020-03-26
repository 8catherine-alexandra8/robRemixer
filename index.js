document.querySelectorAll('.img-thumbnail').forEach((item) => {
	item.addEventListener('click', function() {
		let buttonId = this.id;
		playClip(buttonId);
		boxAnimation(buttonId);
	});
});

document.addEventListener('keydown', function(event) {
	playClip(event.key);
	boxAnimation(event.key);
});

function playClip(key) {
	switch (key) {
		case 'a':
			const clipA = new Audio('sources/a.mp3');
			clipA.play();
			break;
		case 's':
			const clipS = new Audio('sources/s.mp3');
			clipS.play();
			break;
		case 'd':
			const clipD = new Audio('sources/d.mp3');
			clipD.play();
			break;
		case 'f':
			const clipF = new Audio('sources/f.mp3');
			clipF.play();
			break;
		case 'j':
			const clipJ = new Audio('sources/j.mp3');
			clipJ.play();
			break;
		case 'k':
			const clipK = new Audio('sources/k.mp3');
			clipK.play();
			break;
		case 'l':
			const clipL = new Audio('sources/l.mp3');
			clipL.play();
			break;
		case ';':
			const clipRt = new Audio('sources/;.mp3');
			clipRt.play();
			break;

		default:
			console.log(buttonId);
			break;
	}
}

function boxAnimation(currentKey) {
	let activeButton = document.getElementById(currentKey);
	activeButton.classList.add('pressed');
}
