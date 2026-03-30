function isPalindrome(num){
    let copyNum = num, reverseNum = 0

    while(copyNum>0){
        let lastDigit = copyNum%10
        reverseNum = reverseNum*10+lastDigit
        copyNum=Math.floor(copyNum/10)
    }

    return num === reverseNum

}

console.log(isPalindrome(12321))
console.log(isPalindrome(-12321))
console.log(isPalindrome(12671))