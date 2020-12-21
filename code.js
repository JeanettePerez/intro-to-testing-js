// helloWorld function 
function helloWorld () {
    return "Hello, World!";
}

/* before refractoring
function sayHello(input) {

    if(input === "Alex") {
        return "Hello, Alex!";
    } else if(input === "Pat") {
        return "Hello, Pat!";
    } else {
        return "Hello, Jane!";
    }
}

 */
// in orde for the function to not be hard coded
function sayHello(input) {
    return "Hello, " + input + "!";
}


