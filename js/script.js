let targetDate = new Date("January 1 2026 00:00:00").getTime()

function timer(){
    let todayDate = new Date().getTime();
    let distance = targetDate - todayDate;
    days = Math.floor(distance/1000/60/60/24);
    hours = Math.floor(distance/1000/60/60)%24;
    minutes = Math.floor(distance/1000/60)%60;
    seconds = Math.floor(distance/1000)%60
    document.getElementById("demo").innerHTML=days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds";
}

setInterval(()=>{
    timer()
},1000)


// var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


// const startingMinutes = 10;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown(){
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

    // seconds = seconds < 10 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
// }