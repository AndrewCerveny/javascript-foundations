class Snowman {
  constructor(details) {
    this.carrots = details.carrots;
    this.coal = details.coal;
    this.buttons = details.buttons;
    this.snowballs = details.snowballs;
    this.magicHat = details.magicHat || false
  }
  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
    this.magicHat = false
  } else {
    this.magicHat = true
    }
  }
}

module.exports = Snowman;
