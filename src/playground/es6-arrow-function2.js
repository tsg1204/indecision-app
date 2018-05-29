//arguments object - no longer bound with arrow function
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword = no longer bound

const user = {
    name: "Tatiana",
    cities: ["Omaha", "Moscow", "Chapel Hill"],
    printPlacesLived() {
        //console.log(this.name);
        //console.log(this.cities);
        //const that = this;
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,3,5,7],
    multiplyBy: 2,
    multiply() { return this.numbers.map((number) => number * this.multiplyBy)}
}
console.log(multiplier.multiply());