/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mikanjs/src/mikan.js":
/*!*******************************************!*\
  !*** ./node_modules/mikanjs/src/mikan.js ***!
  \*******************************************/
/***/ (function(module, exports) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! mikan.js v1.0.13 | MIT License | https://github.com/trkbt10/mikan.js/blob/master/LICENSE */\n\n\n(function (root, factory) {\n  if (true) {\n    // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function () {\n\n  var joshi = /(でなければ|について|かしら|くらい|けれど|なのか|ばかり|ながら|ことよ|こそ|こと|さえ|しか|した|たり|だけ|だに|だの|つつ|ても|てよ|でも|とも|から|など|なり|ので|のに|ほど|まで|もの|やら|より|って|で|と|な|に|ね|の|も|は|ば|へ|や|わ|を|か|が|さ|し|ぞ|て)/g;\n  var numbers = /([0-9０-９零一二三四五六七八九十]+)/;\n  var keywords = /(\\&nbsp;|[a-zA-Z0-9]+\\.[a-z]{2,}|[一-龠々〆ヵヶゝ]+|[ぁ-んゝ]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+)/g;\n  var periods = /([\\.\\,。、！\\!？\\?]+)$/g\n  var units = /(px|point|＄|\\$|€|￥|ノット|ユーロ|ドル|円|里|百|千|万|億|兆|京|㌫|％|\\%|cm|m|km|㌢|㍍|㌖|センチメートル|メートル|キロ|キロメートル|°|度|ℓ|リットル|mℓ|ミリリットル|マイル|フィート)/i;\n  var bracketsBegin = /([〈《「『｢（(\\[【〔〚〖〘❮❬❪❨(<{❲❰｛❴])/g\n  var bracketsEnd = /([〉》」』｣)）\\]】〕〗〙〛}>\\)❩❫❭❯❱❳❵｝])/g\n\n\n\n  function SimpleAnalyze(str) {\n    if (!str) {\n      return [''];\n    }\n    var words = str.split(keywords).reduce(function (prev, word) {\n      return [].concat(prev, word.split(joshi));\n    }, []).reduce(function (prev, word) {\n      return [].concat(prev, word.split(numbers));\n    }, []).reduce(function (prev, word) {\n      return [].concat(prev, word.split(bracketsBegin));\n    }, []).reduce(function (prev, word) {\n      return [].concat(prev, word.split(bracketsEnd));\n    }, []).filter(function (word) {\n      return word;\n    });\n    var result = [];\n    var prevType = '';\n    var prevWord = '';\n    words.forEach(function (word) {\n      var periodToken = word.match(periods);\n      var joshiToken = word.match(joshi);\n      var token = periodToken || joshiToken;\n      if (word.match(numbers)) {\n        result.push(word);\n        prevType = 'number';\n        prevWord = word;\n        return\n      }\n      // 前が数字で、後ろが単位であれば数字と単位を結合する\n      if (word.match(units) && prevType === 'number') {\n        result[result.length - 1] += word;\n        prevType = 'unit';\n        prevWord = word;\n        return\n      }\n      if (word.match(bracketsBegin)) {\n        prevType = 'bracketBegin';\n        prevWord = word;\n        return\n      }\n      if (word.match(bracketsEnd)) {\n        result[result.length - 1] += word;\n        prevType = 'bracketEnd';\n        prevWord = word;\n        return\n      }\n\n      if (prevType === 'bracketBegin') {\n        word = prevWord + word\n        prevWord = ''\n        prevType = ''\n      }\n\n      // すでに文字が入っている上で助詞が続く場合は結合する（[単語][て|を|に|は|など]の形にする）\n      if (result.length > 0 && token && prevType === '') {\n        result[result.length - 1] += word;\n        prevType = 'keyword';\n        prevWord = word;\n        return\n      }\n\n      // 単語のあとの文字がひらがななら結合する\n      if (result.length > 1 && token || (prevType === 'keyword' && !prevWord.match(/^[とのに]$/g) && !prevWord.match(periods) && word.match(/[ぁ-んゝ]+/g))) {\n        result[result.length - 1] += word;\n        if (!joshiToken) prevType = ''\n        prevWord = word;\n        return;\n      }\n      result.push(word);\n      prevType = 'keyword';\n      prevWord = word;\n    });\n\n    return result;\n  }\n\n  function Mikan() {\n    var text = arguments.length <= 0 || arguments[0] === undefined\n      ? ''\n      : arguments[0];\n    var userOption = arguments.length <= 1 || arguments[1] === undefined\n      ? {}\n      : arguments[1];\n\n    var defaultOption = {\n      style: 'display:inline-block',\n      role: 'presentation',\n      className: ''\n    };\n    var option = {};\n    Object.keys(defaultOption).forEach(function (key) {\n      option[key] = (typeof userOption[key] === 'undefined')\n        ? defaultOption[key]\n        : userOption[key];\n    });\n\n    var attr = '';\n    option.style && (attr += \" style=\\\"\" + option.style + \"\\\"\");\n    option.role && (attr += \" role=\\\"\" + option.role + \"\\\"\");\n    option.className && (attr += \" class=\\\"\" + option.className + \"\\\"\");\n\n    var words = SimpleAnalyze(text);\n\n    var html = words.map(function (word) {\n      return '<span' + attr + '>' + word + '</span>'\n    }).join('');\n    return html;\n  }\n  Mikan.split = SimpleAnalyze;\n  return Mikan;\n});\n\n\n//# sourceURL=webpack:///./node_modules/mikanjs/src/mikan.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const main = () => {\n    const mikan = __webpack_require__(/*! mikanjs */ \"./node_modules/mikanjs/src/mikan.js\");\n    const paragraphMsg = document.getElementsByTagName('p');\n    for (let i = 0; i < paragraphMsg.length; i++) {\n        console.log(paragraphMsg[i].textContent)\n        const segContents = mikan(paragraphMsg[i].textContent);\n        console.log(segContents);\n        paragraphMsg[i].innerHTML = segContents;\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    main();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;