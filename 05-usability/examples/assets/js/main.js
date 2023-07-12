document
	.querySelector("#susForm")
	.addEventListener("submit", (event) => {
		event.preventDefault();
	
		let q1 = document.querySelector("#q1").value;
		let q2 = document.querySelector("#q2").value;
		let q3 = document.querySelector("#q3").value;
		let q4 = document.querySelector("#q4").value;
		let q5 = document.querySelector("#q5").value;
		let q6 = document.querySelector("#q6").value;
		let q7 = document.querySelector("#q7").value;
		let q8 = document.querySelector("#q8").value;
		let q9 = document.querySelector("#q9").value;
		let q10 = document.querySelector("#q10").value;

		// For odd items: subtract one from the user response.
		q1 -= 1;
		q3 -= 1;
		q5 -= 1;
		q7 -= 1;
		q9 -= 1;

		// For even-numbered items: subtract the user responses from 5
		q2 = 5 - q2;
		q4 = 5 - q4;
		q6 = 5 - q6;
		q8 = 5 - q8;
		q10 = 5 - q10;

		// Add all converted responses; multiply that total by 2.5.
		let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 2.5;

		// store in a new input
		document.querySelector("#answer").value = answer;
	});
