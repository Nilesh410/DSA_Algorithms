function selectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let min_idx=findMinEle(arr,i)
        if(min_idx!=i)
        {
            let temp=arr[min_idx];
            arr[min_idx]=arr[i];
            arr[i]=temp;
        }
    }
}

function findMinEle(arr,i)
{
    let min_index_el=i;
    for(j=i+1;j<arr.length;j++)
    {
       if(arr[j]<arr[min_index_el])
       {
          min_index_el=j;
       }
    }
    return min_index_el;
}

const arr=[9,1,0,6,-2,4,8];
selectionSort(arr);
console.log(arr);