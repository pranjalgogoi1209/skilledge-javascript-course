let correctAnswers = ['B','B','A','A'];

let form = document.querySelector('.quiz-form');
let result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((ans,i) => {
        if(ans==correctAnswers[i]){
            score += 25;
        }
    });

    result.querySelector('span').textContent = `${score}`;
});