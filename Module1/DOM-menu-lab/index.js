var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
//This is an array filled with four objects
//to access these you use dot notation and bracket notation

console.log(menuLinks[1].subLinks); //Output: about

//* select and cache main element in variable mainEL
//*Task 1.0

let mainEl = document.querySelector("main");
console.log(mainEl);

//*Task 1.1

mainEl.style.backgroundColor = "var(--main-bg)";

//*Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//* Task 1.3
mainEl.classList.add("flex-ctr");

//* Task 2.0

const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

//* Task 2.1
topMenuEl.style.height = "100%";

//* Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//* Task 2.3
topMenuEl.classList.add("flex-around");

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
  const a = document.createElement("a");
  //first create an a variable that will be an anchor tag to each element
  a.setAttribute("href", element.href);
  //we use the variable to set the attribute to href and to its value we now need to access each menLinks using dot notation.
  //The dot notation would be element.href and no longer menuLinks because now each element is called element from the parameter we used
  a.textContent = element.text;
  //now take the variable and insert text to each element.
  //we use dot notation to access the text from menulinks using element.text
  //element is accessing each element in menuLinks
  topMenuEl.append(a);
  //now we are going to append a variable to topmenuEl
}

////////////* Part Two */////////////

//* Task 4.0

const subMenuEl = document.querySelector("#sub-menu");
console.log(subMenuEl);

//* Task 4.1
subMenuEl.style.height = "100%";

//* Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//* Task 4.3
subMenuEl.classList.add("flex-around");

//* Task 4.4
subMenuEl.setAttribute("position", "absolute");

//* Task 4.5
subMenuEl.setAttribute("top", 0);

//* Task 5.1
console.log(topMenuEl);

let topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

let showingSubMenu = false;

//* Task 5.2
//*Task 5.3

//using the a tags with content
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.classList);
  console.log(e.target.classList.contains("active"));
  //handles e first
  if (e.target.tagName.toLowerCase() !== "a") {
    //we didnt click on an anchor
    console.log(e.target.tagName.toLowerCase());
    //no change to state
    return;
  } else if (e.target.classList.contains("active")) {
    //an active anchor was clicked
    e.target.classList.remove("active");
    showingSubMenu == false;
    subMenuEl.setAttribute("top", 0);
    //removes active class for e, turns white
    console.log(showingSubMenu); //Output: false
    console.log(e.target.classList.contains("active"));
    return;
  }
  //-------------------------------
  //we clicked on an inactive anchor
  console.log(e.target.innerHTML);
  // console.log(e.target);
  //------------------------------
  for (link of topMenuLinks) {
    link.classList.remove("active");
  }
  //every link in topmenulinks was made inactive

  //-------------------------------------
  e.target.classList.add("active");
 
  //made one anchor we clicked on active
  //------------------------------------
 
//  if (e.target.classList.contains("active")){
  showingSubMenu == true
   if (e.target.innerHTML == "about"){
    subMenuEl.style.top = "0%"
    subMenuEl.innerHTML = ""
   } else if (e.target.innerHTML == "catalog"){
    buildSubMenu(subL2)
    subMenuEl.style.top = "100%"
   } else if (e.target.innerHTML == "orders"){
    buildSubMenu(subL3)
    subMenuEl.style.top = "100%"
   } else if (e.target.innerHTML == "account"){
    buildSubMenu(subL4)
    subMenuEl.style.top = "100%"
   }
  // } 
  console.log(showingSubMenu); //false
  // console.log("subLinks" in menuLinks[2]); //true

  mainEl.innerHTML = e.target.innerHTML 
});

//*------------------Outside the event listener
console.log(showingSubMenu); //false
console.log(menuLinks);

const subL1 = menuLinks[0].subLinks;
const subL2 = menuLinks[1].subLinks;
const subL3 = menuLinks[2].subLinks;
const subL4 = menuLinks[3].subLinks;

let mySubs = []
mySubs.push(subL1) //undefined; about
mySubs.push(subL2) //catlog
mySubs.push(subL3) //orders
mySubs.push(subL4) //account

// console.log(mySubs);
//*all the sublinks in an array 


//* Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  const subMenuLinks = subLinks.map((link) => {
    const subMenuLink = document.createElement("a");
    subMenuLink.setAttribute("href", link.href);
    subMenuLink.textContent = link.text;
    console.log(subMenuLink);
    return subMenuLink;
  });
  subMenuEl.append(...subMenuLinks);
  console.log(subMenuLinks);
}



//////////////* Task 6.0

subMenuEl.addEventListener("click", function(e){
  e.preventDefault()
  if (e.target.tagName.toLowerCase() !== "a") {
    //we didnt click on an anchor
    console.log(e.target.tagName.toLowerCase());
    //no change to state
    return;
  }
  showingSubMenu == false;
  subMenuEl.style.top = "0"

  for (link of topMenuLinks) {
    link.classList.remove("active");
  }
console.log(e.target.innerHTML);


  mainEl.innerHTML = e.target.innerHTML


})
//*------------------Outside the event listener

console.log(mainEl.innerHTML);
console.log(mainEl);
console.log(subMenuEl);


 function updateMainEl(sub) {
    mainEl.innerHTML = sub[0].text
    return;
  };


// updateMainEl(subL4)

//   const textBodies = document.createElement("h1")
//   textBodies.setAttribute("h1", subL2[0].text)
//   console.log(textBodies);


// console.log(subL2[0].text);

// for (let i = 0; i < menuLinks.length; i++){
//   console.log(menuLinks[i].text);
// }
// for (let i = 0; i < mySubs.length; i++){
//   console.log(mySubs[i]);
// }
