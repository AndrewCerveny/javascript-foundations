class Pirate {
  constructor(name,job,cursed){
    this.name = name
    this.job = job ||'scallywag'
    this.cursed = false
    this.booty = 0
    this.shipRobbed = 0
  }
  robShip() {
    this.shipRobbed++
    if(this.shipRobbed <= 5) {
      this.booty += 100
      return 'YAARRR!'
    } else {
      this.booty === 500
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    };
  };

  liftCurse() {
    if(this.shipRobbed === 1 && this.booty === 100) {
      this.cursed = false
      return 'You don\'t need to lift a curse!'
    } else {
      this.booty -= 300
      this.cursed = false
      return 'Your curse has been lifted!'
    }
  }
};






























module.exports = Pirate;
