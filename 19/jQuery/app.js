/* Uses callback which is not preferred these days*/

$.get('https://api.cryptonator.com/api/ticker/btc-usd', function (data) {
    console.log(data.ticker.price);
})


/* Steps to use:
1) Go to jQuery.com
2) Go to downloads
3) Go to compressed production jquery 
4) copy all text and paste in separate file called jQuery.js 

Steps to see all the functions
1) Go to API Documentation
2) Section AJAX
3) All function visible are for AJAX only 
*/