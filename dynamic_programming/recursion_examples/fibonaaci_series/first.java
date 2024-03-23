import java.util.Scanner;

class first
{
    public static void main(String[] args) 
    {
       System.out.println("enter the number to find out nth fibonacci value");
       Scanner sc=new Scanner(System.in);
       int n=sc.nextInt();
       System.out.println(n+"th fibonaaci value:"+solution(n));
    }
    public static int fibonaaci(int n)
    {
        if(n==0||n==1) return n;
        return fibonaaci(n-1)+fibonaaci(n-2);
    }
    public static int solution(int n)
    {
        return fibonaaci(n);
    }
}
