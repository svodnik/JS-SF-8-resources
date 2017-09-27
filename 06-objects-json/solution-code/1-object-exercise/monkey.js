// Create three monkey objects

var monkey1 = {
  name: "Hermione",
  species: "howler",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey1.name +". I come from the "+ monkey1.species + " family. I have eaten these foods: "+ monkey1.foodsEaten.join(", ") + ".");
  }
};

var monkey2 = {
  name: "Severus",
  species: "pygmy marmoset",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey2.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey2.name +". I come from the "+ monkey2.species + " family. I have eaten these foods: "+ monkey2.foodsEaten.join(", ") + ".");
  }
};

var monkey3 = {
  name: "Jane",
  species: "squirrel monkey",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey3.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey3.name +". I come from the "+ monkey3.species + " family. I have eaten these foods: "+ monkey3.foodsEaten.join(", ") + ".");
  }
};


// Create a constructor function that makes a monkey
/*
function Monkey(name, species) {
  this.name       = name;
  this.species    = species;
  this.foodsEaten = [];
  this.eatSomething = function(food) {
    this.foodsEaten.push(food);
  }
  this.introduce = function() {
    console.log("My name is "+ this.name +". I come from the "+ this.species + " family. I have eaten "+ this.foodsEaten.join(", ") + ".");
  }
}

var monkey1 = new Monkey("Jack", "Howler");
monkey1.eatSomething("banana");
monkey1.introduce();

var monkey2 = new Monkey("James", "Pygmy Marmoset");
monkey2.eatSomething("peach");
monkey2.eatSomething("plum");
monkey2.introduce();

var monkey3 = new Monkey("James", "Squirrel Monkey");
monkey3.eatSomething("pineapple");
monkey3.introduce();

// Getting properties using the dot syntax / bracket syntax
console.log(monkey1.name);
console.log(monkey1["name"]);
*/