/*
Question 3: Count number of digits in a numiber
*/

/** 
 * @param {number}
 * @return {number}
 **/

function countDigits(num){
    num = Math.abs(num)
    count=0

    do{
        count++
        num=Math.floor(num/10)
    }while(num>0)

    return count
}

console.log(countDigits(34627))
console.log(countDigits(0))
console.log(countDigits(12))
console.log(countDigits(1903))

