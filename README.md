# Inconsistent Handling of Null and Undefined in JavaScript Function

This repository demonstrates a common error in JavaScript: inconsistent handling of `null` and `undefined` values. The `foo` function aims to double a number; however, its treatment of `null` and `undefined` is flawed.

**Bug:** The function treats both `null` and `undefined` as falsy values, incorrectly returning 0 for `null` and 'not a number' for `undefined`.

**Solution:** The improved version explicitly checks for both `null` and `undefined`, providing consistent and expected behavior.

## How to reproduce the bug
1. Clone the repository
2. Open `bug.js` to see the faulty function.
3. Run the JavaScript code. Note the unexpected output for `foo(undefined)`. 

## How to fix the bug
1. Open `bugSolution.js` to find the improved function.
2. The corrected function uses strict equality (`===`) to distinguish between `null` and `undefined`, addressing the inconsistent behavior.