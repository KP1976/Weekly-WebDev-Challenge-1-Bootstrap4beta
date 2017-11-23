/* jshint browser: true */
/* global TelValidation */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  TelValidation.init({
    telVal: document.querySelector('input[type=tel]'),
    errorTel: document.getElementById('error-tel')
  });
});