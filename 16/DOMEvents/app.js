const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');

function fun() {
    console.log('inside fun');
}

// btn.onclick = fun; no need to write bracket like fun() even fun is enough
btn.onclick = function() {
    console.log('Single click function')
}

btn.ondblclick = function(){
    console.log('Double click function')
}
//When we will double click, single click function will also run as button is being
//clicked single time also 

function scream() {
    console.log('SCREAM......');
}

function shout() {
    console.log('SHOUT.......');
}

// btn.onclick = scream;
//Here we face issue that if we want to add two functions(SCREAM, SHOUT) attached to btn as functions 
//we can't do that with this approach as onclick is just a property like color which will get replaced
//with the new value once you reassign it to something else

// -----------------------click events-------------------

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);


h1.addEventListener('click', () => {
    console.log('DONT CLICK ME!!!');
});


// ----------------------Mouse events----------------------

const buttons = document.querySelectorAll('section button');
for (let button of buttons) {
    button.addEventListener('mouseenter', (e) => {//mouseenter or anything like 
    //this like onclick pass event's object to call back function automatically
        e.target.style.border = '3px solid black';//e.target and button(name given above) are same
        e.target.style.backgroundColor = 'lightgreen';
        e.target.style.boxShadow = '1px 1px 3px gray';
    });
    button.addEventListener('mouseleave', (e) => {
        e.target.style.border = '';
        e.target.style.backgroundColor = '';
        e.target.style.boxShadow = '';
    });

}

h1.addEventListener('mouseenter', () => {
    h1.classList.add('heading');//we have added css to it(HTML + CSS + JavaScript linking)
});

h1.addEventListener('mouseleave', () => {
    h1.classList.remove('heading');
});



// --------------------keyboard Events-------------------------

const inp = document.getElementById('inp');

inp.addEventListener('keyup', () => {
    console.log(inp.value);//this is how google suggestion works it takes value
    //searches for similar then shows suggestion using DOM 
});

// --------------------form events----------------------------

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    // prevent the form to refresh the page by default
    e.preventDefault();

    console.log('Form Submitted');
})


// -------------------------other events-------------------------

const p = document.querySelector('p');

p.addEventListener('copy', () => {
    alert('Don\'t copy 😠')
})