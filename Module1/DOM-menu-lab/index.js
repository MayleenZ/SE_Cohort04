
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

////////////* Part Two */////////////


//* Task 4.0 

const subMenuEl = document.querySelector("#sub-menu")
console.log(subMenuEl);

//* Task 4.1
subMenuEl.style.height = '100%'

//* Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

//* Task 4.3
subMenuEl.classList.add('flex-around')

//* Task 4.4
subMenuEl.setAttribute("position", "absolute")

//* Task 4.5
subMenuEl.setAttribute("top", 0)

//* Task 5.1
console.log(topMenuEl)

const topMenuLinks = topMenuEl.querySelectorAll('a')
console.log(topMenuLinks);

const showingSubMenu = false;

//* Task 5.2

//using the a tags with content
topMenuEl.addEventListener("click", function(e){
    e.preventDefault()
    // console.log(e.target.tagName.toLowerCase())
    if(e.target.tagName.toLowerCase() !== 'a'){
        console.log(e.target.tagName.toLowerCase());
        return
    }
    //prevents the link from opening the url
});





