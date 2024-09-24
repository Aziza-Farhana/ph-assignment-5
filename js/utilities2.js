function getInputFeildValueById(id){
    const donation = document.getElementById(id).value;

    return donation;
}

document.getElementById('donate-btn').addEventListener('click', function(){
   const addMoney = getInputFeildValueById('donate-noakhali');
   document.getElementbyId('noakhali-total').innerText = addMoney;
});