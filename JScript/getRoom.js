function getRoom() {
 
  var rooms = document.getElementById('s').value;
   alert('getRoom Successfully Called ' + rooms);
  var meetingRoom = {
  'Meeting Room 1': 'Avialable',
  'Meeting Room 2': 'Not Avialable',
  'Meeting Room 3': 'Not Avialable',
  'Meeting Room 4': 'Not Avialable'
};
var learnRoom = {
  'Learning Room 1': 'Avialable',
  'Learning Room 2': 'Avialable',
  'Learning Room 3': 'Not Avialable',
  'Learning Room 4': 'Not Avialable',
  'Learning Room 5': 'Avialable'
};
var gamesRoom = {
  'Games Room 1': 'Avialable',
  'Games Room 2': 'Avialable',
  'Games Room 3': 'Not Avialable',
  'Games Room 4': 'Avialable'
};
var quietTime = {
  'Quiet Room 1': 'Avialable',
  'Quiet Room 2': 'Not Avialable',
  'Quiet Room 3': 'Not Avialable',
  'Quiet Room 4': 'Avialable'
};
var workingRoom = {
  'Working Room 1': 'Avialable',
  'Working Room 2': 'Avialable',
  'Working Room 3': 'Not Avialable',
  'Working Room 4': 'Not Avialable',
  'Working Room 5': 'Avialable'
};
 
  if ('meetingRoom' === rooms) {
    alert('Meeting Room Selected');
    document.getElementById('d').innerHTML =  'Meeting Room 1: Avialable'
    + '</br>Meeting Room 2: Avialable </br> Meeting Room 3: Not Avialable </br>'
    + 'Meeting Room 5: Avialable </br> Meeting Room 6: Not Avialable';
    return true;
  } else if ('learningRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Learning Room 1: Avialable'
    + '</br>Learning Room 2: Avialable </br> Learning Room 3: Not Avialable </br>'
    + 'Learning Room 5: Avialable </br> Learning Room 6: Not Avialable';
    return true;
  }else if ('gamesRoom' === rooms) {
    document.getElementById('d').innerHTML =  'Games Room 1: Avialable'
    + '</br>Games Room 2: Avialable </br> Games Room 3: Not Avialable </br>'
    + 'Games Room 5: Avialable </br> Games Room 6: Not Avialable';
    return gamesRoom;
  } else if ('quietTimeRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Quiet Time Room 1: Avialable'
    + '</br>Quiet Time Room 2: Avialable </br> Quiet Time Room 3: Not Avialable </br>'
    + 'Quiet Time Room 5: Avialable </br> Quiet Time Room 6: Not Avialable';
    return quietTime;
  } else if ('workingRoom' === rooms) {
   document.getElementById('d').innerHTML =  'Working Room 1: Avialable'
    + '</br>Working Room 2: Avialable </br> Working Room 3: Not Avialable </br>'
    + 'Working Room 5: Avialable </br> Working Room 6: Not Avialable';
    return workingRoom;
  } else {
    return `No room named ${room}`
  }
}