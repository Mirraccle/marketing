import axios from 'axios';
let submit = document.querySelector('.submit');
let feedbackForm = document.querySelector('.feedback-form');


submit.addEventListener('click', e => {
    let target = e.target;
    e.preventDefault();
    let name = feedbackForm.name.value.trim().length;
    let number = feedbackForm.number.value.trim().length;
    let complete = feedbackForm.querySelector('.complete');
    let error = feedbackForm.querySelector('.error');
    let flag = false;

    if(name === 0) {
        error.classList.add('active');
    } else if (number === 0) {
        error.classList.add('active');
    } else {
        flag = true;
    }

    if(flag) {
        let date = new FormData();
        date.append('name', feedbackForm.name.value);
        date.append('number', feedbackForm.number.value);

        axios.post('/mail.php', date, {
            'Content-Type': 'application/x-www-form-urlencoded'
        }).then(response => {
            if(response.status === 200) {
                feedbackForm.name.value = '';
                feedbackForm.number.value = '';
                complete.classList.add('active');
            }
        })
    }
});