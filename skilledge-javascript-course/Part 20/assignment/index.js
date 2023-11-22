const btn = document.querySelector('button');
const form = document.querySelector('form');

btn.addEventListener('click', function(){
    const sum = parseInt(form.first.value) + parseInt(form.second.value);
    form.querySelector('span').innerText = `${sum}`;
});