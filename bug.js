function foo(x) {
  if (x == null) {
    return 0; // bug: should handle undefined separately
  } else if (typeof x === 'number') {
    return x * 2;
  } else {
    return 'not a number';
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 'not a number'  // unexpected result