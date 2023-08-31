
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),

}
//refs.form.addEventListener('submit');
refs.textarea.addEventListener('input', onTextareaInput);

function onTextareaInput(e){
    const message = e.target.value;
 
    localStorage.setItem('feedback-form-state', message);
}