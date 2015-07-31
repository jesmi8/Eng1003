function doIt(){
	var num1Ref, num2Ref, answerRef; //html element/DOM references
	
	var num1, num2, answer; //working variables
	
	//get references
	num1Ref = document.getElementById("number1");
	num2Ref = document.getElementById("number2");
	answerRef = document.getElementById("answer");
	
	
	//answer = num1Ref.value + num2Ref.value; //will not work properly - concatenation not addition

	//convert strings to numbers e.g. "21" to 21
	num1 = Number(num1Ref.value);
	num2 = Number(num2Ref.value);
	
	answer = num1 + num2; //perform addition operation then assignment operation

	answerRef.innerText = answer;  //update DOM to update display
	
	if (answer >= 0)
		answerRef.className = "positive";
	else
		answerRef.className = "negative";

}
	
	
/*
Notes:
the input tag is a void tag (i.e. can't have start and end tag, can't have content) so does not support innerText or innerHtml, use value to get its contents 
*/
