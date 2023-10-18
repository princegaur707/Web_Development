/* JS is single threaded and synchronous language*/
/* synchronous means: code executed line by line
console.log(1);//command 1
console.log(2);//2
console.log(3);//3
commands will be exectued in order 1 -> 2 and then 3
it is not possible that 1 and 3 commands will be executing simultaneously etc
other such scenarios.
*/
/* In some situations we need to cause delay in execution due to some 
requirements like waiting for the download of something then we use this
delay function
new Date().getTime()-miliseconds from standard time(Jan 01 1970)

*/
//This delay function will give delay of 1 second 
// function delay(n) {
    
/*
    for (let i = 1; i <= n; i++){
        const x = new Date().getTime();
        while(new Date().getTime()<x+1000){}
    }
    fun();
}
while this function is being executed if we simply only click a button the browser will get freezed this is due to JS being single threaded
so this is a major issue as it leads to bad user experience so, to deal with this issue we will be using the power of browsers(connectivity to server,
    timer, storage)
*/

// function fun() {
//    console.log('Inside Fun')
// } 

console.log("START");
setTimeout(function cb() {
    console.log('Inside cb');
}, 6000);
console.log('END');

/*Above code's output will be:
START
END
Inside cb
Here cb should have been printed before end but due to setTimeout it got printed later
*/

/*
In association with diagram at L14 1.30 and copy top:
To get back to the event which is having setTimeout we have "call back queue" which will have this event once the time will expire
We also have "Event loop" which will keep checking all the time the call stack whenever it will get empty and there is something 
present in call back queue it will instantaneously transfer it from "CB queue" to call stack which will be printed straight away
*/

/*The main purpose of introducting asynchoronous programming is using the API's (G search: WEB API MDN for more on API's)*/

/*SetInterval will keep executing after given interval(2000ms here) till we clearInterval function's timing to do not get over(10000 here)*/
// const id  = setInterval(function () {
//     console.log('Inside setInterval!!');
// }, 2000)

// setTimeout(function () {
//     clearInterval(id);
// }, 10000);
//in clearInterval id to be provided will be same as recorded for setInterval 