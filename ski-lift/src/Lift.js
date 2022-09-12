var Skier = require('./Skier');

class Lift {
  constructor(people) {
    this.inService = true
    this.limit = people
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(name, open) {
    
  }

}

module.exports = Lift;
