const h1 = document.querySelector('h1')

h1.style.border = '5px solid black';


h1.getAttribute ('class');

//setting class attribute as heading
h1.setAttribute('class', 'heading');

//Set class as something else

h1.setAttribute('class', 'heading');

//Set two classes on one attribute

h1.setAttribute('class', 'heading one')

//Remove class heading 

h1.setAttribute('class', 'one')


//But this is very inefficient so we have classList to simplify all this

h1.classList

h1.classList.add('heading')

h1.classList.add('two')

h1.classList.remove('one')

h1.classList.contains('heading')

h1.classList.toggle('animals')//class present<---add or remove---->absent

const b = document.querySelector('p b');

b.parentElement //for getting the parent of element

const para = document.querySelector('#special')

para.children//all children will be returned in array format

para.append('THIS IS SOME RANDOM TEXT')

const em = document.createElement('em');

em.innerText = 'New EM tag!!!!';

para.append(em);

// para.appendChild('Some TEXT')
//this will throw error as appendchild only appends element(Node) not text
//while append can do both

const para = document.querySelector('p')

para.prepened('THIS IS PREPENDED TEXT');

const h1 = document.querySelector('h1')

//Place element at position of choice using nearby tag
h1.after(h2)
h1.before(h2)

 const b = document.querySelector('b');

const para = document.querySelector('p')

para.removeChild(b)//first b tag in para would be removed

//Removing element
const list1 = document.querySelector('ul li:first-child')
const list2 = document.querySelector('ul')
list2.removeChild(list1)

//Removing element: better method
const Lastli = document.querySelector('ul li:last-child')
Lastli.remove()

