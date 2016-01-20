// Generate the Fibonacci Sequence

/*
Within our for loop we create an array 'f' and seed it with an initial 
value of 1.  As we loop thru i, up to i = 50, we push new items into
the array, using the current value of i as our index position.

We generate the sequence by computing the sum of the previous 2 items in our
f array.  Our f array always has a length that is 1 greater than our counter, 
so we can compute on previous array item.

/* Fibonacci Sequence

  1  +  1  =  2
  1  +  2  =  3
  2  +  3  =  5
  3  +  5  =  8
  5  +  8  =  13
  8  +  13 =  21;

1,1,2,3,5,8,13,21,etc.

*/


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