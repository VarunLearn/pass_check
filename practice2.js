function dropLastdig (num) {
	return num.charAt(15);
}

function checkSubtract(num) {
	return num + (num > 9)*(-9);
}

function toEven(num) {
	var one = parseInt(num.charAt(13));
	var two = parseInt(num.charAt(11));
	var three = parseInt(num.charAt(9));
	var four = parseInt(num.charAt(7));
	var five = parseInt(num.charAt(5));
	var six = parseInt(num.charAt(3));
	var seven = parseInt(num.charAt(1));

	return one + two + three + four + five + six + seven;
}

function multiplyAddOdd (num) {
	var one = parseInt(num.charAt(14)) * 2;
	var two = parseInt(num.charAt(12)) * 2;
	var three = parseInt(num.charAt(10)) * 2;
	var four = parseInt(num.charAt(8)) * 2;
	var five = parseInt(num.charAt(6)) * 2;
	var six= parseInt(num.charAt(4)) * 2;
	var seven = parseInt(num.charAt(2)) * 2;
	var eight = parseInt(num.charAt(0)) * 2;

	one = checkSubtract(one);
	two = checkSubtract(two);
	three = checkSubtract(three);
	four = checkSubtract(four);
	five = checkSubtract(five);
	six = checkSubtract(six);
	seven = checkSubtract(seven);
	eight = checkSubtract(eight);

	return one + two + three + four + five + six + seven + eight;
}

function checker(creditCardNum) {
	var checkDigit = dropLastdig(creditCardNum);
	var added = multiplyAddOdd(creditCardNum) + toEven(creditCardNum);
	console.log(checkDigit);
	console.log(added);
	return (added % 10) === parseInt(checkDigit);
}

checker("5432154321543211"); //true
checker("4812821013614658"); //false
checker("4556737586899855"); //true
checker("4815820114514928");//false
