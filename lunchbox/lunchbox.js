class LunchBox {
  constructor(boxDetails){
    this.owner = boxDetails.owner;
    this.material = boxDetails.madeOf;
    this.shape = boxDetails.shape;
    this.color = boxDetails.color;
    this.snacks = [];

  }

  acquireSnack(snackType) {
    this.snacks.push(snackType)
    for( var i = 0; i < this.snacks.length; i++) {
      return this.snacks[i].isInLunchBox = true;
    }
  }

  findHealthySnacks() {
    var healthySnacks = [];

    for(var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    } return healthySnacks
  }
}

module.exports = LunchBox;
