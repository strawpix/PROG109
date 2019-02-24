function validateForm(){
var validFirstname = false;
var validLastname = false;
var validEmail = false;
var validPhone = false;
	var numbers = /^[0-9]+$/;
var validUsername = false;
var validPassword = false;
	var letters = /^[A-Za-z]+$/;
var validAddress = false;
var validCity = false;
var validState= false;
var validCountry = false;
var validZipcode = false;
var errorMessages ="";  // All the error messages are going to stay in this variable
 
 /*********** VALIDATES USERNAME ******** */
//Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value


/*********** VALIDATES FIRSTNAME ******** */
 var firstname = document.getElementById("firstname").value
 if (firstname == null ||
 firstname === "" ||
 firstname.length > 20 ||
 !firstname.match(letters)
 )
 errorMessages += "<p>The first name is required and cannot be greater than 20 characters. Only letters and numbers are accepted.</p>";
 else  
 validFirstname =true;

 /*********** VALIDATES LASTNAME ******** */
 var lastname = document.getElementById("lastname").value
 if (lastname == null ||
 lastname === "" ||
 lastname.length > 50 ||
 !lastname.match(letters))
 errorMessages += "<p>The last name is required and must be less than 50 characters. Only letters and numbers are accepted.</p>";
 else 
 validLastname =true;

/*********** VALIDATES EMAIL ******** */
var email = document.getElementById("email").value
 if (email == null ||
 email === "")
 errorMessages += "<p>The email is required.</p>";
 else 
 validEmail =true;
 
 /*********** VALIDATES phone ******** */
 var phone = document.getElementById("phone").value
 if (phone.length > 15 ||
 phone==null ||
 phone==="" ||
 !phone.match(numbers))
errorMessages += "<p>The phone number is required and must be less than 15 characters. Only numbers are accepted. </p>";
 else 
	  validPhone =true;
 
 /*********** VALIDATES USERNAME ******** */
 var username = document.getElementById("username").value
 if (username.length > 12 ||
 username==null ||
 username==="" )
errorMessages += "<p>The username is required and must be less than 12 characters.</p>";
 else 
	  validUsername =true;
 
 /*********** VALIDATES PASSWORD ******** */
 var password = document.getElementById("password").value
 if (password==null ||
 password=== "" ||
 password.length > 7)
 errorMessages += "<p>The password is required and must be less than 7 characters and it is required.</p>";
 else
 validPassword = true; 

/*********** VALIDATES ADDRESS ******** */
var address = document.getElementById("address").value
 if (address == null ||
 address === "")
 errorMessages += "<p>The address is required.</p>";
 else 
 validAddress =true;
 
 
  
  /*********** VALIDATES CITY ******** */
var city = document.getElementById("city").value
 if (city == null ||
 city === "")
 errorMessages += "<p>The city is required</p>";
 else 
 validCity =true;
 
 /*********** VALIDATES STATE ******** */
 var state = document.getElementById("username").value
 if (
 state==null ||
 state==="" )
errorMessages += "<p>The state is required</p>";
 else 
	  validState =true;
  
  /*********** VALIDATES ZIPCODE ******** */
 var zipcode = document.getElementById("zipcode").value
 if (zipcode>5 ||
 zipcode==null ||
 zipcode==="" )
errorMessages += "<p>The zipcode is required</p>";
 else 
	  validZipcode =true;
  


 document.getElementById("errorMessages").innerHTML = errorMessages;
 
 
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validPassword && validFirstname && validLastname && validAddress &&) ;
}