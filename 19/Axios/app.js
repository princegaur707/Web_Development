/*Axios is a promise based third-party client side library that lets developers
make requests to either their own or a third-party server to fetch data*/ 

axios.get('https://api.apis.guru/v2/list.json')
    .then((res) => {
        console.log(res);//.data represent all data
    })
    .catch((err) => {
        console.log(err);
    });

/* Axios automatically adds data and in this data tag all other details are present
Axios take whole data packets in one go so, we don't need to write response.json
*/

/* Axios is used mostly */