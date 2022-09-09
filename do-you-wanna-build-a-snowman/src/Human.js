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
  }
  gatherMaterials(bodyPart,amount) {
    this.materials[bodyPart] += amount
  }
  buildASnowman() {
    var frosty = new Snowman(this.materials);
    return frosty
  }
  placeMagicHat() {
    function buildASnowman() {
      console.log(frosty)
    }
  }
};

// ; && Snowman.magicHat = true){
//       'Woah, this snowman is coming to life!'
//   } else {
//     return 'I guess I didn\'t build it correctly.'
// return'Woah, this snowman is coming to life!'
module.exports = Human;
