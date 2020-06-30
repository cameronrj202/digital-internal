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
	document.getElementById("carOutput").innerHTML=car; //output to the divs in your html
	document.getElementById("priceOutput").innerHTML= "$"+dailyPrice;
	
}

//event listeners that will call the update room function if a card is clicked
var carInputs = document.getElementsByClassName('card');
for(i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click',updateCar);
}

function pushData() {
	alert("Push data");
	var data = { // creating a json file  to be sent over the web
	//creating a key pair user_name wil be the name of field in your database
	first_name: firstNameInput.value
	}
	//creating the link to firebase and pushing to the booking node
	firebase.database().ref('bookings').push(data);
	document.getElementById('confirmOverlay').style.height = "100%"; //display the confirm overlay
	setTimeout(function() { //sets a timer of 3 seconds and will then refresh the page
	location.reload();
	}, 3000);
}