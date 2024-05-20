function convert(){
   let principalAmount = Number(document.getElementById("principalAmount").value);
   let interestRate= Number(document.getElementById("interest").value);
  let numberOfYears= Number(document.getElementById("years").value);
    let si = (principalAmount*interestRate*numberOfYears)/100;
    document.getElementById("result").innerHTML=` Principal Amount ${principalAmount}  Total Interest ${si}`;
}





