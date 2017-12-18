// Question 9

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value, or returns the first value if both of them
// are equal.
// Then test your function inside of a console.log by calling it with two
// different numbers and again in another console.log with two equal numbers.
function maxOf2(a, b){
    // if (a > b){
    //     return a
    // } if(a < b){
    //     return b
    // } if(a==b) {
    //     return a
    // }

    return (a > b) ? a : (a < b) ? b : a
}

console.log(maxOf2(8, 9))
console.log(maxOf2(6, 6))