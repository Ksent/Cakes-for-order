'use strict';

let titleChoiceOne = document.querySelector('.choices-one__slides');
let choicesOneBtn = document.querySelectorAll('.choices-one__btn');

let titleChoiceTwo = document.querySelector('.choices-two__slides');
let choicesTwoBtn = document.querySelectorAll('.choices-two__btn');
let choicesTwoLink = document.querySelectorAll('.choices-two__link');

let titleChoiceThree = document.querySelector('.choices-three__slides');
let choicesThreeBtn = document.querySelectorAll('.choices-three__btn');
let choicesThreeLink = document.querySelectorAll('.choices-three__link');

let useInner = document.getElementById('topic-inner');
let useSize = document.getElementById('topic-size');
let useDecor = document.getElementById('topic-decor');


function makeOrder(target, targetButton, useChoise) {
  
  if (target.closest('a')) {
    
    for (let i = 0; i < targetButton.length; i++) {
      
      if (targetButton[i] == target.closest('a')) {
        useChoise.selectedIndex = i;
      }
      
    }
    
  } 
  
}

titleChoiceOne.addEventListener('click', function(evt) {
  let target = evt.target;
  makeOrder(target, choicesOneBtn, useInner);
});

titleChoiceTwo.addEventListener('click', function(evt) {
  let target = evt.target;
  makeOrder(target, choicesTwoBtn, useSize);
  makeOrder(target, choicesTwoLink, useSize);
});

titleChoiceThree.addEventListener('click', function(evt) {
  let target = evt.target;
  makeOrder(target, choicesThreeBtn, useDecor);
  makeOrder(target, choicesThreeLink, useDecor);
});    


