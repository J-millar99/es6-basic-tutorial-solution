//1) * 를 사용하여 모든 함수를 import
//import * as mortgage from './mortgage'; 

//2) calculateAmortization 함수만 import
import { calculateAmortization } from "./mortgage";

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    // let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    //let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(principal, years, rate);
    // 1)
    //let { monthlyPayment, monthlyRate, amortization } = mortgage.calculateAmortization(principal, years, rate);

    // 2)
    let { monthlyPayment, monthlyRate, amortization } = calculateAmortization(principal, years, rate);

    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(month => console.log(month));
});