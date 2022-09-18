class Roadrace {
 constructor(contest){
   this.name = contest.title;
   this.location = contest.city;
console.log ("HIIIII",this.location )
 }
}

// constructor(contest) {
//   this.name = contest.title;
//   this.location = contest.city;
//   this.distance = null;
//   this.participants = [];
// }
// setDistance(milage) {
//   this.distance = milage;
//     return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
module.exports = Roadrace;
