"use strict";

var currentDate = new Date().getTime();
var countdown = document.getElementById('countdown');

function postEventInProgress(event) {
    countdown.innerHTML = "<span>We are currently competing in " + event.atag + "!</span>";
    countdown.parentElement.style.background = "#5aad62";
}

function addCountdown(futureDate) {
    var seconds_left = (futureDate - new Date().getTime()) / 1000;
    var days, hours, minutes, seconds;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    countdown.innerHTML = '<span class="days"><strong>' + days + '</strong> Days</span> <span class="hours"><strong>' + hours + '</strong> Hours</span> <span class="minutes"><strong>' + minutes + '</strong> Minutes</span> <span class="seconds"><strong>' + seconds + '</strong> Seconds</span>';
}

class event {
    constructor(name, start, end, link) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.link = link;
        this.atag = '<a target="_blank" href="' + link + '"><strong>' + name + '</strong></a>'
    }

    post() {
        addCountdown(this.start);
    }
}

/* Main */
var events = [];
var eventPosted = false;

events.push(new event(
    'MAR District Championship',
    new Date('Apr, 5, 2017, 8:00:00 GMT-400').getTime(),
    new Date('Apr, 8, 2017, 18:00:00 GMT-400').getTime(),
    'https://www.thebluealliance.com/event/2017mrcmp'
));

events.push(new event(
    'FIRST Championship (St. Louis)',
    new Date('Apr, 26, 2017, 8:00:00 GMT-400').getTime(),
    new Date('Apr, 29, 2017, 18:00:00 GMT-400').getTime(),
    'https://www.thebluealliance.com/event/2017cmpmo'
));

//Sort the events array based on start date
events.sort(function(a, b) {
    return a.start - b.start;
});

for (var currentEvent in events) {

    //If the currentEvent in the array hasn't occured yet,
    if (events[currentEvent].start > currentDate) {
        document.getElementById("nextevent").innerHTML = 'Next Event: <strong>' + events[currentEvent].atag + '</strong>';
        setInterval(function() {
            events[currentEvent].post();
        }, 1000);
        eventPosted = true;
        break;
    } //If this statement is true, the start of the event has passed

    //If the event is in progress, post it as such
    else if (events[currentEvent].end > currentDate) {
        postEventInProgress(events[currentEvent]);
        eventPosted = true;
        break;
    }
}

if (!eventPosted) {
    document.getElementById("nextevent").innerHTML = '<span>We have no upcoming events!</span>';
}
