//* Using window, the main JS object root (the global object)
// console.log('hey');
// window.console.log('hey')
//everything is connected to the window object, here are two ways console log is being used and they produce the same outcome 


//* console log window and viewing the object root properties
// console.log(window);
//large object . has nested API's in there and various properties 
//can use various api's 

//* window.document or document is main object of potentially visible (rendered) document object model (DOM), documents that get loaded into the browser. 
//* The dom is just an object we can use, reassign and set
//*The document object


//*Grabs the element by its ID 
//* document.getElementById()
const titleEL = document.getElementById('title')
titleEL.style.backgroundColor = '#f2ee09';
titleEL.style.padding = '50px'
titleEL.style.fontFamily = 'Arial'
//*by using the dom we can program that when a user clicks on the title it changes the properties to these settings, if we want. 
//* when using style in js we use camelcase and quotes

console.dir(titleEL);
//grabbing the element by Id tag from html


/////////////////////////////////////////////
//* Grabbing element using any selectors
//gives more flexibility
const h2 = document.querySelector('h2')
console.dir(h2);

const h1 = document.querySelector('.main-title')
//we use the dot in the beginning to select the class
console.dir(h1);

const h1ID = document.querySelector('#title')
//use hash in the begining to select the ID
console.dir(h1ID);

const h3 = document.querySelector('h3')
console.dir(h3);
//if there is no h3 or no element that has that selector, it will give back null 

const h2Elements = document.querySelectorAll('h2')
//find all of the matching selector you pass in 
//returns a nodelist (sorta like an array)
console.log(h2Elements);
console.dir(h2Elements);
console.table(h2Elements);
//Both of these gives array 
//nodelist similar to an array but does not have all the functionalities of an array (push, splice)
//The last one gives it in a table (the array becomes a table)

const arr = [1,2,3]
console.table(arr)
/////////////////////////////////////////////
///* Grabbing a paragraph element

const par = document.querySelector('p')
console.log(par);

par.innerText = "hey new text"
//*updating text and shows all text

par.innerHTML = "hey inner html <strong>woah</strong>"
//*any element using within tags will use the inner tag
//*this also rewrite the paragraph


const par2 = document.querySelector('#par2')
console.log(par2);

par2.innerText = "hey inner text <strong>woah</strong>"
//* display literal text 

/////////////////////////////////////////////
//* Creating elements & adding elements into list
//*inner text is text inside the tag
const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)
li.innerText = 'Butter'

/////////////////////////////////////////////

//* Shopping List
const lis = document.querySelectorAll('li')
console.log(lis);

//*looping through elements of shopping list and giving condition 
// for (element of lis) {
//     console.log(element);
//     if (element.innerText === "Butter"){
//         console.log("dont forget butter!");
//         break;
//     } else {
//         console.log("remember your shopping bags");
         //targetted each element bc we have a for of loop
//     }
// }

//*Adds class to an element 

lis[0].classList.add('selected');
// * Adding to the first[0] index of li's you can add the class 'selected' and will add the new class and apply its properties from css
//will show up as class = 'selected'


lis[1].classList.add('removed');
//*Adding the element in index 1, to the class removed
//will apply the removed properties we added in css file 


console.log(lis[0].classList.contains('removed'));
//* Will check if the element contains the class argument ->'removed'
//returns true or false

//* Remove a class from class list , in this example it removes carrots
lis[2].classList.add('selected')
lis[2].classList.remove('selected')

//check if it has class selected 
console.log(lis[0].classList.contains('selected'));
//output: true;


//*Using toggle method to add or remove classes 
const comment = document.querySelector('#comment')
//used toggle twice
comment.classList.toggle('selected') //adds the class
//comment.classList.toggle('selected') //removes the class 
//We toggle between classes 
console.dir(comment);

//* replace the class; from previous class to new class
//returns a boolean
console.log(comment.classList.replace('selected', 'removed'))
console.log(comment);


//*looping through elements
for (element of lis) {
    console.log(element);
}
//Looping through the array(li) using for of loop 
//cannot access the index

lis.forEach((element,index) => console.log(element, index))
//looping through the array(li) using forEach method 
//access the index
// like to use this method for flexibility

//===================================================================

const chatLi = document.querySelectorAll('#chat > li')
//looking inside the id ul which is the li
//adding any css selector we want
console.log(chatLi);

const allLi = document.getElementsByTagName('li')
console.log(allLi);

//=========================== Create an element and add attributes

//* create a new element
const btn = document.createElement('button')

//*updates the text inside the button
btn.textContent = "Click me"

//*Set an attribute on an element
//btn.setAttribute('id', 'start')
btn.setAttribute('class', 'selected')
//key pair values 
//Name of the attribute, in this case we set id to the value of start or class to the value of selected
//any attributes that are available we can assing like ahref, id, class 

//* Get an attribute from the element 
const att = titleEL.getAttribute('id')
console.log(att);
//We got the id value which is th attribute asigned to id -> Output is title in this case

//*Boolean Value; Check if there is an attribute in the element class from titleEl variable
//Check if the element contains an attribute 
console.log(titleEL.hasAttribute('class'));

//* Add our created attribute to the DOM 
const body = document.querySelector('body')
//first we create a variable that contains the tag we will use to add the attribute we made 
body.appendChild(btn)
//here we add to body 



console.log(btn);