let modal = document.querySelector('#team-modal'),
    overlay = document.querySelector('#overlay');

const openModal = () => {
    modal.classList.add('shown');
    overlay.classList.add('shown');
}

const closeModal = () => {
    modal.classList.remove('shown');
    overlay.classList.remove('shown');
}

document.querySelector('#team-toggler').addEventListener('click', openModal);

document.querySelector('#modal-close-icon').addEventListener('click', closeModal);

document.querySelector('#modal-form').addEventListener('submit', (e) => {
    let fName = document.querySelector('#fName').value,
        lName = document.querySelector('#lName').value,
        email = document.querySelector('#email').value,
        message = document.querySelector('#message').value,
        alert = document.querySelector('#modal-alert');

    if (fName == '' || lName == '' || email == '' || message == '') {

        e.preventDefault();

        alert.classList.add('shown');

        setTimeout(() => {

            alert.classList.remove('shown')

        }, 4000);

    }
})