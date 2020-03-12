using System.IO;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;


namespace bankApp
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintMenu();
        }


        static void PrintMenu()
        {
            Boolean running = true;
            var accounts = DeSerJSON();
            Console.WriteLine("Welcome to MyBank Application");


            while (running)
            {
                Console.WriteLine("Select an option");
                Console.WriteLine("1.) View accounts");
                Console.WriteLine("2.) View account by index");
                Console.WriteLine("3.) Exit");
                string input = Console.ReadLine();
                int number;

                if (Int32.TryParse(input, out number))
                {
                    switch (number)
                    {
                        case 1:
                            Console.WriteLine("Number\tOwner\tBalance\tLabel");
                            foreach (BankAccount a in accounts)
                            {
                                Console.WriteLine($"{a.Number}\t{a.Owner}\t{a.Balance}\t{a.Label}");
                            }
                            break;
                        case 2:

                            Console.WriteLine("Enter ID to search for the account");
                            string input1 = Console.ReadLine();
                            Boolean found = false;
                            foreach (BankAccount a in accounts)
                            {
                                if (input1.Equals(a.Number))
                                {
                                    found = true;
                                    Console.WriteLine("Number\tOwner\tBalance\tLabel");
                                    Console.WriteLine($"{a.Number}\t{a.Owner}\t{a.Balance}\t{a.Label}");

                                }
                            }

                            if(!found){
                                Console.WriteLine("No results found");
                            }

                            break;
                        case 3:
                            running = false;
                            break;
                        default:
                            Console.WriteLine("Ooops! Invalid input");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine("Ooops! Wrong input, try again");

                }
            }
        }



        static List<BankAccount> DeSerJSON()
        {

            // read file into a string and deserialize JSON to a type
            //List<BankAccount> bankAccount = JsonConvert.DeserializeObject<BankAccount>(File.ReadAllText(@"\account.json"));

            // deserialize JSON directly from a file
            using (StreamReader file = File.OpenText("account.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<BankAccount>)serializer.Deserialize(file, typeof(List<BankAccount>));
            }
        }
    }
}
