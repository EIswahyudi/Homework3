 // generating password //
 var length = "";
 var special = "#@!%&()/";
 var numbers = "0123456789";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var random = "";

 // how to make the generate a password button to work // 

 var generatePassword = document.querySelector("#generate")
 var copytoClipboard = document.querySelector("#Copy to Clipboard")

 // how to link Generate a Password button to give you prompts // 

 generatePassword.addEventListener("click", function(){  
    length = prompt("Your password must be between 8 - 128 characters")
    var promptSpecial = confirm("Do you want special characters?");
    var promptNumbers = confirm("Do you want numeric characters?");
    var promptUppercase = confirm("Do you want uppercase letters?");
    var promptLowercase = confirm("Do you want lowercase characters?");
    var password = "";
    
    while (password.length < parseInt(length)) {
        if (promptSpecial === true) {
            password += special.charAt(Math.floor(Math.random()*special.length));
        }
        if (promptNumbers === true) {
            password += numbers.charAt(Math.floor(Math.random()*numbers.length));
        }
        if (promptUppercase === true) {
            password += uppercase.charAt(Math.floor(Math.random()*uppercase.length));
        }
        if (promptLowercase === true) {
            password += lowercase.charAt(Math.floor(Math.random()*lowercase.length));
        }
    }
    alert("Your password is: " + password);
})