class Material {
  constructor(type,price,amount,units) {
  this.name = type;
  this.price = price;
  this.amount = amount;
  this.units = units;
  }
  useMaterial(utilized){
    if(utilized > this.amount) {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      this.amount = this.amount -= utilized
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
  }

  calculateMaterialCost(){
    return this.price * this.amount
  }
}

module.exports = Material;
