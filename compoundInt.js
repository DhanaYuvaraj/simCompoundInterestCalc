compoundCalculator=()=>{

    let principal = document.getElementById("principalAmount").value;
    let rate = document.getElementById("rateOfInterest").value;
    let time = document.getElementById("time").value;

    let amount= principal*(Math.pow((1+rate/100),time));
    let compoundInterest = amount - principal;

    document.getElementById("result").innerHTML=` Total Interest is ${compoundInterest.toFixed(2)} Total amount ${amount.toFixed(2)}`;
}
    