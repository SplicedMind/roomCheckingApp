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
  }
