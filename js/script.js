"use strict";

let useInner = document.querySelector("#topic-inner");
let useSize = document.querySelector("#topic-size");
let useDecor = document.querySelector("#topic-decor");


//for all

if (window.innerWidth > 0) {
  document.querySelector("#inner-btn1").addEventListener("click", function(evt) {
    useInner.selectedIndex = 0;
  });

  document.querySelector("#inner-btn2").addEventListener("click", function(evt) {
    useInner.selectedIndex = 1;
  });

  document.querySelector("#inner-btn3").addEventListener("click", function(evt) {
    useInner.selectedIndex = 2;
  });

  document.querySelector("#inner-btn4").addEventListener("click", function(evt) {
    useInner.selectedIndex = 3;
  });

  document.querySelector("#inner-btn5").addEventListener("click", function(evt) {
    useInner.selectedIndex = 4;
  });

//for 320
  
  document.querySelector("#size-btn1").addEventListener("click", function(evt) {
    useSize.selectedIndex = 0;
  });

  document.querySelector("#size-btn2").addEventListener("click", function(evt) {
    useSize.selectedIndex = 1;
  });

  document.querySelector("#size-btn3").addEventListener("click", function(evt) {
    useSize.selectedIndex = 2;
  });

  document.querySelector("#size-btn4").addEventListener("click", function(evt) {
    useSize.selectedIndex = 3;
  });


  document.querySelector("#dessert-btn1").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 0;
  });

  document.querySelector("#dessert-btn2").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 1;
  });

  document.querySelector("#dessert-btn3").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 2;
  });

  document.querySelector("#dessert-btn4").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 3;
  });
  
  document.querySelector("#dessert-btn5").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 4;
  });
  
}

//for 768 and desktop

if (window.innerWidth > 768) {
  document.querySelector("#circle-btn1").addEventListener("click", function(evt) {
    useSize.selectedIndex = 0;
  });

  document.querySelector("#circle-btn2").addEventListener("click", function(evt) {
    useSize.selectedIndex = 1;
  });

  document.querySelector("#circle-btn3").addEventListener("click", function(evt) {
    useSize.selectedIndex = 2;
  });

  document.querySelector("#circle-btn4").addEventListener("click", function(evt) {
    useSize.selectedIndex = 3;
  });


  document.querySelector("#decor-btn1").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 0;
  });

  document.querySelector("#decor-btn2").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 1;
  });

  document.querySelector("#decor-btn3").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 2;
  });

  document.querySelector("#decor-btn4").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 3;
  });
  
  document.querySelector("#decor-btn5").addEventListener("click", function(evt) {
    useDecor.selectedIndex = 4;
  });

}
