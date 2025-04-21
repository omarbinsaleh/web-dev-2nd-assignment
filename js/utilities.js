export function showBMIResult(result = 'BMI result is missing') {
   const parentElement = document.getElementById('bmi-right');

   // clear the previos message
   const bmiResultElem = document.getElementById('bmi-result');
   if (bmiResultElem) {
      parentElement.removeChild(bmiResultElem);
   }

   // create new result message
   const p = document.createElement('p');
   p.id = 'bmi-result';
   p.classList.add('bmi-result');
   p.id = 'bmi-result';
   p.textContent = typeof result === 'number' ? `Result: Your BMI is ${result}.` : `Result: ${result}`;

   // create the ok button to dismiss the result popped up
   const okBtn = document.createElement('button');
   okBtn.textContent = 'Ok';
   okBtn.classList.add('btn', 'btn-cancel');
   okBtn.addEventListener('click', removeBMIResult);

   p.appendChild(okBtn);

   parentElement.appendChild(p);
};

export function removeBMIResult() {
   const parentElement = document.getElementById('bmi-right')
   const bmiResultElement = document.getElementById('bmi-result');

   parentElement.removeChild(bmiResultElement);

   // set the focus on the input field
   parentElement.querySelector('input').focus();
};