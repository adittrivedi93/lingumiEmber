//Store all utility functions here
let utilities = {};

//Validation Rules:
utilities.lengthChecker = function lengthChecker(str,minLength){
	if(str.length>minLength){
		return true;
	} else{
		return false;
	}
}

export default utilities;