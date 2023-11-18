function addRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100);
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML += '<span style="font-size: 2vh; text-shadow: none ">Random number: <span style="color: #000000">' + randomNumber + '</span></span>';
}

addRandomNumber()