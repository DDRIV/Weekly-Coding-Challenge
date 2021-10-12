import java.util.Arrays;

public class JavaAnswers {

    /*
    1) Write a Java Program to iterate HashMap using While and advance for loop.

    2) Write a program which accepts two given String and checks if they are the rotation of each. 
    If they then return true otherwise return false. 
    A String is said to be a rotation of other string if they contain same characters 
    and the sequence is rotated across any character, e.g. "dabc" is a rotation of "abcd" but "dbac" is not.
    */

    public static boolean validateCard(String id){
        //String idStr = Long.toString(id);

        if(id.length() < 14 || id.length() > 19){
            return false;
        }

        int[] ints = new int[id.length()-1];
        for(int i = 0; i < ints.length; i++){
            int in = id.length()-i-2;
            int k = Integer.parseInt(id.substring(in, in+1));

            if((i+1)%2 != 0){
                if(k*2 >= 10) {
                    ints[i] = 1 + (k*2)%10;
                } else {
                    ints[i] = k*2;
                }
            } else {
                ints[i] = k;
            }
        }

        return Integer.parseInt(id.substring(id.length()-1)) == (10 - (Arrays.stream(ints).sum() % 10));
    }
}