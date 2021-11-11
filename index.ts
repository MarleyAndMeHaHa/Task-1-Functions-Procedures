function larger(a : number ,b : number): number {
  if (a >= b) {
   console.log(a) 
    return a
  }
  else {
    console.log(b)
     return b
  }



}


console.assert(larger(4, 5) == 5, 'Test 1 Failed')
console.assert(larger(7, 3) == 7, 'Test 2 Failed')
console.assert(larger(1, 8) == 8, 'Test 3 Failed')
console.assert(larger(45, 57) == 57, 'Test 4 Failed')

console.log("Program Completed")