import { calculateInterestRate } from "./interest.js";
import { calculateLoan } from "./loan.js";
import { calculateInvestment } from "./investment.js";

//function binding for interest


document.getElementById("calculateInterestBtn").addEventListener("click", function (){
    const Principal = document.getElementById("Principal").value;
    const Rate = document.getElementById("Rate").value;
    const Time= document.getElementById("Time").value;
    const interest=calculateInterestRate(Principal,Rate, Time);
    document. getElementById("interestrate").innerText=`Interest : ${interest}`;
    console.log("Calculation Done")})

document.getElementById("calculateLoanBtn").addEventListener("click", function (){
    const P = document.getElementById("P1").value;
    const r = document.getElementById("r1").value;
    const n = document.getElementById("n1").value;
    const loan=calculateLoan(P,r, n)
    document. getElementById("loan").innerText(`Loan : ${loan}`)
})

document.getElementById("calculateInvestmentBtn").addEventListener("click", function (){
    const P = document.getElementById("P2").value;
    const r = document.getElementById("r2").value;
    const n = document.getElementById("n2").value;
    const nt = document.getElementById("nt").value;
    const investment=calculateInvestment(P,r, n,nt)
    document. getElementById("investment").innerText(`Investment : ${investment}`)
})

