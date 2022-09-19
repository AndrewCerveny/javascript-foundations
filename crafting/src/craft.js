class Craft {
 constructor(artWork) {
   this.name = artWork.type;
   this.materials = artWork.materials; // array w/2obj
   this.completed = false
  }
  completeCraft(){
    this.completed = true;
    return "All done! It looks great!"
  }

  calculateProjectTotal() {
  var canvasCost = this.materials[0].price * this.materials[0].amount
  var paintCost = this.materials[1].price * this.materials[1].amount
  return canvasCost + paintCost
  }
}

module.exports = Craft;
