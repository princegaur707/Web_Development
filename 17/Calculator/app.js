const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for (let button of buttons) {//we are adding eventlistener to every  button via loop
    
    button.addEventListener('click', (e) => {
       
        const buttonText = e.target.innerText;
        if (buttonText === 'C') {
            screen.value = "";
        }
        else if (buttonText === '←') {
            screen.value = screen.value.slice(0, -1);
        }
        else if (buttonText === '=') {

            try {
                screen.value = eval(screen.value);
            }
            catch (e) {
                screen.value = 'Invalid Operation'
            }
           
        }
        else {
            screen.value += buttonText;
        }
    
    });
}
