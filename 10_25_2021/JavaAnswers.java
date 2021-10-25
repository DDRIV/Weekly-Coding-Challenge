import java.util.Arrays;

public class JavaAnswers {

//    Find the Contiguous Subarray with Sum to a Given Value in an array.
//
//    For example :
//
//            1
//            2
//            3
//            4
//            5
//            6
//
//    arr[]={14, 12, 70, 15, 99, 65, 21, 90};
//    X =97.
//    Sum found between index 1 to 3
//    Elements are 12, 70 and 15

    public static int[] contSubSum(int[] arr, int sum){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] <= sum){
                int contSum = sum;
                for(int k = i; k < arr.length; k++){
                    contSum-=arr[k];
                    if(contSum == 0){
                        return Arrays.copyOfRange(arr,i,k+1);
                    }
                    if(contSum < 0){
                        break;
                    }
                }
            }
        }
        return new int[0];
    }

    public static void main(String[] args) {

        int[] a = {14,12,70,15,99,65,21,90};
        for(int i:contSubSum(a,2)){
            System.out.println(i);
        }
    }
}