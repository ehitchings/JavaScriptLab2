" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  function Animal(name) {
    this.name = name;
    this.voice = "I have no mouth and I must scream";
    this.speak = function(){
      return "My name is " + this.name + " and I say \"" + this.voice + "\"" + '</br>';
    }
  }

  function Dog(name){
    this.name = name
    this.voice = "BARK!";
  }

  function Cat(name){
    this.name = name;
    this.voice = "MEOW!";
  }
  function Bird(name){
    this.name = name;
    this.voice = "CHIRP!";
  }



  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    Dog.prototype = new Animal();
    Cat.prototype = new Animal();
    Bird.prototype = new Animal();
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if(type == "Dog" || type == "dog"){
        var animal = new Dog(name);
      } else if (type == "cat" || type == "Cat"){
        var animal = new Cat(name);
      } else if (type == "bird" || type == "Bird"){
        var animal = new Bird(name);
      } else {
        var animal = new Animal(name);
      }

      var textOut = animal.speak();
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
