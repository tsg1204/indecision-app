 import React from 'react';
 import ReactDOM from 'react-dom';
 import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// IndecisionApp.defaultProps = {
//     options: [ ]
// }

//stateless functional component
// const User = (props) => {
//     return (
//         <div>
//           <p>Name: {props.name}</p>
//           <p>Age: {props.age}</p>
//         </div>
//     )
// }
// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
//import {'./utils.js'};
//import subtract, { square, add } from './utils.js';
 //import isSenior, { isAdult, canDrink } from './person.js';
 //import validator from 'validator';

 //console.log(validator.isEmail('test@gmail.com'));

//  console.log('app.js is running!!!!!');
//  console.log(square(4));
//  console.log(add(4,9));
//  console.log(subtract(100, 3));

// console.log(isAdult(11));
// console.log(isAdult(43));

// console.log(canDrink(20));
// console.log(canDrink(23));

//console.log(isSenior(67));