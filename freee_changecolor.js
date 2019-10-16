// ==UserScript==
// @name         Freee_ChangeColor
// @namespace    http://gas.excelspeedup.com/
// @version      0.2
// @description  freeeの色を変える
// @author       m-haketa
// @match        https://secure.freee.co.jp/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  var getClass = function (string) { return document.querySelectorAll(string) };

  var changeStyleList = [
    {
      elements: getClass(".tags-combobox__tagify-tag--partner"),
      stylename: "backgroundColor",
      value: "#f5dede"
    },
    {
      elements: getClass(".expense"),
      stylename: "backgroundColor",
      value: "#f5dede"
    },
    {
      elements: getClass(".tagify-tag-bg-partner"),
      stylename: "backgroundColor",
      value: "#f5dede"
    }
  ];

  function setStyle(elements, stylename, value) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style[stylename] = value;
    }
  }

  function changeColor() {
    changeStyleList.forEach(function(styleData) {
      setStyle(styleData.elements, styleData.stylename, styleData.value);
    });
  }

  document.addEventListener("click", changeColor);
  document.addEventListener("readystatechange", changeColor);
})();
