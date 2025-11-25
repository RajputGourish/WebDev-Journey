// 4.The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


function PasswordValidator(password) {
    if (password.length < 8) return "Password is too short";

    let digit = false;
    for (let c = 0; c < password.length; c++) {
        const ch = password.charCodeAt(c);

        if (48 <= ch && ch <= 57) {
            digit = true;
        }
        else if ((48 > ch || 57 < ch) && (65 > ch || 122 < ch)) {
            return false;
        }
    }
    if (digit == true) return true;
    return false;
}

let str = "aka1057KIE";
console.log(PasswordValidator(str));