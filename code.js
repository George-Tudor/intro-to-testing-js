"use strict"

// helloWorld function
var helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    if(name === undefined) {
        return "Hello, World!";
    } else if (name === true) {
        return "Hello, World!";
    } else if (name === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}


// function sayHello(name) {
//     if (name === "Alex") {
//         return "Hello, Alex!";
//     } else if (name === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

