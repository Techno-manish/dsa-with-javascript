function fibonacci(num){
    // if (num<=0) return "Enter value greater than 0"

    // if (num===1) return 0
    // if (num===2) return 1

    if (num<2) return num

    let prev=0, curr=1, next;

    for(let i=2;i<=num;i++){
        next = prev+curr
        prev=curr
        curr=next
    }
    return curr
}

console.log(fibonacci(5))