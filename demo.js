function sort(arr,x)
{
    let n=arr.length;
    let low=0;
    let high=n-1;
    while(low<=high)
    {
        let mid=Math.floor((low+(high-low/2)));
        if(arr[mid]==x)
        {
             return mid+1;

        }
        else if(x>arr[mid])
        {
            low=mid+1;
        }
        else
        {
            high=mid-1;
        }
    }
    return n;
}

const arr=[1,2,2,4,5];
sort(arr,2);
console.log(arr[])