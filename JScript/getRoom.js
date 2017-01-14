function getRoom(room) {
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

  if (room === 'meeting room') {
    document.getElementById('d').innerHTML = meetingRoom.toString();
    return true;
  } else if (room === 'learning room') {
    return learnRoom;
  }else if (room === 'games room') {
    return gamesRoom;
  } else if (room === 'quiet time') {
    return quietTime;
  } else if (room === 'working room') {
    return workingRoom;
  } else {
    return `No room named ${room}`
  }
};

getRoom ('meeting room')