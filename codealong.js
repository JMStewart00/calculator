// Store values between button presses

var value1 = null,
	value2 = null,
	SelectedFunc = null;


// Waits for page to load before firing
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
		// Initialize your application or run some code.

		start();
	}
};

// What should happen when the page is initially loaded

function start () {
	// Create event handlers for each buttons

	var buttons = document.getElementsByClassName("key");
	for ( var i = 0; i < buttons.length; i++ ) {
		buttons[i].addEventListener("click", ButtonLogic);
	}

};

function ButtonLogic () {
	console.log("Button Clicked!")
}

// celsius.onclick = function celsiusClick() {
// 		defaultTemp.innerHTML = Math.round(JSON.parse(apiRequest.response).main.temp-273.15) + '&#176 C';
// };