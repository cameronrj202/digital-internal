// JavaScript Document
alert("js is attached");
var dailyPrice , car;//global varibles
var totalCost=0;

function updateCar() {
	// function called when a vehicle card div is clicked on]
	dailyPrice=this.dataset.price; //price per day
	cars = this.dataset.name; //selected car
	alert(cars);
	alert(dailyPrice); //test alerts
	window.scrollTo(0, document.getElementById("carInformation").offsetTop - 40);
	document.getElementById("carOutput").innerHTML=cars; //output to the divs in your html
	document.getElementById("priceOutput").innerHTML= "$"+dailyPrice;
	updateBooking();
}

function updateBooking(){
	var addItems = document.getElementsByClassName('addCheck');
	//this collects all my additional items check boxes and stores them in an object array
	var checkAddItems = []; //empty list to add the selected additional items to
	var addCost = 0 //holds the cost of the checkboxes
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkAddItems.push(' ' + addItems[i].value);//finds the value
			alert(checkAddItems);
			addCost += Number(addItems[i].dataset.price);
			alert(addCost);
		}
	}
	var checkIn = document.getElementById("checkInDate").value;
	var numberDays = document.getElementById("numberDays").value;
	alert("number days" + numberDays);
	alert("check in" +checkIn);
	totalCost = addCost + dailyPrice*numberDays;
	alert("total cost" + totalCost);
	document.getElementById("dataOutput").innerHTML= checkIn;
	document.getElementById("totalOutput").innerHTML="$"+totalCost;
	document.getElementById("daysOutput").innerHTML=numberDays;
	document.getElementById("extrasOutput").innerHTML=checkAddItems;
	checkInputs();
}


function checkInputs(){
	alert("in the checkinputs function");
	var firstName=document.getElementById("firstNameInput").value;
	var lastName=document.getElementById("lastNameInput").value;
	var cellphone=document.getElementById("cellphoneInput").value;
	var email=document.getElementById("emailInput").value;
	alert(firstName+lastName+cellphone+email);
	pushData();
}


function pushData() {
	alert("Push data");
	var data = { // creating a json file  to be sent over the web
	//creating a key pair user_name wil be the name of field in your database
		first_name: firstNameInput.value,
		last_name: lastNameInput.value,
		phone: cellphoneInput.value,
		email: emailInput.value,
		extras: checkAddItems
		
		}
		//creating the link to firebase and pushing to the booking node
		firebase.database().ref('Bookings').push(data);
		document.getElementById('confirmOverlay').style.height = "100%"; //display the confirm overlay
		setTimeout(function() { //sets a timer of 3 seconds and will then refresh the page
		location.reload();
		}, 3000);
}
//event listeners that will call the update car function if a card is clicked
var carInputs = document.getElementsByClassName('card');
for(i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click',updateCar);
}

var allInputs=document.getElementsByClassName('addCheck');
for(i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input',updateBooking);
}
