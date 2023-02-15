

class Governor {
    static politicalParty = "democrat";
    static positionHeld = 3;

    static phrases(){
        return "We will win this election";
    }

    static election(){
        return "Election date will be here soon";
    }

}

console.log(Governor.politicalParty);
console.log(Governor.positionHeld);
console.log(Governor.phrases());
console.log(Governor.election());


class Person {
    constructor (name, age, opinions){
        this.name = name,
        this.age = age,
        this.opinions = opinions
    }; 
    jokes() {
        return "I love that joke"
    }
    feelings(){
        return "That is a feeling"
    }
    preferences(){
        return "I actually have a preference"
    }
}

class PostalWorker extends Person {
    dropOffMail(){
        return "Here is your mail"
    }
    runFromDog(){
        return "please dont chase me dog, I am giving you mail"
    }
    greeting(){
        return "hello, your mail is ready"
    }
}

const postalWorker1 = new PostalWorker("Eddie", 35, "I like mails")
const postalWorker2 = new PostalWorker("Donna", 36, "I like the color green")
console.log(postalWorker1);
console.log(postalWorker2);
console.log(postalWorker1.dropOffMail())
console.log(postalWorker2.greeting());


class Chef extends Person {
    dinnerRush(){
        return "dinner has to be soon"
    }
    mealPrep(){
        return "lets dice the veg for tonight's service"
    }
    
}

const chef1 = new Chef("Bobby Flay", 58, "I like medium rare steak")
const chef2 = new Chef ("David Chang",45, "Ramen is awesome" )
console.log(chef1.dinnerRush());
console.log(chef2.mealPrep());
console.log(chef1);
console.log(chef2);


class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName,
        this.balance = balance,
        this.acctNum = acctNum
    }

    deposit(){

    }

    withdraw(){

    }
}

class CheckingAccount{
    
}

class SavingsAccount {

}