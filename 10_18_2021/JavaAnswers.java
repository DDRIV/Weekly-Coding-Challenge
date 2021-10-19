public class JavaAnswers {

//    Java: The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.
//
//    Create a function that takes a string and applies the Atbash cipher to it.
//
//    Examples
//    atbash("apple") --> "zkkov"
//
//    atbash("Hello world!") --> "Svool dliow!"
//
//    atbash("Christmas is the 25th of December") --> "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"
//
//    Notes:
//    Capitalisation should be retained.
//    Non-alphabetic characters should not be altered.

    public static String atbash(String word){
        int length = word.length();

        char[] w = word.toCharArray();
        char[] d = new char[length];

        for(int i = 0; i < length; i++){
            if(w[i] > 64 && w[i] <91){
                d[i] = oppositeLetter(w[i], 'A');
            } else if(w[i] > 96 && w[i] <123){
                d[i] = oppositeLetter(w[i], 'a');
            } else {
                d[i] = w[i];
            }
        }
        return String.valueOf(d);
    }

    private static char oppositeLetter(char letter, char baseLine){
        return (char) (2*baseLine + 25 - letter);
    }

    public static void main(String[] args) {

        System.out.println(atbash("abcdefghijklmnopqrstuvwxyz ZYXWVUTSRQPONMLKJIHGFEDCBA !@#$%^&*()_+{}|:<>?,./;'[]-=1234567890`~"));
    }
}