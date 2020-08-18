// JavaScript Document
var database = firebase.database();
var Bookings = database.ref('car');
alert("js is attached");
var dailyPrice = 0;
var cars = 0;
var checkInDate;
var numberDays = 0; //global varibles
var totalCost = 0;
var carPrice = 0;
var insuranceFee = 0;
var checkAddItems = [];
var bookingFee = 50;
var firstName, lastName, cellphone, email, age, comments = null;

function updateBooking() {
	// function called when a vehicle card div is clicked on]
	checkInDate = document.getElementById("pickUpDate").value;
	alert(checkInDate);
	numberDays = document.getElementById("numberDays").value;
	document.getElementById("dateOutput").innerHTML = checkInDate;
	document.getElementById("daysOutput").innerHTML = numberDays;
	if (isNaN(numberDays) || (numberDays == '')) { //checks that number is not null OR a number
		document.getElementById("error_Message_Date").innerHTML = "Please enter a valid number";
		alert("Please enter a valid age");
		return
	} else if (numberDays > 15) {
		document.getElementById("error_Message_Date").innerHTML = "Sorry you can only order a car for 15";
		alert("Please enter a valid age");
		return
	} else if (numberDays < 0) {
		document.getElementById("error_Message_Date").innerHTML = "You cant order a car for 0 days ";
		alert("Please enter a valid age");
		return
	} else if ((numberDays >= 1) && (numberDays < 14)) { //if your age is between 18 and 130
		document.getElementById("error_Message_Date").innerHTML = "You can order a car for that many days";
	} else if (numberDays < 18) {
		document.getElementById("error_Message_Date").innerHTML = "You cant order a car for that amount of days";
		alert("Please enter a valid Number of days");
		return
	}
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
	//empty list to add the selected additional items to
	alert("item added");
	//holds the cost of the checkboxes
	var addCost = 0;
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkAddItems.push(' ' + addItems[i].value); //finds the value
			alert(checkAddItems);
			addCost += Number(addItems[i].dataset.price);
			alert(addCost);
			alert("extras done");
		}
	}
	totalCost = addCost + carPrice + bookingFee + insuranceFee;
	document.getElementById("totalOutput").innerHTML = "$" + totalCost;
	document.getElementById("extraOutput").innerHTML = checkAddItems;
}

function checkInputs() {
	firstName = document.getElementById("firstNameInput").value;
	lastName = document.getElementById("lastNameInput").value;
	cellphone = document.getElementById("cellphoneInput").value;
	email = document.getElementById("emailInput").value;
	age = Number(ageInput.value); //storing the age is
	comments = document.getElementById("commentsOutput").value;
	//conditional statement to check that the number is within a valid range/can party
	if (isNaN(age) || (age == '')) { //checks that number is not null OR a number
		document.getElementById("error_Message").innerHTML = "Please enter a valid number";
		alert("Please enter a valid age");
		return
	} else if (age > 130) {
		document.getElementById("error_Message").innerHTML = "Theres no one older than 130";
		alert("Please enter a valid age");
		return
	} else if (age < 0) {
		document.getElementById("error_Message").innerHTML = "You can't be that young please enter a valid age";
		alert("Please enter a valid age");
		return
	} else if ((age >= 18) && (age < 130)) { //if your age is between 18 and 130
		document.getElementById("error_Message").innerHTML = "You are old enough to order a car";
	} else if (age < 18) {
		document.getElementById("error_Message").innerHTML = "Your to young to order a car";
		alert("Please enter a valid age");
		return
	}
	alert("$50 added for booking fee");
	alert("Check inputs finished");
}

function pushData() {
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
	document.getElementById('confirmOverlay').style.height = "100%"; //display confirm the overlay
	setTimeout(function() { //sets a timer of 3 seconds and will then refresh the page
		location.reload();
	}, 3000);
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