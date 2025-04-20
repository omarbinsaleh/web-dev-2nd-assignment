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

// ======================= Begining of the Helper fucntions =======================
function showBMIResult(result = 'BMI result is missing') {
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
   p.textContent = `Result: Your BMI is ${result}.`;

   // create the ok button to dismiss the result popped up
   const okBtn = document.createElement('button');
   okBtn.textContent = 'Ok';
   okBtn.classList.add('btn', 'btn-cancel');
   okBtn.addEventListener('click', removeBMIResult);

   p.appendChild(okBtn);

   parentElement.appendChild(p);
};

function removeBMIResult() {
   const parentElement = document.getElementById('bmi-right')
   const bmiResultElement = document.getElementById('bmi-result');

   parentElement.removeChild(bmiResultElement);
};