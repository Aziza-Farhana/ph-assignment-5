let totalClass = document.getElementsByClassName('total-class');

let myBalance = document.getElementById('remain-amount');

let balance = 5500;

console.log(balance)

myBalance.innerHTML = balance + "BDT"

let inputValue = document.getElementsByTagName('input').value;

let donateAmount = parseFloat(inputValue);

console.log(donateAmount)

function substraction(){
    

    if(donateAmount>balance){

        alert("Please try again.")
        


    }

    else{
        const currentBalance = balance-donateAmount;

        console.log(typeof(currentBalance));

        document.getElementById('remain-amount').innerText = currentBalance + "BDT";

       document.getElementById('noakhali-total').innerText = donateAmount + "BDT";
       

    }


};





document.getElementById('donate-btn-n').addEventListener('click', function(){

    substraction();
});
