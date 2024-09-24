function showSectionById(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}


document.getElementById('search-btn').addEventListener('click', function(){
    showSectionById('donate-section')
});



document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-section')
});