// ==UserScript==
// @name         Freee_ChangeColor
// @namespace    http://gas.excelspeedup.com/
// @version      0.22
// @description  freeeの色を変える
// @author       m-haketa
// @match        https://secure.freee.co.jp/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  var getElement = function(string) {
    return document.querySelectorAll(string);
  };

  var changeStyleList = [
    {
      selector: ".tags-combobox__tagify-tag--partner",
      stylename: "backgroundColor",
      value: "#f5dede"
    },
    {
      selector: ".tagify-tag-bg-partner",
      stylename: "backgroundColor",
      value: "#f5dede"
    },
    {
      selector: ".expense",
      stylename: "backgroundColor",
      value: "#f5dede"
    },
    {
      selector: ".input-account-item",
      stylename: "backgroundColor",
      value: "#ffffff"
    }
  ];

  function setStyle(selector, stylename, value) {
    getElement(selector).forEach(function(element) {
      element.style[stylename] = value;
      console.log(element);
    });
  }

  function changeColor() {
    changeStyleList.forEach(function(styleData) {
      setStyle(styleData.selector, styleData.stylename, styleData.value);
    });
  }

  document.addEventListener("click", changeColor);
  document.addEventListener("readystatechange", changeColor);
})();
