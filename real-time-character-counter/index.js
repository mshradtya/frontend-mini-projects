const textareaEl = document.getElementById('textarea');
const charsTypedEl = document.getElementById('chars-typed');
const charsLeftEl = document.getElementById('chars-left');

textareaEl.addEventListener('keydown', () => {
    charsTypedEl.innerText = textareaEl.value.length;
    charsLeftEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length;
})