
class Dragon {
  constructor (name,rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.foodCounter = 0;
  }
greet(){
  return `Hi, ${this.rider}!`
}
eat() {
  this.foodCounter ++;
  if(this.foodCounter >= 3) {
    return this.hungry = false;
    }
  }
};




















































module.exports = Dragon;
