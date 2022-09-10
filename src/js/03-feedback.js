import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(event) {
    event.preventDefault();

    if (refs.input.value === '' || refs.textarea.value === '') {
        return alert('Fill the fields!');
    }

    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
};

function saveData(dataToSave) {
localStorage.setItem("feedback-form-state", JSON.stringify(dataToSave))
};

function getData() {
JSON.parse(localStorage.getItem("feedback-form-state"));
};

function onFormInput(event) {
    saveData( {email: refs.input.value, message: refs.textarea.value});
};

function autofillData() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    
    if (data) {
        refs.input.value = data.email;
        refs.textarea.value = data.message;
    }
};

autofillData();
