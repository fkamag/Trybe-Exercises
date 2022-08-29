// dataNascimento.change(function() {
//   dt = $('#dataNascimento').val();
//   dt = dt.split('/').reverse().join('/');
//   dob = new Date(dt);
//   var today = new Date();
//   var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
//   alert(age+' years old'); 
// });

const dt = '2004/08/29';
const data = dt.split('/').reverse().join('/');
console.log(data);
const dob = new Date(dt);
console.log(dob);
const today = new Date();
console.log(today);
const age = ((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
console.log(Math.floor(today - dob) / 365.25);
console.log(age);
if (age >= 18) { 
  console.log('maior de 18 anos');
} else {
  console.log('menor de 18 anos');
}
