//* Arrays //**  */
//*Arrays in JS are objects, they are "list-like" objects with keys "0", "1" etc
//* We refer items/data in an array as elements
//*Unlike objects, the items are considered ordered
//* Best practice is to use Array Literal syntax

//* Literal Array
const nums = [2, 5, "8"];

console.log(nums);
//gives us the whole array
console.log(nums.length);
//tells us the length of the array
console.log(nums[0]);
//accessing the index of an array, JS arrays are zero-indexed, first element is 0

//When we inspect , we see the values and index. The length is the property and the value of a class / object. first it prints out array then items list of array

//*Movies Array - Square Bracket Notation
const movies = [
  "Howl's Moving Castle",
  "Sunshine of a spotless mind",
  "Kung Fu Panda",
];
console.log(movies);
const favMovie = movies[2];
console.log(favMovie);
//2 indexed for kung fu panda
//stored in const variable and console logged it

// Reassigning the value in movies array to another string, adding to an array
movies[0] = "Spirit";
movies[3] = "Valentines Day"; //add a new movie using square brackets
//Can keep adding things to index
//movies = "Hello"
//TYPE-ERROR does not allow you to reassign the array to a string and try to change an array completly, this is safe so no one can overwrite it to not be an array

movies.push("Lady", "Movie Title");
//.push() will add elements to the end of an array

movies.unshift("Star Wars");
//.unshift() will add elements to the beginning of an array, index 0, will move all my elements down and change the index of the rest of the elements

const removedMovies = movies.pop();
//.pop() will remove the last element of an array , in this case it removed movie title and returns the value back to you if you need it and can save it to another variable
console.log(removedMovies);

const shiftedMovies = movies.shift();
//.shift() will remove from the beginning of the list and returns it , can call it multiple times to continue to remove from index 0 after each gets shifted
console.log(shiftedMovies);

console.log(movies);


//* Add/ Remove elements from anywhere in the array ; splice 
//*array.splice(start, deleteCount, newItem1, newItem2);
//movies.splice(3);
movies.splice(3 ,1, "Gentle");
//Starting at index 3 we will remove 1 and add"Lady"
console.log(movies);


//*Iterate over all the elements in an array (the three different loops variations below all do the same thing)
//movie is our local variable inside the function
//.forEach() will access all of the elements within an array and list them
    //* ForEach Loop 
movies.forEach( function (x, idx) {
    console.log(idx, x.toUpperCase());
});
//can use any name to name the function , I used x to show that it can be done 
//idx is index 
//the order of item and then the index Matters 
// uses break statements

    //*For of Loop, iterates over the elements of arrays and other iterables such as strings
for (let x of movies) {
    console.log(x);
}

    //* For loop; accessing arrays 
for (let i=0; i < movies.length; i++) {
    console.log(movies[i]);
}
//We used movies in case someone adds or deletes movies and then the length will change so that is why we use i < movies 

const lastTwoMovies = movies.slice(0, 2)

lastTwoMovies.push("Toy Story");

console.log(movies);
console.log(lastTwoMovies);
//lastTwoMovies is a different and seperate array 

//*Spread Operator, [...array] spreading (copying) your strings that are living inside movies array into another array
const moviesCopy = [...movies, 'Contact']
//copied movies [...movies] and added new movie "contact" into moviesCopy

moviesCopy.push("Up");

console.log(movies);
console.log(moviesCopy);
//the console log shows us that we have now created two seperate arrays, just one (moviescopy) has copied strings from another array

//* Join Operator, are able to join arrays and seperate each string with a comma
const moviesStr = moviesCopy.join(", ")
//Can be joined by different strings, the default is a comma, Here I added a comma and a space to seperate each string in the array. 
console.log(moviesStr);
