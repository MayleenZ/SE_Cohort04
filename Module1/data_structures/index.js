import { Node, Linkedlist, TextNode, ElementNode } from "./data_structure.js";
//imported the class 

const node1 = new Node(4)
const node2 = new Node(7)
const node3 = new Node(12)

console.log(node1);
console.log(node2);
console.log(node3);

const myLinkedList = new Linkedlist();
//initialize head property 


//* Our linkedlist flow 
//*head: 4 --> 7 --> 12 --> null


myLinkedList.head = node1
//we are pointing to the instance of the node 

myLinkedList.head.next = node2
//now next refers to node1 and pointing it to node2 which has value of 7

myLinkedList.head.next.next = node3
//we are following the linkedlist path


console.log(myLinkedList);
console.log(myLinkedList.getHeadNode());
myLinkedList.traverse()


let walker = myLinkedList.getHeadNode();
//walker.next = walker.next.next;
//7 will now be 12
//this is us reassigning node2 to be node3
//Removing Node with a value of 7
//we dont necessarily remove we are reassigning 
//removing the pointer we had to that object and reassigning to a new pointer 


//*Swapping
//walker: 4 -> 7 -> 12 -> null
//this is what we have


//walker: 4 -> 12 -> 7 -> null
//this is what we want (we are swapping)

//let temp = walker.next //7

let temp = walker.next.next //12
console.log(walker);

walker.next.next = temp.next
//value of 7 -> null
//we are reassigning the value of 7 to point to null
console.log(walker.next);

temp.next = walker.next
//12 -> 7 
//12 now points to 7 
//temp is 12 but when we add .next it will point to 7 and make it equal to walker.next which is 7
console.log(walker.next);


walker.next = temp;
//4 to point to 12 
//walker.next is the one next to head 
//head is 4 so it is now pointing to 12 which is temp

console.log(walker);

//* Text Node

const textNode = new TextNode("Hello world")
console.log(textNode);

//* Element Node
const div = new ElementNode("div")

div.setTextContent("hey element node")

console.log(div);

//Test
const p = document.createElement("p");
p.textContent = "Hello Worldy"
console.dir(p);
//console.dir will give you all the properties and elements of the variable we made : p
console.log(p);

//Creating an element tag to pass text through , created our own element node 






