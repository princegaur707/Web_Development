const socket = io();

$('#chat-box').hide();//jQuery function to hide something

$('#send-btn').click(() => {//for getting the text from textarea
    const msgText = $('#inp').val();
    console.log(msgText);

    socket.emit('send-msg', {//For loading on the pipeline
        msg: msgText
    })
    
    $('#inp').val("");//emptying the textbox

});

socket.on('received-msg', (data) => {//For listening from pipeline
    $('#chat').append(`<li class="border p-2 ms-0  rounded-pill mb-2"><span class="fw-bold">${data.id}</span> - <span>${data.msg}</span></li>`)
});

$('#login-btn').click(() => {
    const username = $('#username').val();
    socket.emit('login', {
        username: username
    })
    $('#login').hide();
    $('#chat-box').show();
    $('#username').val("");//emptying after using
}) 