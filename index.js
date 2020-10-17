// PROBLEM :
//     Rohit works at a clothing store. He has a large pile of socks that he must pair by colour for sale.
//     Given an array of integers representing the color of each sock, determine how many pairs of socks 
//     with matching colors there are. For example, 
//     there are n=17 with color ar=[1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4] .
//     There is two pair of color 1 , three of color 3 and two of color 4 .
//     There are three odd socks left, one of color 2 , color 3 and color 4 . The number of pair is 7 . 

// Problem :
//       Write a program in Java Script that will take shocks array as input and returns number of pairs for every unique color. 

// Input Format :
//       The First line contains an integer n, the number of socks represented in ar .
//       The Second line contains n space-separated integers describing the colors ar[i] of the socks in the pile. 

// Output Format :
//       Return the total number of matching pairs of socks that Rohit can sell. 
      
// Sample Input
//       10 10 10 10 20 30 30 30 30 30 30 30 40 40 40 40 40 

// Sample Output 
//       7 


function clothstore(n, ar) {
  var socks = {};
  let pairsofsocks = 0;

  ar.sort();
  var i, value;

  for (i = 0; i < n; i++) {
    value = ar[i];
    if (typeof socks[value] === "undefined") {
      socks[value] = 1;
      } else {
        socks[value]++;
        }

        if (socks[value] % 2 == 0) {
          pairsofsocks += 1;
        }

  }
  return pairsofsocks;
}

console.log(clothstore(17,[10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40]));
