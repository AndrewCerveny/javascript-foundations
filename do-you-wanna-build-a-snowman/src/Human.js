var Snowman = require('./Snowman');

class Human {
  constructor(name,) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs:0,
      coal:0,
      buttons:0,
      carrots:0,
    };
    this.newSnowman = null;
  }
  gatherMaterials(bodyPart,amount) {
    this.materials[bodyPart] += amount
  }
  buildASnowman() {
    var frosty = new Snowman(this.materials);
    frosty.canWearMagicHat()
    this.newSnowman = frosty.magicHat
    return frosty
  }

  placeMagicHat() {
    if (this.newSnowman === false) {
      return 'I guess I didn\'t build it correctly.'
    } else {
      return 'Woah, this snowman is coming to life!'
    }
  }
};

//
module.exports = Human;
