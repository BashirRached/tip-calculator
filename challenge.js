// Good Luck! You got this 💪🏾
// Write your code here.


let bill = 75

let tip

if(bill >= 50 && bill <=300)
{
     tip = (bill * 15)/100 
     console.log(`The bill was ${bill}, and the tip was ${tip}, so`)
}
else if(bill > 300)
{
     tip = (bill * 20)/100
     console.log(`The bill was ${bill}, and the tip was ${tip}, so`)
}

let total_value = bill + tip
console.log(`The total amount is ${total_value}`)