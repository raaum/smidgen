# Fibonacci

In mathematics, the Fibonacci numbers or Fibonacci sequence are the numbers in the following integer sequence:

```
1,1,2,3,5,8,13,21,34,55,89,144
```

By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1, depending on the chosen starting point of the sequence, and each subsequent number is the sum of the previous two.

![Fibonacci Array](/fibonacci/images/fibonacci-array.png)

In mathematical terms, the sequence of Fibonacci numbers is defined by the recurrence relation.

![Fibonacci Formula](/fibonacci/images/fibonacci-formula.png)

###fibonacci.js

The fibonacci.js script contains two example functions that generate the Fibonacci sequence.

Within our for loop we create an array 'f' and seed it with an initial value of 1.  As we loop thru i, up to i = 50, we push new items into the array, using the current value of i as our index position.

We generate the sequence by computing the sum of the previous 2 item values in our f array.  Our f array always has a length that is 1 greater than our counter, and that allows us to compute on a previous array index.

```javascript
for (f=[1], i=1, f.push(i); i<50; i++) {
  f.push(f[i] + f[i-1]);
} 
```

###History of the Fibonacci Sequence

Although English History books teach us that the Fibonacci sequence first appeared in the book Liber Abaci by Leonardo of Pisa, known as Fibonacci, in 1202, the sequence was discussed by Indian mathematicians Gopala (before 1135 AD) and by the Jain scholar Hemachandra (c. 1150), well before the time of Fibonacci.  It may even go back as far as Pingala (200 BC).

However, the clearest exposition of the sequence arises in the work of Virahanka (c. 700 AD), whose own work is lost, but is available in a quotation by Gopala (c. 1135):

"Variations of two earlier meters [is the variation]... For example, for [a meter of length] four, variations of meters of two [and] three being mixed, five happens. [works out examples 8, 13, 21]... In this way, the process should be followed in all mātrā-vṛttas [prosodic combinations]."

Applications of Fibonacci numbers include computer algorithms such as the Fibonacci search technique and the Fibonacci heap data structure, and graphs called Fibonacci cubes used for interconnecting parallel and distributed systems.