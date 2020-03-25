document.querySelectorAll('.img-thumbnail').forEach((item) => {
	item.addEventListener('click', handleClick);
});
const clipA = new Audio('sources/a.mp3');

function handleClick() {
	clipA.play();
}
