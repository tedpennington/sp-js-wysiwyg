console.log("main.js loaded");

// console.log("people", people);

var peopleContainer = document.getElementById("people-container");

// Display each person in a Div
people.forEach((currentValue, index, array)=> {
	peopleContainer.innerHTML += `<div class="person" id="${index + 1}">
									<person>
									  <header><h2>${people[index].name}</h2><br>
									  <h3>${people[index].title}</h3>
									  </header>
									  <section><img src="${people[index].image}"> <div id="bio-${index+1}"><br><strong> Bio: </strong>${people[index].bio}</div></section>
									  <footer><small>Born: ${people[index].lifespan.birth}, Died: ${people[index].lifespan.death}</small></footer>
									</person>`


});



// Odd/Even Backgrounds

function isOdd(num) {
	return num % 2 == 1;
}

var peopleDivs = document.getElementsByClassName("person");
var textInput = document.getElementById("text-input");

// console.log("peopleDivs", peopleDivs);

var selectedDiv = "";

// For loop w/ stying changes and click event lis.
for (let i = 0; i < peopleDivs.length; i++) {
	if ( isOdd(peopleDivs[i].id) == true ) {
		peopleDivs[i].classList.add("blue-back");
	}else { peopleDivs[i].classList.add("yellow-back"); }

	peopleDivs[i].addEventListener("click", (event) => {
		// peopleDivs[i].classList.add("dotted-border");
		textInput.focus();
		// console.log("event.target.id", event.currentTarget.id);
		// WHAT IS UP WITH THIS BELOW? EVENT SHOWS CURRENTTARGET AS NULL BUT EVENT.CURRENTTARGET IS NOT?
		// console.log("event", event);
		// console.log("event.currentTarget", event.currentTarget)
		selectedDiv = event.currentTarget.id;
		console.log("You selected the div with ID: ", selectedDiv);
		updateBorders();
	});
};

//  Function that checks to see if current Person is selected, and if so, adds the border.  Otherwise, removes. 
function updateBorders(){
	console.log("updateBorders ran");
	for (i = 0; i < peopleDivs.length; i++) {
		console.log("peopleDivs[i].id : ", peopleDivs[i].id);
		console.log("i+1 : ", i+1);
		if (selectedDiv == peopleDivs[i].id) {
			console.log("if statement was true");
			peopleDivs[i].classList.add("dotted-border");
		}else {peopleDivs[i].classList.remove("dotted-border")
			console.log("else was true");
		};
	};
};

// Text Input Event Listener
textInput.addEventListener("keyup", (event) => {
	// console.log("textInput.innerText", textInput.value);
	document.getElementById(`bio-${selectedDiv}`).innerText = textInput.value;
	if (event.keyCode == 13) {
		console.log("enter was pressed");
		textInput.value = "";
	}
	
});








