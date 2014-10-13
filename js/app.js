"use strict";

var name = 'Rylan';
var fruits = ['apple', 'pear', 'kiwi', 'banana'];


function sayHello() {
    alert('Hello ' + name);
}

document.addEventListener('DOMContentLoaded', function() {
    var index;
    var fruitListElem = document.getElementById('fruit-list');
    var fruitLi;
    var animalSound = document.getElementById('animal-sound');

    var msgElem = document.getElementById('message');
    msgElem.innerHTML = 'Hello ' + name;

    for (index = 0; index < fruits.length; ++index) {
        console.log(fruits[index]);
        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[index];
        fruitListElem.appendChild(fruitLi);
    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click', function() {
       msgElem.innerHTML = 'Bark!';
       animalSound.play();
    });

    animalSound.addEventListener('ended', function() {
        msgElem.innerHTML = '&nbsp;';
    })

    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000);
});
