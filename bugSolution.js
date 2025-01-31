function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return 'undefined'; // improved: handle undefined separately
  } else if (typeof x === 'number') {
    return x * 2;
  } else {
    return 'not a number';
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 'undefined' // consistent result