import java.util.HashMap;
import java.util.Set;

public class JavaAnswers {


    // 1) Write a Java Program to iterate HashMap using While and advance for loop.

    public static void whileIterateHashMap(HashMap hm) {
        Object[] hms = hm.keySet().toArray();
        int i = 0;
        while(i < hms.length) {
            Object o = hm.get(hms[i]);

            // insert logic

            i++;
        }
    }

    public static void advancedForLoopIterateHashMap(HashMap hm) {
        Set hms = hm.keySet();
        for(Object o:hms) {
            Object obj = hm.get(o);

            //insert logic here
        }
    }

    /*
    2) Write a program which accepts two given String and checks if they are the rotation of each.
    If they then return true otherwise return false.
    A String is said to be a rotation of other string if they contain same characters
    and the sequence is rotated across any character, e.g. "dabc" is a rotation of "abcd" but "dbac" is not.
    */

    public static boolean stringRotation(String str1, String str2) {

        if(str1.length() != str2.length()) return false;

        for(int i = 0; i < str1.length(); i++){
            if(str2.contains(str1.substring(0,i)) && str2.contains(str1.substring(i,str1.length()-1))) {
                return true;
            }
        }

        for(int i = 0; i < str1.length(); i++){
            if(str1.contains(str2.substring(0,i)) && str1.contains(str2.substring(i,str1.length()-1))) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

    }
}