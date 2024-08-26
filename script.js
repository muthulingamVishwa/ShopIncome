function otdate() {
  let outputDate = document.querySelector('.outdate');
  let inputDate = document.querySelector('.inputdate');
  
  if (inputDate && outputDate) {
    console.log(inputDate.value);
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
  } else {
    console.error("Input or output element not found");
  }
}

function capthcs(){
document.querySelector('input[name="submit"]').classList.remove('hidden');

}
function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Le-kC8qAAAAAIat4Yua5YotP5UAxrpvUVOypgAC', {action: 'LOGIN'});
    });
  }

