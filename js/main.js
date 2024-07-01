import { calculateInterestRate } from "./interest";
import { calculateLoan } from "./loan";
import { calculateInvestment } from "./investment";

//function binding for interest
const Principal = document.getElementById("Principal").value
const Rate = document.getElementById("Rate").value;
const Time= document.getElementById("Time").value;

document.getElementById("calculateInterestBtn").addEventListener("click", function (){
    const interest=calculateInterestRate(Principal,Rate, Time)
    document. getElementById("interest").innerText(`Interest : ${interest}`)
})

document.getElementById("calculateLoanBtn").addEventListener("click", function (){
    const loan=calculateLoan(Principal,Rate, Time)
    document. getElementById("loan").innerText(`Loan : ${loan}`)
})

document.getElementById("calculateInvestmentbtn").addEventListener("click", function (){
    const investment=calculateInterestRate(Principal,Rate, Time)
    document. getElementById("investment").innerText(`Investment : ${investment}`)
})

