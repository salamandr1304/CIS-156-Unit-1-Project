let startingbalance = parseInt(prompt("Please enter your account starting balance:"));
let interestrate = parseFloat(prompt("Please enter your interest rate as a decimal:"));

let oneyr = startingbalance * (1 + interestrate) ** (1);
let fiveyr = startingbalance * (1 + interestrate) ** (5);
let tenyr = startingbalance * (1 + interestrate) ** (10);

oneyr = oneyr.toFixed(2);
fiveyr = fiveyr.toFixed(2);
tenyr = tenyr.toFixed(2);

console.log(" ");
console.log("After 1 year, your account will contain $" + oneyr);
console.log("After 5 years, your account will contain $" + fiveyr);
console.log("After 10 year, your account will contain $" + tenyr);
