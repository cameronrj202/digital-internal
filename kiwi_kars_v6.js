// JavaScript Document
alert("js is attached");
var dailyPrice = 0;
var	cars = 0;
var	checkInDate;
var	numberDays = 0; //global varibles
var totalCost = 0;
var addCost = 0;
var carPrice = 0;
var insuranceFee = 0;

function updateBooking() {
	alert("in the update car function");
	// function called when a vehicle card div is clicked on]
	checkInDate = document.getElementById("pickUpDate").value;
	alert(checkInDate);
	numberDays = document.getElementById("numberDays").value;
	alert(numberDays);
	alert("number days" + numberDays);
	alert("check in" + checkInDate);
	document.getElementById("dateOutput").innerHTML = checkInDate;
	document.getElementById("daysOutput").innerHTML = numberDays;
	
}

function updateCar() {
	dailyPrice = Number(this.dataset.price); //price per day
	cars = this.dataset.name; //selected car
	alert(cars);
	alert(dailyPrice); //test alerts
	window.scrollTo(0, document.getElementById("carInformation").offsetTop - 40);
	document.getElementById("carOutput").innerHTML = cars; //output to the divs in your html
	document.getElementById("priceOutput").innerHTML = "$" + dailyPrice;
	carPrice = dailyPrice * numberDays;
	insuranceFee = numberDays * 20;
	alert(carPrice);
	alert(insuranceFee);
	alert("We have added $20 for everyday you use the car for insurance")
	
}

function updateExtras() {
	alert("extras");
	var addItems = document.getElementsByClassName('extras');
	//this collects all my additional items check boxes and stores them in an object array
	var checkAddItems = []; //empty list to add the selected additional items to
	alert("item added");
	//holds the cost of the checkboxes
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkAddItems.push(' ' + addItems[i].value); //finds the value
			alert(checkAddItems);
			addCost += parseInt(addItems[i].dataset.price);
			alert(addCost);
			document.getElementById("extraOutput").innerHTML = checkAddItems;
			alert("extras done");
			checkInputs();
		}
	}
}

function checkInputs() {
	alert("in the checkinputs function");
	var firstName = document.getElementById("firstNameInput").value;
	var lastName = document.getElementById("lastNameInput").value;
	var cellphone = document.getElementById("cellphoneInput").value;
	var email = document.getElementById("emailInput").value;
	alert(firstName + lastName + cellphone + email);
	
	
	totalCost = addCost + carPrice + 50 + insuranceFee;
	alert("$50 added for booking fee")
	document.getElementById("totalOutput").innerHTML = "$" + totalCost;
}

	
//event listeners that will call the update car function if a card is clicked
var allInputs = document.getElementsByClassName('addCheck');
for (i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input', updateBooking);
}
var carInputs = document.getElementsByClassName('card');
for (i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click', updateCar);
}
var allInputs = document.getElementsByClassName('extras');
for (i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input', updateExtras);
}