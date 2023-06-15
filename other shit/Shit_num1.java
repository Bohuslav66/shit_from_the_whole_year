import java.util.Scanner; 

public class Shit_num1 {

    public static void main(String[] args) {
        try (Scanner myObj = new Scanner(System.in)) {
            System.out.println("1. Sklep\n2. Prizemi\n3. 1.Patro\n4. 2.Patro");
   
            String Patra = myObj.nextLine();
            
            if (Patra == "1"){
                System.out.println("Mistnosti 5. \nAktivity:0");
            }
            else if(Patra == "2"){
                System.out.println("Mistnosti: 24\n Tridy:")
            }
        }
      } 
}