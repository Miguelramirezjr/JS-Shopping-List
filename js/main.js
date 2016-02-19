//create an event listener for the add button, with a handler function called addTheThing
var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

//create an event listener for the print button, with a handler function called printView.
var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

// create a blank array named myList to store user list info.
var myList = [];

// create a var named myListArea, which links to the element with the id of 'wishList'
var myListArea = document.getElementById("wishList");



/* function addTheThing gets the info from the input text field and then passes it to a function named addToTheList, and it then runs a function named resetInput */
function addTheThing() {

    var theThing = document.getElementById("iWant"); //linking to input element.

        addToTheList(theThing);
        resetInput(theThing);
}

/* function named addToTheList, which takes one parameter
called thingToAdd, pushes user info into the empty myList array, and then
adds it to myListArea ul element */
function addToTheList(thingToAdd) {

    myList.push(thingToAdd.value); //pushes user info to empty myList array.
    var newListItem = document.createElement("li"); //creates new li element.
    newListItem.innerHTML = myList[myList.length - 1]; // creates a new array of the user info.

    myListArea.appendChild(newListItem); // adds the user info to ul linked to wishList.
}

/* function resetInput, which resets the value of the
input field to blank ("") */
function resetInput(inputToReset) {
    inputToReset.value = ""; // resets input to blank string after something is entered and added.
}

/*function printView, which outputs a nicely formatted
view of the list user creates */
function printView() {
    var listPage = document.getElementById("listPage"); // var to refrence entire page.
    var formArea = document.getElementById("formArea"); // var to refrence form area of page.

    formArea.style.display = "none"; // hides form.
    listPage.className = "print"; // adds new class attribute to listPage element named print.
    myListArea.innerHTML = ""; // clears all list items.
    myList.sort(); // sorts the list array alphabeticaly.

	// loop to print out each value in array
    for (var i = 0; i < myList.length; i ++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>"; // adds list item to wishList and displays it in browser.

    }
    window.print(); // tells browser to open print dialog box to print out list.
}
