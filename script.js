// Function to format the date and set it to the hidden field
function otdate() {
  let outputDate = document.querySelector('.outdate');
  let inputDate = document.querySelector('.inputdate');
  
  if (inputDate && outputDate) {
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
  } else {
    console.error("Input or output element not found");
  }
}

// Function to display the submit button after reCAPTCHA is completed
function capthcs() {
  document.querySelector('input[name="submit"]').classList.remove('hidden');
}
