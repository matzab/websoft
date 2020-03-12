using System;

namespace bankApp
{
    public class BankAccount
    {

        public BankAccount(string owner, string number, int balance, string label)
        {
            this.Owner = owner;
            this.Number = number;
            this.Balance = balance;
            this.Label = label;
        }
        public string Number { get; }
        public string Owner { get; set; }
        public decimal Balance { get; }
        public string Label { get; }
    }
}