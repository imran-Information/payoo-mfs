document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
});

document.getElementById('add-money-button').addEventListener('click', function () {
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');

})