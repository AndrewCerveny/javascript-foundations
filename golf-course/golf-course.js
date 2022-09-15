class GolfCourse {
  constructor(course,level, num, features) {
    this.name = course;
    this.difficulty = level;
    this.openings = num;
    this.features = features; //array
    this.currentlyPlaying = [];

  }
  checkInGroup(group){
 var space = this.openings - group.length
// this.openings = space;

    if(group.length < this.openings) {
      for( var i = 0; i < group.length ; i++ ) {
        this.currentlyPlaying.unshift(group[i].name)
    }  this.openings = space 
     return 'You\'re checked in. Have fun!'
    } else {
     return 'Sorry, we are currently booked! Please come back later.'
   }
  }
};
// if statement

module.exports = GolfCourse;
