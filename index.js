
const captchaText = document.getElementById("captcha-text");
const captchaEnter = document.getElementById("captcha-enter");
const refreshbtn = document.getElementById("refresh-btn");
const validatebtn = document.getElementById("validate-btn");
const error = document.getElementById("error");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha;

generatecaptcha = () =>{
    captcha = "";
    for(i=0;i<7;i++){
        let index = Math.floor(Math.random()*chars.length);
        captcha = captcha+chars[index];
    }
    captchaText.value = captcha;
}


generatecaptcha();
refreshbtn.addEventListener("click",generatecaptcha)
validatebtn.addEventListener("click",() => {
    if(captcha == captchaEnter.value){
        captchaEnter.value = "";
        error.innerText = "You Have Enter Valid Captcha";  
        error.style.display = "block";
        error.style.backgroundColor = "#def0d8"; 
        error.style.color = "#416b47";
    }else{
        captchaEnter.value = "";
        error.style.display = "block";
        error.style.backgroundColor = "#fedfe1"; 
        error.style.color = "#cd4243";
        error.innerText = "You Have Enter Invalid Captcha!! Please Enter Captcha Properly"; 
    }
});
