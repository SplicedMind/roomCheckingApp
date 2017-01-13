var meetingRoom = {
  'AWD1': 'Avialable',
  'AWD2': 'Not Avialable',
  'AWD3': 'Not Avialable',
  'AWD4': 'Not Avialable',
}
var learnRoom = {
  'AWD1': 'Avialable',
  'AWD2': 'Avialable',
  'AWD3': 'Not Avialable',
  'AWD4': 'Not Avialable',
}
var gamesRoom = {
  'AWD1': 'Avialable',
  'AWD2': 'Avialable',
  'AWD3': 'Not Avialable',
  'AWD4': 'Avialable',
}
var quietTime = {
  'AWD1': 'Avialable',
  'AWD2': 'Not Avialable',
  'AWD3': 'Not Avialable',
  'AWD4': 'Avialable',
}
var workingRoom = {
  'AWD1': 'Avialable',
  'AWD2': 'Avialable',
  'AWD3': 'Not Avialable',
  'AWD4': 'Not Avialable',
}

var getRoom = function (room) {
  if (room === 'meeting room') {
    return meetingRoom;
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