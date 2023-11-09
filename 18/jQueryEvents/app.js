$('#btn').click(function (e) {//activates on click like clickListener
    console.log(e)
    console.log('button clicked');
});


$('h1').on('click', function () {//like addEventListener
    $(this).css('color', 'red');//this represents h1 jQuery version
});

$('div').on('click', function () {
    $(this).hide();
});

$('#inp').keypress(function (e) {
    if (e.which === 13) {//which->property of event, returns value of key
        console.log('You Hit the Enter')
    }  
})