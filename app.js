// In this simple exercise, you will build a program that takes a value, integer , 
// and returns a list of its multiples up to another value, limit . 
// If limit is a multiple of integer, it should be included as well. 
// There will only ever be positive integers passed into the function, 
// not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), 
// the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    let finalArray = []
    let int = integer
    let lim = limit
    let maxIterations = Math.ceil(limit/integer)

    for (i = 1; i <= maxIterations; i++){
        if(int * i <= lim){
            finalArray.push(int*i)
        }

        
        
    }
    
    return finalArray
}
console.log(findMultiples(5,25), [5,10,15,20,25])
  


//-----Prep Method-----

//  P - Parameters - The two things that will be passed into our function is an interger, 
//  and the multiples of that interger up to the limit, which should include the limit if possible.
//  Will there ever be a possibility of this function being passed a limit that is lower than the int?

//  R - Return - We should return an array that has the list of the intergers multiples UP TO the limit

//  E - Examples - 
//  * (5, 25) -> 
//  * (3, 9)  -> [3,6,9]
//  * (1, 8)  -> [1,2,3,4,5,6,7,8]

//  P - Psuedocode - In plain english my code will go through these steps...
//  take the interger and put it in a loop
//  take the interger, multiply it by i = 1
//  append the result to an empty array, then increase i by one.
//  if item appeneded to array is equal to limit, stop and return the array else...
//  if item is greater than limit, remove or don't add to array, and return the array.
//  return that array.