const square = function(x) {
    return x*x;
};
console.log(square(8));

// const squareArrow = (x) => {
//     return x*x;
// };
const squareArrow = (x) => x*x;

console.log(squareArrow(6));

const fullName = "Tatiana Grigorieva";

const getFirstName = (name) =>  name.split(" ")[0];

console.log(getFirstName(fullName));