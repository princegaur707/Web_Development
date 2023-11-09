// const res = `{"ticker":{"base":"BTC","target":"USD","price":"54443.78504937","volume":"59595.34595152","change":"-132.90876402"},"timestamp":1633617181,"success":true,"error":""}`
// const data = JSON.parse(res);//we will have to parse as it will be difficult to 
//use the response string direct so we convert it to JS object
// console.log(data.ticker.price);//ticker is a property

//How to make a request using JS

//1) XML way: Not used these days
const req = new XMLHttpRequest();

req.onload = function () {
    const res = this.responseText;
    const data = JSON.parse(res);
    console.log(data.ticker.price);
}

req.onerror = function () {//If something goes wrong this will
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();
