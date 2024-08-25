const wrapperElement = document.querySelector('.box');
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  wrapperElement.classList.toggle('d-none');
});
