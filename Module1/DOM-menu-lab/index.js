
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
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



// const anc = document.createElement('a')
// console.log(anc);


for (element of menuLinks) {
    let element = document.createElement('a')
    element.setAttribute('href', "menuLinks.href")
    element.textContent = "menuLinks.text"
    topMenuEl.append(element)
}

console.log(menuLinks);

// const att = menuLinks.getAttribute('href')
// console.log(att);

