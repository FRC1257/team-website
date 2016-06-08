"use strict";

var currentDate = new Date().getTime();
var countdown = document.getElementById('countdown');

function postEventInProgress(event) {
    countdown.innerHTML = "<span>We are currently competing in " + event.link + "!</span>";
    countdown.parentElement.style.background="#3D763C";
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

    countdown.innerHTML = '<span class="days"><b>' + days +  '</b> Days</span> <span class="hours"><b>' + hours + '</b> Hours</span> <span class="minutes"><b>'
    + minutes + '</b> Minutes</span> <span class="seconds"><b>' + seconds + '</b> Seconds</span>';
}

class event {
    constructor(name, start, end, link) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.link = link;
    }

    post() {
        addCountdown(this.start);
    }
}


/* Main */
var events = [];
var eventPosted = false;

events.push(new event(
                'Midknight Mayhem',
                new Date('Jun, 25, 2016, 12:00:00 GMT-400').getTime(),
                new Date('Jun, 26, 2016, 12:00:00 GMT-400').getTime(),
                '<a target="_blank" href="http://www.midknightmayhem.org/">MidKnight Mayhem</a>'
                ));

events.push(new event(
                'Indiana Robotics Invitational',
                new Date('Jul, 15, 2016, 12:00:00 GMT-400').getTime(),
                new Date('Jul, 17, 2016, 12:00:00 GMT-400').getTime(),
                '<a target="_blank" href="http://indianaroboticsinvitational.org/">Indiana Robotics Invitational</a>'
                ));



//Sort the events array based on start date
events.sort(function(a,b) {return a.start - b.start; });

for(var currentEvent in events) {

    //If the curretEvent in the array hasn't occured yet,
    if(events[currentEvent].start > currentDate) {
        document.getElementById("nextevent").innerHTML = 'Next Event: ' + events[currentEvent].link;
        setInterval(function() { events[currentEvent].post(); }, 1000);
        eventPosted = true;
        break;
    } //If this statement is true, the start of the event has passed

    //If the event is in progress, post it as such
    else if(events[currentEvent].end > currentDate) {
        postEventInProgress(events[currentEvent]);
        eventPosted = true;
        break;
    }
}

if(!eventPosted) {
    document.getElementById("nextevent").innerHTML = '<span>We have no upcoming events!</span>';
}
