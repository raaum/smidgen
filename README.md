# Smidgen
 
## Description
 
This will eventually be a collection of useful code snippets I have written

## Fibonacci

A function that generates the Fiboacci sequence.  There are lots of creative ways to write this.  I rewrote it several times before preferring this one.


Within our for loop we create an array 'f' and seed it with an initial value of 1.  As we loop thru i, up to i = 50, we push new items into the array, using the current value of i as our index position.

We generate the sequence by computing the sum of the previous 2 item values in our f array.  Our f array always has a length that is 1 greater than our counter, and that allows us to compute on a previous array index.
