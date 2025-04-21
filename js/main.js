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
});