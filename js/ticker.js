var xhr = new XMLHttpRequest();


// Variables to be used elsewhere by other teams n stuff.
var team_number = '1257';
var year = '2016';
var ticker_id_for_tba = 'frc1257:websiteticker:test';

xhr.open('GET', 'https://www.thebluealliance.com/api/v2/team/frc' + team_number + '/' + year + '/events?X-TBA-App-Id=' + ticker_id_for_tba, true);
xhr.send();
 
var response = "";
xhr.onreadystatechange = processRequest;
 
function processRequest(e) {
 if (xhr.readyState == 4 && xhr.status == 200) {
        response = JSON.parse(xhr.responseText);

    }
}

// /api/v2/team/frc254/event/2014casj/matches
