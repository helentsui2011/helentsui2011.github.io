


function sloth(name, age) {
  this.name = name;
  this.age = age;
  this.type = "dolphin";
  this.image = "dolphin.png"
}

function dolphin(name, age) {
  this.name = name;
  this.age = age;
  this.type = "dolphin";
  this.image = "dolphin.png"
}

function elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "elephant";
  this.image = "elephant.png"
}

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// function getRandomName {
//   getRandomIndex(maxIndex);

// }


function getRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
};


function generateRandomAge() {

}

var animal = [new sloth(), new dolphin(), new elephant()]; 
var names = ["Joji", "Vivian", "Bruno"];