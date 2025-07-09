function validateForm(){
    alert("form validation triggered"); t}

  //first name validation
  const firstname = document.querySelector("#firstname");
  const firstname_err = document.querySelector(".firstname_err"); 


  if(firstname.value) =={
    firstname_err.textContent = "This field is required";
    firstname.classList.add("invalid");
  }
document.getElementById("myForm").addEventListener("submit",(Event))=>{
    event.preventDefault();
    validateForm(); 
}


//lastname validation

const lastname = Document.querySelector("#lastname");
const lastname_err = document.querySelector("#lastname_err");

if (lastname.value ==) {
  lastname_err.textContent = "This field is required"
  lastname.classList.add("invalid");
  isValid = true;
}
if (isValid) {
  alert("Message Submitted Successfully");
}