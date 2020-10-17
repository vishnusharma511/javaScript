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

//console.log(clothstore(17,[10,10,10,1,20,30,30,30,30,30,30,30,40,40,4,40]));
console.log(clothstore(17,[10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40]));
