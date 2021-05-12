const more_ = document.querySelector('.info .metadata_.more_');
const tittle = document.querySelector('.info .metadata_.tittle');

more_.addEventListener('click', () => {
more_.classList.toggle('clicked');
tittle.classList.toggle('clamp');
});