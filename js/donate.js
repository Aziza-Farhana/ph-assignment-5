let Amount = document.querySelector('#remain-amount');
let remainAmount =5500;
Amount.innerHTML = remainAmount+ "BDT";

let noakhaliTotal =document.querySelector("#noakhali-total");

let sum = 0
noakhaliTotal.innerText = sum + "BDT"


document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const donateAmount = document.getElementById('donate-noakhali').value;

    const donate = parseFloat(donateAmount);

    if(donate===""){
        alert("Dear donator you have inputed a invalid value please try again");
    }

    else if(donate>remainAmount){
        alert("Dear donator you don't have enough balance according to your input");
    }

    else{
    const newAmount = remainAmount-donate;
    const newTotal = sum + donate;

    document.getElementById('remain-amount').innerHTML = newAmount + "BDT";

    document.getElementById('noakhali-total').innerHTML = newTotal + "BDT";
    

    
    };
});

