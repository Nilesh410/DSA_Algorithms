let dp;
function f(num)
{
    if(num==0||num==1) return num
    if(dp[num]!=-1) return dp[num]
    return dp[num]=f(num-1)+f(num-2)
}

var fibo=function(n)
{   dp=Array(100005).fill(-1)
    return f(n)
}
console.log("fibonacci series nth element:",fibo(7))

//Time complexity O(2^n)
//space complexity O(n)