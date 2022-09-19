class Roadrace {
 constructor(contest){
   this.name = contest.title;
   this.location = contest.city;
   this.distance = null;
   this.participants = [];
 }
 setDistance(milage) {
   this.distance = milage;
   return`The ${this.name} in ${this.location} is a ${this.distance} mile race.`
 }

 registerParticipants(racer) {
   this.participants.push(racer);
  }

  completeRace() {
    for(var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance)
    }
  }

}

module.exports = Roadrace;
