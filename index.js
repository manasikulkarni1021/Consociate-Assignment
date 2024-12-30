// Validate phone number function
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const pattern = /^\d{10}$/;
    const isValid = pattern.test(phoneNumber);
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';
    return isValid;
}
// Listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('validationCheck').addEventListener('submit', function(event) {
      if (!validatePhoneNumber()) {
          event.preventDefault(); 
      }
  });
});
// Name Validation
function validateName() {
  const FullName = document.getElementById('name').value;
  const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const isValid = pattern.test(FullName);
  document.getElementById('nameValidationMsg').textContent = isValid ? '' : 'Please enter a valid Name.';
  return isValid;
}

//Email Validation
function validateEmail() {
  const FullName = document.getElementById('email').value;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = pattern.test(FullName);
  document.getElementById('emailValidationMsg').textContent = isValid ? '' : 'Please enter a valid email.';
  return isValid;
}
// fetch country name & display in dropdown format
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('countryDropdown');
  const url = 'https://restcountries.com/v3.1/all'; 

  fetch(url)
      .then(response => response.json())
      .then(data => {
          data.forEach(country => {
              const option = document.createElement('option');
              option.value = country.cca2; 
              option.textContent = country.name.common; 
              dropdown.appendChild(option);
          });
      })
      .catch(error => console.error('Error fetching country data:', error));
});

// To display submitted data in table format
var row = 1;
var entry = document.getElementById('entry');
entry.addEventListener('click' , displayDetails);

function displayDetails(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var address = document.getElementById('address').value
  var state = document.getElementById('state').value
  var countryDropdown = document.getElementById('countryDropdown').value

  var display = document.getElementById('display');

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);


  cell1.innerHTML = name;  
  cell2.innerHTML = email;  
  cell3.innerHTML = phoneNumber;  
  cell4.innerHTML = address;  
  cell5.innerHTML = state;  
  cell6.innerHTML = countryDropdown;   
  
  row++;

}