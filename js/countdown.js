// set the date we're counting down to
var date_one = new Date('Jun, 25, 2016').getTime(); // MidKnight Mayhem
var date_two = new Date('Jul, 15, 2016').getTime(); //IRI
var target_date = new Date().getTime();

//Change with each event.  "Next Event" can be removed if you want...
// Also, this is all /*Logic*/

var predecessorstring='Next Event: ';
var eventone = predecessorstring.concat('<a href="http://www.midknightmayhem.org/">MidKnight Mayhem</a>');
var eventtwo = predecessorstring.concat('<a href="http://indianaroboticsinvitational.org/">Indiana Robotics Invitational</a>');

if (date_one > new Date().getTime() && date_two > new Date().getTime()) //less than both dates
{
	document.getElementById("nextevent").innerHTML = eventone;
	target_date=date_one;
}
else if (date_one < new Date().getTime() && date_two > new Date().getTime()) //less than second, but not first.
{
target_date=date_two;
document.getElementById("nextevent").innerHTML = eventone;
}
else //It's past the last event.
{
	target_date=date_two;
	document.getElementById("nextevent").innerHTML = 'Time Since Last Event: <a href="http://indianaroboticsinvitational.org/">Indiana Robotics Invitational</a>';
}

//Actual timer functions & not logic.

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
    + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';

}, 500);
