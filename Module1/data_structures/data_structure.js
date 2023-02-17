

//node basic class 
//export keyword makes this class accessible to another file and ofc inside this file, nothing else will happen to the class, just available outisde this moduel
//module = file 
export class Node {
    constructor(data){
        //if you declare variables outside the constructor, do not need this keyword 
        this.data = data;
    }
    next = null;
    //refers to the next node and if its the last node it will be null 
    //this is the tail (the end)
}

//* Linked list Class

export class Linkedlist {
    constructor(){
        this.head = null;
        //head property set to null
    }

    getHeadNode(){
        return this.head;
    }

    traverse(){
        let walker = this.head
        //grabs first node in the list
        while (walker.next) {
            walker = walker.next 
            console.log(walker.data);
                //moving thru next node
        }
    
    } 

    // clear(){
    //     this.head = null;
        //clear out the linked list, removes refernce to the other nodes
    //}

}

//initialize linked list with a head property , which will refer to the first node 
//when you initialize a linked list, head will not point to anything yet, so it will point to null 
//the last one is of the linkedlist is null


export class TextNode {
    constructor(data){
        this.data = data
        this.length = data.length;
    }
}


//* Text Node

export class ElementNode {
    constructor(name){
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    setTextContent(text){
        this.textContent = text;
        //functionality to update the property from constructor (the text content property)
        this.outerHTML = this.#setOuterHtml()
        //now we have enough data to build the outerhtml , now we get to use our private method below when we call the div in the other js file 

    }

//the hashtag will be a private method. only accessible within the class
    #setOuterHtml(){
        return `<${this.elementName}>${this.textContent}</${this.elementName}>`;
        //building an element tag on content
    }



}