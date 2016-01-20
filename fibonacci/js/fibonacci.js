// Generate the Fibonacci Sequence

// The formulaic way to write it using an initial seed of 1 value
function fibonacci_example() {
  for (f=[1], i=1, f.push(i); i<50; i++) {
    f.push(f[i] + f[i-1]);
  } 
  document.write(f.toString());  // f.toString() contains the sequence
}


// Another way to write it in which the initial seed requires 2 values
function fibonacci_example2() {
  var fibonacci  = [0,1]; 
  var max_values = 50;

  for (i = fibonacci.length; i < max_values; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; // push to fibonacci
    document.write(fibonacci[i] + '<br>');
  }
}