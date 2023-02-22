
var menuLinks = [
    {text: 'about', href: '/about'}, //0
    {text: 'catalog', href: '/catalog'}, //1
    {text: 'orders', href: '/orders'}, //2
    {text: 'account', href: '/account'}, //3
  ];
//This is an array filled with four objects 
//to access these you use dot notation and bracket notation

console.log(menuLinks[0].text); //Output: about 


//* select and cache main element in variable mainEL 
//*Task 1.0

const mainEl = document.querySelector('main')
console.log(mainEl);

//*Task 1.1

mainEl.style.backgroundColor = ("var(--main-bg)")

//*Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

  
//* Task 1.3
mainEl.classList.add('flex-ctr')

//* Task 2.0

const topMenuEl = document.querySelector('#top-menu')
console.log(topMenuEl);

//* Task 2.1
topMenuEl.style.height = '100%'

//* Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//* Task 2.3
topMenuEl.classList.add('flex-around')



//*Task 3.1


//*Using a forEach() Loop (Helpful bc it is an array)
// menuLinks.forEach(el => {
    //el represents each object in the array
//     const a = document.createElement('a')
//     a.setAttribute('href', el.href)
//     console.log(a)
    //created anchor tag for each object 
//     a.textContent = el.text
//     topMenuEl.append(a)
// })



//* Using a for of Loops
for (element of menuLinks) {
    //element is each line in the array 
    const a = document.createElement('a')
    //first create an a variable that will be an anchor tag to each element
    a.setAttribute('href', element.href)
    //we use the variable to set the attribute to href and to its value we now need to access each menLinks using dot notation.
    //The dot notation would be element.href and no longer menuLinks because now each element is called element from the parameter we used 
    a.textContent = element.text
    //now take the variable and insert text to each element.
    //we use dot notation to access the text from menulinks using element.text
    //element is accessing each element in menuLinks
    topMenuEl.append(a)
    //now we are going to append a variable to topmenuEl
}




