package Sorting_Algorithm.Selection_Sort;

/**
 * selectionsort
 */
public class selectionsort {

    public static void main(String[] args) {
       int arr[]={9,6,2,1,4};
       System.out.println("Array before sorted=");
       for(int i:arr)
       {
        System.out.println(i);
       }
       selectionsort1(arr);
       System.out.println("Sorted elements are=");
       for(int i:arr)
       {
        System.out.println(i);
       }
       

    }
    public static void selectionsort1(int arr[])
    {
        for(int i=0;i<arr.length-1;i++)
        {
            int index_small_ele=smallindexele(arr,i);
            if(i!=index_small_ele)
            {
                int temp=arr[i];
                arr[i]=arr[index_small_ele];
                arr[index_small_ele]=temp;
            }
            
        }
    }
    public static int smallindexele(int arr[],int i)
    {
        int small_index=i;
        for(int j=i+1;j<arr.length;j++)
        {
            if(arr[small_index]>arr[j])
            {
                small_index=j;
            }
        }
        return small_index;
    }
}

// Time complexity of selection sort is depends on how many comparison durin each iteration
// so for each iterantion comparison of n-1, n-2,n-3........2
// so total time to comparison = n(n+1)/2-1
//                             =n(n+1)/2
//                             =n^2+n
//                             =n^2
//  so worst case time complexity = o(n^2)
//  Space complexity 
// total number of space complexity=o(1)
// total number of swapping approximately=n-1 
// total number of comparison =n^2;