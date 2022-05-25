'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');
// console.log(btnsShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsShowModal.forEach(element => {
  element.addEventListener('click', function () {
    // console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // Do not use .hidden in this case.
    // Dot notation is only used when selecting a query from DOM.
  });
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// declare the function not call it using ()

// using esc key to escape the modal event. keyboard events are global events. they occur on all elements.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
