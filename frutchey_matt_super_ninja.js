class Ninja {
  constructor (name, health) {
  this.name = name;
  this.health = health;
  this.speed = 3;
  this.strength = 3;
  }
  sayName() {
    console.log(this.name)
  }
  showStats() {
    console.log(`${this.name} has ${this.health} HP, ${this.speed} speed, and ${this.strength} strength.`)
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200) 
    this.speed = 10; 
    this.strength = 10; 
    this.wisdom = 10
  }
  speakWisdom() {
    console.log(`*${this.name} grabs a choko and says,* "I drink...and I know things."`)
    super.drinkSake();
    super.showStats();
  }
}

const shohei = new Sensei("Shohei")
shohei.speakWisdom();
const shingo = new Sensei("Shingo")
shingo.speakWisdom();