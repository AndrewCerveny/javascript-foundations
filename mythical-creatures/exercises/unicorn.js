class Unicorn {
  constructor(name, color) {
    this.name = name;
    if(color === undefined) {
      this.color = "white"
    } else {
      this.color = color;
    }
  }
  isWhite() {
    console.log(this.color);
    if(this.color !== 'white') {
      return false;
    }
  }
  says(emotion) {
    return `**;* ${emotion} *;**`;
  }
};

// read test
// ask yourself it will fail and why
// run test
// make it pass
module.exports = Unicorn;
