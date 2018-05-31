class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi. I'm " + this.name + "!";
        return `Hi. I'm ${this.name}!`; //using template string
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; 
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description = `Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += `I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }

}

// const me = new Student("Tatiana Grigorieva", 53, "Accounting");
// console.log(me.hasMajor());
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.hasMajor());
// console.log(other.getDescription());

const me2 = new Traveler("Tatiana Grigorieva", 53, "Chapel Hill");
console.log(me2.getGreeting());

const other2 = new Traveler();
console.log(other2.getGreeting());
