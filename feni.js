let Amount2 = document.querySelector('#remain-amount');
let remainAmount2 =5500;
Amount2.innerHTML = remainAmount2+ "BDT";

let feniTotal =document.querySelector("#fenii-total");

let sum2 = 0
feniTotal.innerText = sum2 + "BDT"


document.getElementById('donate-btn-f').addEventListener('click',function(event){
    event.preventDefault();

    const donateAmount2 = document.getElementById('donate-feni').value;

    const donate2 = parseFloat(donateAmount2);

    if(donate2===""){
        alert("Dear donator you have inputed a invalid value please try again");
    }

    else if(donate2>remainAmount2){
        alert("Dear donator you don't have enough balance according to your input");
    }

    else{
    const newAmount2 = remainAmount2-donate2;
    const newTotal2 = sum2 + donate2;

    document.getElementById('remain-amount').innerHTML = newAmount2 + "BDT";

    document.getElementById('feni-total').innerHTML = newTotal2 + "BDT";
    

    
    }
})

