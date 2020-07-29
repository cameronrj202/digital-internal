// JavaScript Document
var database= firebase.database();
var Bookings=database.ref('car');

alert("js is attached");
var dailyPrice = 0;
var	cars = 0;
var	checkInDate;
var	numberDays = 0; //global varibles
var totalCost = 0;
var addCost = 0;
var carPrice = 0;
var insuranceFee = 0;
var checkAddItems = 0;
var bookingFee = 50;
var firstName, lastName, cellphone, email, age, comments = null;




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
	checkAddItems = []; //empty list to add the selected additional items to
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
		
		}
	
	}
	
}

function checkInputs() {
	alert("in the checkinputs function");
	firstName = document.getElementById("firstNameInput").value;
	lastName = document.getElementById("lastNameInput").value;
	cellphone = document.getElementById("cellphoneInput").value;
	email = document.getElementById("emailInput").value;
	age = document.getElementById("ageInput").value;
	comments = document.getElementById("commentsOutput").value;
	alert(firstName + lastName + cellphone + email);
	
	totalCost = addCost + carPrice;
	
	alert("$50 added for booking fee");
	document.getElementById("totalOutput").innerHTML = "$" + totalCost;
	alert("Check inputs finished");
	
}

function pushData(){
	alert("pushDatafunction");
	var data = { // creating a json file  to be sent over the web
	//creating a key pair user_name wil be the name of field in your database
		first_Name: firstName,
		last_Name: lastName,
		cellphone: cellphone,
		email: email,
		age: age, 
		comments: comments,
		pickup_Date: checkInDate,
		number_Of_Days: numberDays,
		car: cars,
		extras: checkAddItems,
		total_cost: totalCost
		
		}
		//creating the link to firebase and pushing to the booking node
		Bookings.push(data);
		alert("Push Data finished");
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