const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');


btn.addEventListener('click',()=>{

    const todoText = inp.value;//taking value from input box

    if (todoText === "") {
        alert('Empty Todo');
        return;
    }

    const li = document.createElement('li');

    li.innerText = todoText;

    // adding remove todo event
    li.addEventListener('click', () => {
        li.remove();
    })

    list.append(li);

    inp.value = "";//clearing input at last

})