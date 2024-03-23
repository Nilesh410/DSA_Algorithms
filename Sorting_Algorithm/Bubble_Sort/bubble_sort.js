let bubblesort=function b(arr)
{
    let size=arr.length;
    for(let i=0;i<size;i++)
    {
        let is_swap=false;
        for(let j=0;j<size-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                is_swap=true;
            }
        }
        if(is_swap==false)
         { return ;}    
    }
}
const arr=[4,3,2,1];
console.log("Before sorting array elements:",arr);
bubblesort(arr)
console.log("after bubble sorting algorithm elements are:",arr);



