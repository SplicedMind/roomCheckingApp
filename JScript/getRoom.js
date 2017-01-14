function getRoom() {
 
  var rooms = document.getElementById('s').value;
 
  if ('meetingRoom' === rooms) {
    document.getElementById('d').innerHTML =  'Meeting Room 1: Not Avialable'
    + '</br>Meeting Room 2: Avialable </br> Meeting Room 3: Not Avialable </br>'
    + 'Meeting Room 5: Avialable </br> Meeting Room 6: Not Avialable';
    return true;
  } else if ('learningRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Learning Room 1: Not Avialable'
    + '</br>Learning Room 2: Avialable </br> Learning Room 3: Avialable </br>'
    + 'Learning Room 5: Not Avialable </br> Learning Room 6: Not Avialable';
    return true;
  }else if ('gamesRoom' === rooms) {
    document.getElementById('d').innerHTML =  'Games Room 1: Avialable'
    + '</br>Games Room 2: Avialable </br> Games Room 3: Not Avialable </br>'
    + 'Games Room 5: Avialable </br> Games Room 6: Avialable';
    return gamesRoom;
  } else if ('quietTimeRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Quiet Time Room 1: Avialable'
    + '</br>Quiet Time Room 2: Not Avialable </br> Quiet Time Room 3: Not Avialable </br>'
    + 'Quiet Time Room 5: Not Avialable </br> Quiet Time Room 6: Avialable';
    return quietTime;
  } else if ('workingRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Working Room 1: Avialable'
    + '</br>Working Room 2: Not Avialable </br> Working Room 3: Not Avialable </br>'
    + 'Working Room 5: Avialable </br> Working Room 6: Not Avialable';
    return workingRoom;
  } else {
    document.getElementById('d').innerHTML =  'Please select a room category';
    return true;
  }
}