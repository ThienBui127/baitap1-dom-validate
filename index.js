function isValidateEmail(email) {
var emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
if (emailPattern.test(email)){
    console.log(email + "địa chỉ email hợp lệ");
    return true;
}else {
    console.log(email + "địa chỉ email không hợp lệ");
    return false;
}
}

isValidateEmail("a@gmail.com");
isValidateEmail("ab@gmail.com");
isValidateEmail("abc@gmail.com");
isValidateEmail("@gmail.com");
isValidateEmail("abc@gmail.");
isValidateEmail("@#abc@gmail.com");