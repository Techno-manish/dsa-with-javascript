/*
Question 1: Sum of all natural numbers from 1 to n

sum of 1 to 5 is 1 + 2 + 3 + 4 + 5 = 15
*/

/** 
 * @param {number}
 * @return {number}
 **/

function sumOfNaturalNumber(num){
    // let sum = 0
    // for (i=1;i<=num;i++){
    //     sum+=i
    // }

    sum = num*(num+1)/2

    return sum
}

console.log(sumOfNaturalNumber(5)) 
console.log(sumOfNaturalNumber(10)) 
console.log(sumOfNaturalNumber(50)) 