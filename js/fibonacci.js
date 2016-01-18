// Generate the Fibonacci Sequence

/*
Within our for loop we create an array 'f' seed it with an initial 
value of 1.  As we loop thru i, up to i = 50, we push new items into
the array, using the current value of i as our index position.

We generate the sequence by computing the sum of the previous 2 items in our
f array.  Our f array always has a length that is 1 greater than our counter, 
so we can compute on previous array item.
*/

for (f=[1], i=1, f.push(i); i<50; i++) {
  f.push(f[i] + f[i-1]);
} 

// f.toString() contains the sequence

document.write('<pre>' + f.toString() + '</pre>');
