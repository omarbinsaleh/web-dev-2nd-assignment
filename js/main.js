import { showBMIResult } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
   console.log("DOM has done loading...!")

   // add click event handler on the nav links
   document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.addEventListener('click', () => {
         document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
         });

         navLink.classList.add('active');
      });
   });

   // handle the BMI calculation
   const bmiForm = document.getElementById('bmi-calculator-form')
   const bmiCalculateBtn = document.getElementById('bmi-form-submit'); // this button will trigger the calculation
   console.log(bmiCalculateBtn);
   bmiCalculateBtn.addEventListener('click', (e) => {
      const formData = new FormData(bmiForm);
      const height = parseFloat(formData.get('height')) / 100;
      const weight = parseFloat(formData.get('weight'));
      const age = parseInt(formData.get('age'));
      const sex = formData.get('sex');
      const factor = formData.get('activity-factor')

      const BMI = parseFloat((weight / (height * height)).toFixed(2));

      if (BMI) {
         showBMIResult(BMI)
      } else {
         showBMIResult('Please fill up the form first');
      }

      // reset the form
      bmiForm.reset();
   });

   // handle the click event on the question
   document.querySelectorAll('.single-question').forEach(question => {
      question.addEventListener('click', (e) => {
         const targetElem = e.currentTarget;
         const questionBtn = targetElem.querySelector('.question-btn img');
         const answerElem = targetElem.querySelector('.answer-1');
         if (answerElem.classList.contains('display-none')) {
            answerElem.classList.remove('display-none');
            questionBtn.classList.add('rotate-180')
         } else {
            answerElem.classList.add('display-none');
            questionBtn.classList.remove('rotate-180')
         }
      })
   })
});