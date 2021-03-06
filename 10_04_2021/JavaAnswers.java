import java.util.Arrays;

public class JavaAnswers {

    /*
    Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.

    Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:

    Remove the last digit (this is the "check digit").
    Reverse the number.
    Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 --> 1 + 6 = 7).
    Add all digits.
    Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.

    Examples
    validateCard(1234567890123456) ➞ false

    // Step 1: check digit = 6, num = 123456789012345
    // Step 2: num reversed = 543210987654321
    // Step 3: digit array after selective doubling: [1, 4, 6, 2, 2, 0, 9, 8, 5, 6, 1, 4, 6, 2, 2]
    // Step 4: sum = 58
    // Step 5: 10 - 8 = 2 (not equal to 6) --> false

    validateCard(1234567890123452) --> true
     */

    public static boolean validateCard(String id){

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
