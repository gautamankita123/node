// const student = {
//     name: 'Ria',
//     age: 21,
//     greet: () => {
//         console.log('Hi,  I am ' + this.name);
//     }
// };
// const fruitnames = ['apple', 'orange', ' ', 'mango', ' ', 'lemon'];
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// console.log(fruitnames.map(fruit => + fruit));
// console.log(fruitnames);


// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');



// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');
// function student(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function printSequence() {
//     console.log('a');
//     console.log('b');

//     await student(3000);
//     console.log('c');

//     await student(0);
//     console.log('d');

//     console.log('e');
// }

// printSequence();

// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('Ankita Gautam!');
//     res.end('Server is running.');
// });
// server.listen(4000, () => {
//     console.log('4000');
// });


const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/home') {
        res.write('Welcome home');
    } else if (url === '/about') {
        res.write('Welcome to About Us page');
    } else if (url === '/node') {
        res.write('Welcome to my Node.js project');
    } else {
        res.write('404 Not Found');
    }

    res.end();
});

server.listen(3000, () => {
    console.log('3000');
});
