function countdown() {
    const countDate = new Date("September 17, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Declaring the time, how the time works
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    // calculating the time 
    const theDays = Math.floor(gap / days);
    const theHours = Math.floor((gap % days) / hours)
    const theMinutes = Math.floor((gap % hours) / minutes)
    const theSeconds = Math.floor((gap % minutes) / seconds)

    // linking the time to read on the html page
    document.querySelector(".days-time").innerText = theDays;
    document.querySelector(".hours-time").innerText = theHours;
    document.querySelector(".minutes-time").innerText = theMinutes;
    document.querySelector(".seconds-time").innerText = theSeconds;



}

setInterval(countdown, 1000)