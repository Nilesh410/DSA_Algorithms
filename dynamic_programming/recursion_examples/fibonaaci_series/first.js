function f(num)
{
    if(num==0||num==1) {
        return num
    }
    return f(num-1)+f(num-2)
}

var fibo=function(n)
{
    return f(n)
}
console.log("fibonacci series nth element:",fibo(6))

//Time complexity O(2^n)
//space complexity O(n)