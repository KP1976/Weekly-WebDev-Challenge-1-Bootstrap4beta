/* "browser" : true */
/* jshint browser : true */
/* global console, alert */
/* jshint esversion: 6 */

let TelValidation = (function () {
  'use strict';
  let s = {};

  function myFunction(input) { 
    console.log(input);
//    var costam = input.value.match(/^\d{10}$/);
//    
//    if (costam) {
//      return true;
//    } else {
//      alert("message");
//      return false;
//    }
  }

  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    myFunction(s.telVal.value);
  }

  return {
    init: init
  };
}());