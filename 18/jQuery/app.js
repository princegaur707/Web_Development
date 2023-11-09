//jQuery behaves like getter and setter
$('h1')//for selecting all h1 tags

$('h1').css('color')

$('h1').css('font-size')

//If we want to change color
$('h1').css('color', 'red')

//for selecting para with id = special
$('#special')

$('#special').css('text-decoration', 'line-through')

//For selecting the class
$('.fav-movie')

$('.fav-movie').css('color', 'red')

//In case of vanilla JS(pure JS):

// var movie = document.getElementsByClassName('fav-movie')
// for(let m of movie) {
//     m.style.color = blue;
// }

const styling = {
    color: 'red',
    backgroundColor: 'aqua',
    border:'5px solid black',
    padding: '16px',
    boxShadow: '1px 1px 3px gray'
}

//For adding this styling function to some element
$('h1').css(styling)
//only this and whole styling function will be added to h1 tag 
//as inline css

//Similarly we have other analogous methods also

//1) Textcontext: text() here

$('#special').text()

$('#special').text('This is a new para')//working as a setter

$('input')

$('input').first()

//2) GetAttribute, SetAttribute : attr() here

$('input').first().attr('type')//returns value of a type: GetAttribute

$('input').first().attr('type', 'date')//setting type as date: SetAttribute

$('input').first().attr('type', 'text')//reversing for understanding next
//3) val() -> For getting the input values

$('input').first().val() //for getting the value

$('input').first().val('This is new value')//For setting the value

console.log($('ul:first-of-type li:first-child').text())//first ul first list item

const obj = {
    color:'purple',
    backgroundColor:'aqua',
    border:'5px solid black',
    textShadow:'1px 2px 3px blue'
}
$('h1').css(obj)

//By default inline css will be added but if we want to add 
//external css class we will have to use below command

$('.fav-movie').addClass('animals')

//similary we have removeClass and toggleClass

