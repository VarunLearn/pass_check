
//User ID and password cannot be the same
//idPassCheck(String, String) -> boolean
//user -> User ID; pw -> password
function idPassCheck(user, pw) {
	return user !== pw;
}

//User ID and password have to be at least six characters long
//idPassLength(String, String) -> boolean
function idPassLength(user, pw) {
	return user.length >= 6 && pw.length >= 6;
}

//User ID cannot contain the following characters: !#$
//idCharCheck(String) -> boolean
function idCharCheck(user) {
	return !user.includes("!") && !user.includes("#") && !user.includes("$");
}

//Password has to contain at least one of: !#$
//pwCheck(String) -> boolean
function pwCheck(pw) {
	return pw.includes("!") || pw.includes("#") || pw.includes("$");
}

//Password cannot be "password"
//passEquals(string)-->boolean
function passEquals(pw) {
	return pw !== "password";
}

//Password has to contain at least one digit
//passInt(String) -> boolean
function passInt(pw) {
	return pw.includes("1") || pw.includes("2") || pw.includes("3") || pw.includes("4") || pw.includes("5") || pw.includes("6") || pw.includes("7") || pw.includes("8") || pw.includes("9") || pw.includes("0");
}

//Password has to contain a lower and an uppercase letter
//passCase(String) -> boolean
function passCase(pw) {
	return pw.toUpperCase() !== pw  && pw.toLowerCase() !== pw;
}

// console.log(passCase("Passthrough"));
// console.log(passCase("passthrough"));
// console.log(passCase("PASSSSSSS"));
//Check User ID and Password to check all parameters
//Prompt for User ID and password
//checker() -> print boolean
function checker() {
	var usr = prompt("What is your User ID: ");
	var pwd = prompt("What is your password: ");

	console.log(idPassCheck(usr, pwd) && idPassLength(usr, pwd) && idCharCheck(usr) && pwCheck(pwd) && passEquals(pwd) && passInt(pwd) && passCase(pwd));
}

checker();

//console.log(passEquals("pass")); //true
//console.log(passEquals("password")); //true
//console.log(pwCheck("123456#")); //true
//console.log(pwCheck("new")); //false
