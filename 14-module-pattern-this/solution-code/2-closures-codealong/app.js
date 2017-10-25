function sayNumber() {
    // Local variable that ends up within closure
    let num = 42;
    let say = function() { 
      console.log(num); 
      num++; // moved into inner function
    }
    return say;
}
let sayIt1 = sayNumber();
let sayIt2 = sayNumber();
sayIt1(); // logs 42
sayIt1(); // logs 43
sayIt1(); // logs 44
sayIt2(); // logs 42
sayIt2(); // logs 43