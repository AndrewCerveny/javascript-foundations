class Runner {
  constructor(name,age){
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(distance){
    this.milesRun += distance;
    this.fitness += distance;
  }

  stretch() {
    this.fitness += .5;
  }

  runRace(raceName, miles) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(miles)

  }
}

module.exports = Runner;
