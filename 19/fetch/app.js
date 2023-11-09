//returns a promise
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
       
        return res.json();
    })
    .then((data) => {
        console.log(data.ticker.price);
    })
    .catch((err) => {
        console.log(err);
        console.log('something went wrong')
    });


/*By default fetch will make GET request. 
We don't get whole response in one go. It comes in packets so, As soon as we get some packets
of response fetch resolve it's promise but we keep waiting for whole response
res.json() will resolve a promise once it gets whole data so, another resolve function will be called
for catching that we use another dot then function ".then(data)" return.json() sends the data in JS object format
*/