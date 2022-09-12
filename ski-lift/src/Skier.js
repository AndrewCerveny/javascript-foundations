class Skier {
constructor(name,ticketHolder) {
  this.name = name;
  this.hasLiftTicket = ticketHolder || 'true';
  this.skillLevel = 1
  this.nextSlope = 'green circle'
  }
takeLesson(){
  this.skillLevel += 1
  }
pickSlope() {
  if(this.skillLevel > 4 ) {
    this.nextSlope = 'black diamond'
  } else if (this.skillLevel === 3 || 4) {
    this.nextSlope = 'blue square'
  } else {
    this.skillLevel = 'green circle'
    }
  }
};

module.exports = Skier;
