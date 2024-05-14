const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');
const {IsLoggedIn} = require('../middleware');
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': ATZxC28-BDevMcfU7xVwR3q-Fr4ZqzYx1B8z3UlGHF12emhEw3TtU2PkV4dcnrn5FPwo_lDatAObEHqg,
  'client_secret': EBFyQ3DWYE0JvyjUUbLAM3Hd9VuSvRNvlY4eUrBxFk2Abw5BcRngle-Uixspwr7lF5qi3yY6zUxPTp7X
});
// router.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));



router.post('/pay', IsLoggedIn, (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:3000/success",
          "cancel_url": "http://localhost:3000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Red Sox Hat",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Hat for the best team ever"
      }]
  };
  router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
              if(payment.links[i].rel === 'approval_url'){
                res.redirect(payment.links[i].href);
              }
            }
        }
      });
      
      });
  app.get('/cancel', (req, res) => res.send('Cancelled'));