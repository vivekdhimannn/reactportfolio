(function () {
    "use strict";

    emailjs.init("k254MCH8OQ6o8lB7u"); // Replace with your EmailJS User ID

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            form.querySelector('.loading').classList.add('d-block');
            form.querySelector('.error-message').classList.remove('d-block');
            form.querySelector('.sent-message').classList.remove('d-block');

            emailjs.sendForm('service_ipwx3yz', 'template_oqjmp0h', form, 'k254MCH8OQ6o8lB7u')
                .then(function (result) {
                    form.querySelector('.loading').classList.remove('d-block');
                    form.querySelector('.sent-message').classList.add('d-block');
                    form.reset();
                }, function (error) {
                    form.querySelector('.loading').classList.remove('d-block');
                    form.querySelector('.error-message').innerHTML = error.text;
                    form.querySelector('.error-message').classList.add('d-block');
                });
        });
    });
})();