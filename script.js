let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');


const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*.?";




// Showing input slider
sliderValue.textContent =  inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent =  inputSlider.value;
});



genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})



// Function to generate Password
function generatePassword(){
    let genPassword = "";

    let allChars = ""; //Here we will combine all the selected options and create 1 large collection

    /*
        if(lowercase.checked){
            allChars += lowerchars;
        }
        else{
            allChars += "";
        }
        ....
    */

    //Shorter version
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    
    let i = 1;

    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}

// Copying password
copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        },2000)
    }
    else{
        window.alert("Create a password first");
    }
})


