document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();

    // phone number & pin number value access
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '01868634721' && pinNumber === "1234") {
        window.location.href= "home.html"
    }else{
        alert('Wrong Phone or Pin Number')
    }







})
