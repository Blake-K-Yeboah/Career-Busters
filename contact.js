document.querySelector('#contact-form').addEventListener('submit', (e) => {
    let fName = document.querySelector('#fName').value,
        email = document.querySelector('#email').value,
        message = document.querySelector('#message').value,
        alert = document.querySelector('#contact-alert');

    if (fName == '' || email == '' || message == '') {

        e.preventDefault();

        alert.classList.add('shown');

        setTimeout(() => {

            alert.classList.remove('shown')

        }, 4000);

    }
})