/*
Sum of digits of a number
num = 12345, sum = 15

*/

/** 
 * @param {number}
 * @return {number}
 **/

function sumOfDigits(num){
    sum = 0

    while (num>0){
        sum+=num%10
        num=Math.floor(num/10)
        // console.log(num)
    }
    return sum
}

console.log(sumOfDigits(12345))
console.log(sumOfDigits(78646))
