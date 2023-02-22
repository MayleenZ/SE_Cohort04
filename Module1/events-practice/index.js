
// function onSubmitClicked()
// {
//     prompt("Thank you! but this isn't a real website.");
// }


//*Get the button 

const button = document.querySelector("button");
const input = document.querySelector("input")
const rmbutton = document.querySelector("#rmbutton")


//*Add an event listener

// button.addEventListener("click", function() {
    //adding event listener to button, listening to click event and when click event happens, it will trigger the function
    //here we are adding an empty function 
    //the function can be set outside of this and passed through
    // console.log('button clicked');
    //this is what will happen in console when button is clicked, no function is passed as of now
// })

//* Adding an event param in add event listener 
//*event object will be received in callback function
// button.addEventListener("click", function(event) {
    //added an event parameter
    //the event returns event object , the event in this case is click 
    // console.log(event);
    //entered the event argument and will show when click happens and all the metadata attached to it , like if user pressed cntrl key when they clicked on the button
    //gives the pointer event
// })



//* Using the button onclick
//* Adding an li element to add to DOM with user input
button.addEventListener("click", function(event) {
    const li = document.createElement('li')
    // creating li element 
    const input = document.querySelector('input')
    // selecting the input tag from html
    li.textContent = input.value;
    // accessing the input object and within we pull out the value property which is the input text that the user wrote in
    document.querySelector('ul').appendChild(li)
    // We chained two steps 
    // We also used appendChild bc we are adding it below the ul (parent) as a child (li).

    // OR
    // const ul = document.querySelector('ul')
    // ul.appendChild(li)

    input.value = "";
    // here we are accessing the value property and gets reset to an empty string

})

//* Using the enter keyword with input value
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
    const li = document.createElement('li')
    const input = document.querySelector('input')
    li.textContent = input.value;
    document.querySelector('ul').appendChild(li)
    console.log(input.value);
    input.value = "";
    } 
})
//* Added two event listeners , one using the button on click and the other using enter keypress

//////////////////////////

//* sayHello() function
function sayHello(){
    console.log("Fetching data from database");
}
//* Adding an external function, using the button
button.addEventListener("click", sayHello); {
}

//*Remove event listener
rmbutton.addEventListener("click", function() {
    button.removeEventListener('click', sayHello)
    console.log('No longer able to fetch data')
})

//! When we are removing event listeners with the button we are able to see from the console log string that it no longer works once we click the remove event button. Then when we click remove event button we no longer get the other event with sayhello function.
//*/////////////////
//*Event Bubbling
const ul = document.querySelector('ul')
const body = document.querySelector('body')

//*using event bubbling, we were now able to propagate to the parents and now when we click on the children (li) of the parent (ul) we can remove them
ul.addEventListener('click', function(e){
    //console.log('Event on: ', e.target);
    e.stopPropagation()
    //to stop propagating the bubbling
    e.target.remove()
    //the target is where the event is happening
})
//The ul is the parent


body.addEventListener('click', function(e){
    console.log('FROM BODY || Event on: ', e.target);
})
//We are activly seeing the bubbling here
//body is a parent of the ul

///////
