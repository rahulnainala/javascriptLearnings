/**
 * When the variable is allocated to the memory
 * it gives it a default value of undefined
 */

var a = 8;
console.log(a);

if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}

/**
 * Never assign an variable undefined.
 *          a = undefined; => Not recommened
 *  just write var a;   => Good Practise
 */
