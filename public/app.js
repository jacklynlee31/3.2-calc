// console.log('the user will never see this');

// Document Object Model
//* each object in html is something we
//* can manipulate in javascript

// to grab the + sign
// declare a variable (var) if you want
// to use it again
var modeEl = document.getElementById('mode');
// to grab the 0, the sum in the top right
var valueEl = document.getElementById('value');
var clearEl = document.getElementById('clear');
// new num button that is an array of each
// of our number buttons
var numButtons = document.getElementsByClassName('number-button');

var modeButtons = document.getElementsByClassName('mode-button');
// the above grabs the + and - aka the mode buttons

clearEl.onclick = function () {
	//added clear variable & C because why not
	valueEl.innerHTML = 0;
};

// to run code over each one, use 'for' loop

// can't use a function inside of a loop?
// to fix, move the function from inside the 'for'
// to a new 'buttonSubscribe' variable

var buttonSubscribe = function () {
	var currentNum = parseInt(this.innerHTML);
	var tmp;

	if (modeEl.innerHTML == '+') {
	// 'if' statement is 'checking the...'
		tmp = currentNum + parseInt(valueEl.innerHTML);
	} else {
		tmp = parseInt(valueEl.innerHTML) - currentNum ;
	}
	// when you declare a variable for the first time
	// you use var but when you use one after that,
	// you don't need the 'var' anymore.
	// basically the variable needs to be defined out
	// of the 'if' statement - 'var tmp;'

	valueEl.innerHTML = tmp;

	// parseInt gives you the number, so 3 instead of 30

	// var buttonSubscribe = function () {
	// var currentNum = this.innerHTML;
	//
	// var tmp = currentNum + valueEl.innerHTML;
	// console.log(tmp);
	//
	// The above code gives you # + 0, so it equaled
	// to 30 instead of 3 !  :(


	// console.log(1) and alert(2) were replaced by
	// debugger(3)
	// debugger pauses where you are in the code
	// final code shouldn't have console.log or debugger
	// because the user will not ever see it
};

var modeClick = function () {
	// Change mode
	// Something with modeEl
	// to change the thing, innerHTML
	// this : special function that says
	// when 'this' button is clicked
	// 'something' happens
	modeEl.innerHTML = this.innerHTML;
};

for (var i = numButtons.length - 1; i >= 0; i--) {
	numButtons[i].onclick = buttonSubscribe;
}
for (var i = modeButtons.length - 1; i >= 0; i--) {
	modeButtons[i].onclick = modeClick;
}

// if you do alert('hey') instead of console.log
// you'll be able to see 'hey'
