class Golfer {
  constructor(person) {
    this.name = person.name;
    this.handicap = person.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(score){
    var averageScore = score + this.handicap;
    return `I usually shoot a ${averageScore} on average.`
  }
  playRound(hole){
   if (hole.difficulty === "hard") {
     this.frustration = 500
   } else {
      hole.diffculty === "medium"
      this.frustration = 100
   }
 }
 hitTheRange() {
 this.confidence += 10;
 }
 marvel(hole) {
   return `I love the ${hole.features[0]} and ${hole.features[1]} on this course!`
 }
 whatYaShoot(strokes){
   if(strokes > 0) {
     this.frustration += 20
    return `Doh!`;

  }else if(strokes === 0){
    this.frustration = 10
    return 'Booyah!'
  } else {
    this.frustration = 0
    return `I AM THE GREATEST GOLFER ALIVE!`
  }
 }
};


module.exports = Golfer;
