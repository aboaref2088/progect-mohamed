var a = "ahmed";
console.log(a);
var alla=document.getElementById('alla');
alla.disabled=true;
// function valid(){
//     var email=  document.getElementById('email').value;
//     var  password=  document.getElementById('password').value;
//     var  errorMessage=  document.getElementById('errorMessage');
//     var  passworderorr=   document.getElementById('passworderorr');
// if(email.indexOf("@")==-1){
//     errorMessage.innerHTML="please inter right email"; 
//     alla.disabled=true;
// }
// else if(email.indexOf("@")>-1)
// {
//     errorMessage.innerHTML="";
// }
// _______________
// if(password.indexOf<4){
//     passworderorr.innerHTML="please inter right password"; 
//     alla.disabled=true;
// }
// else if(password.indexOf<4)
// {
//     passworderorr.innerHTML="";
// }
// _______________
// if(password.indexOf<4&&email.indexOf("@")>-1){
//     alla.disabled=false;

// }
// }
function valid() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    var passwordError = document.getElementById('passwordError'); // تأكد من أن المعرف هنا صحيح
    var submitButton = document.getElementById('submitButton'); // تأكد من أن المعرف صحيح

    // تحقق من البريد الإلكتروني
    if (email.indexOf("@") === -1) {
        errorMessage.innerHTML = "الرجاء إدخال بريد إلكتروني صحيح"; 
        submitButton.disabled = true;
    } else {
        errorMessage.innerHTML = ""; // إخفاء رسالة الخطأ
    }

    // تحقق من كلمة المرور
    if (password.length < 4) {
        passwordError.innerHTML = "الرجاء إدخال كلمة مرور صحيحة"; 
        submitButton.disabled = true;
    } else {
        passwordError.innerHTML = ""; // إخفاء رسالة الخطأ
    }

    // إذا كان البريد الإلكتروني وكلمة المرور صحيحين
    if (password.length >= 4 && email.indexOf("@") > -1) {
        submitButton.disabled = false;
    }
}
