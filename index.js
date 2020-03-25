const clipA = new Audio('sources/a.mp3');
const clipS = new Audio('sources/s.mp3');
const clipD = new Audio('sources/d.mp3');
const clipF = new Audio('sources/f.mp3');
const clipJ = new Audio('sources/j.mp3');
const clipK = new Audio('sources/k.mp3');
const clipL = new Audio('sources/l.mp3');
const clipRt = new Audio('sources/;.mp3');

document.querySelectorAll('.img-thumbnail').forEach((item) => {
	item.addEventListener('click', function() {
		let buttonId = this.id;
		console.log(buttonId);
	});
});
