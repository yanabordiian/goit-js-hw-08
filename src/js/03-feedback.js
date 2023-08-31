import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),

}

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}


function onTextareaInput(e){
    
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    refs.email.value = formData.email;
    refs.textarea.value = formData.message || '';
}


