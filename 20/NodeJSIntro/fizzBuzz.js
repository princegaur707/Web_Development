//worst code in this scenario 
//modulous, division etc are very costly for machine while operations like addition, subtraction are fundamental and easy
function fizzBuzz(num) {
    
    for (let i = 1; i <= num; i++){
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzzz');
        }
        else if (i % 3 === 0) {//we are repeating this modulous checking(which is very costly for machine) which is a waste
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

//Okay not good
function fizzBuzzImproved(num) {
    
    for (let i = 1; i <= num; i++){
        
        let str = "";

        if (i % 3 === 0) {
            str += 'fizz';
        }
        if (i % 5 === 0) {
            str += 'buzz';
        }
        if (str === "") {
            str += i;
        }

        console.log(str);

    }
}


// fizzBuzz(20);

fizzBuzzImproved(20);