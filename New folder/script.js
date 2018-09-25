var a = 5;
var b = 10;
var name = "Ronan";

function addnum(numA, numB){
    return numA+numB;
}
function subnum(a,b){
    return Number(a) - Number(b);
}
function checkNum(a,b){
    if(Number(b) > Number(a)){
        return true;
    }
    else if (Number(a) > Number(b)){
        return false;
    }
    else{
        return "Values are equal";
    }
}
function writeStuff(a,b,c,d){
    var words = [a,b,c,d];
    return words;
}
function convertHours(minutes){
    var hours = parseInt(minutes/60);
    minutes = minutes-(hours*60);
    return String(hours) +" hours and " +String(minutes) +" minutes";
}

function area(radius){
    return 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094*radius*radius;
}
function perimeter(radius){
    return 2*radius*3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094;
}
function convert(distance, unit){
    var result;
    if(unit = "m"){
        result = distance * 1.609344; 
    }
    if(unit = "km"){
        result = distance * 0.62137119;
    }
    return result;
}

function bmi(weight, height){
    return weight/(height*height); 
}
function date(year, month, date){
	month=month-1;
	var d = new Date(year, month, date);
	return d;
	
}

function palindrome(word){
	var input = word;
	var inverse  = input.split("").reverse().join("");
	return input == inverse;
}

function calc(num1, num2, sign){
	if(sign == "+"){
		return num1+num2;
	}
	else if(sign == "-"){
		return num1-num2;
	}
	else if(sign == "*"){
		return num1*num2;
	}
	else if(sign == "/"){
		return num1/num2;
	}
	else{
		console.log("Please specify all parameters and in the format 'Number 1, Number 2, Operation'");
	}
}
