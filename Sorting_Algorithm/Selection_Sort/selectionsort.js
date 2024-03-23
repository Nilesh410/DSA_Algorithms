function selectionSort(arr)
{
    let n=arr.length;
    for(let i=0;i<n-1;i++)
    {
        let min_ele_index=minEleIndex(arr,i);
        if(min_ele_index!=i)
        {
            let temp=arr[min_ele_index];
            arr[min_ele_index]=arr[i];
            arr[i]=temp;
        }
    }
}

function minEleIndex(arr,i)
{
    let index_min_ele=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[index_min_ele]>arr[j]){
            index_min_ele=j;
        }
    }
    return index_min_ele;
}

 const arr=[9,6,2,1,4] //Test Case 1
// const arr=[3,-2,1,0,5,12] //Test Case 2
// const arr=[45,12] //Test Case 3
// const arr=[-3,-1,-5] //Test Case 4
// const arr=["Nilesh","Ridant","Jyoti"] //Test Case 5
// const arr=[12,"NSS",45,-12,45.7] //Test Case 6
//const arr=[34,12,5,"NSS",23.2] //Test Case 7

console.log("Input array=",arr)
selectionSort(arr)
console.log("sorted array using selection sort algorithm=","\n",arr)
