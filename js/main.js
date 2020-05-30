/* JS goes here */

// Function to check passwords

function passwordCheck()
{
    //Store the password field objects into variables ...
    let password = document.getElementById('password');
    let confirm  = document.getElementById('confirm_password');

    //Store the Confirmation Message Object ...
    let message = document.getElementById('match_msg');

    //Set the colors 
    let confirm_clr = "#66cc66";
    let clr  = "#ff6666";

    //Values in the Password fields are compared

    if(password.value == confirm.value){

        //Passwords match. 
         
        confirm.style.backgroundColor = confirm_clr;
        message.style.color           =confirm_clr;
        message.innerHTML             = '<h4>Passwords Match!</h4>';
    }else{

        //Passwords do not match and the user is notified
      
        confirm.style.backgroundColor = clr;
        message.style.color           = clr;
        message.innerHTML             = '<h4>Passwords Do Not Match!"</h4>';
    }
}  