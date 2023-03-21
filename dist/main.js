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

/***/ "./node_modules/css-browser/lib/browser-selector-min.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-browser/lib/browser-selector-min.js ***!
  \**************************************************************/
/***/ (() => {

eval("function log(e){window.console&&showLog&&console.log(e)}function css_browser_selector(e){var i={},o=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],n=o.length,a=e.toLowerCase(),r=function(e){return RegExp(e,\"i\").test(a)},t=\"gecko\",s=\"webkit\",p=\"chrome\",d=\"firefox\",g=\"safari\",l=\"opera\",x=\"android\",c=\"blackberry\",w=document.documentElement,E=[!/opera|webtv/i.test(a)&&/msie\\s(\\d+)/.test(a)?\"ie ie\"+(/trident\\/4\\.0/.test(a)?\"8\":RegExp.$1):r(\"firefox/\")?t+\" \"+d+(/firefox\\/((\\d+)(\\.(\\d+))(\\.\\d+)*)/.test(a)?\" \"+d+RegExp.$2+\" \"+d+RegExp.$2+\"_\"+RegExp.$4:\"\"):r(\"gecko/\")?t:r(\"opera\")?l+(/version\\/((\\d+)(\\.(\\d+))(\\.\\d+)*)/.test(a)?\" \"+l+RegExp.$2+\" \"+l+RegExp.$2+\"_\"+RegExp.$4:/opera(\\s|\\/)(\\d+)\\.(\\d+)/.test(a)?\" \"+l+RegExp.$2+\" \"+l+RegExp.$2+\"_\"+RegExp.$3:\"\"):r(\"konqueror\")?\"konqueror\":r(\"blackberry\")?c+(/Version\\/(\\d+)(\\.(\\d+)+)/i.test(a)?\" \"+c+RegExp.$1+\" \"+c+RegExp.$1+RegExp.$2.replace(\".\",\"_\"):/Blackberry ?(([0-9]+)([a-z]?))[\\/|;]/gi.test(a)?\" \"+c+RegExp.$2+(RegExp.$3?\" \"+c+RegExp.$2+RegExp.$3:\"\"):\"\"):r(\"android\")?x+(/Version\\/(\\d+)(\\.(\\d+))+/i.test(a)?\" \"+x+RegExp.$1+\" \"+x+RegExp.$1+RegExp.$2.replace(\".\",\"_\"):\"\")+(/Android (.+); (.+) Build/i.test(a)?\" device_\"+RegExp.$2.replace(/ /g,\"_\").replace(/-/g,\"_\"):\"\"):r(\"chrome\")?s+\" \"+p+(/chrome\\/((\\d+)(\\.(\\d+))(\\.\\d+)*)/.test(a)?\" \"+p+RegExp.$2+(RegExp.$4>0?\" \"+p+RegExp.$2+\"_\"+RegExp.$4:\"\"):\"\"):r(\"iron\")?s+\" iron\":r(\"applewebkit/\")?s+\" \"+g+(/version\\/((\\d+)(\\.(\\d+))(\\.\\d+)*)/.test(a)?\" \"+g+RegExp.$2+\" \"+g+RegExp.$2+RegExp.$3.replace(\".\",\"_\"):/ Safari\\/(\\d+)/i.test(a)?\"419\"==RegExp.$1||\"417\"==RegExp.$1||\"416\"==RegExp.$1||\"412\"==RegExp.$1?\" \"+g+\"2_0\":\"312\"==RegExp.$1?\" \"+g+\"1_3\":\"125\"==RegExp.$1?\" \"+g+\"1_2\":\"85\"==RegExp.$1?\" \"+g+\"1_0\":\"\":\"\"):r(\"mozilla/\")?t:\"\",r(\"android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk\")?\"mobile\":\"\",r(\"j2me\")?\"j2me\":r(\"ipad|ipod|iphone\")?(/CPU( iPhone)? OS (\\d+[_|\\.]\\d+([_|\\.]\\d+)*)/i.test(a)?\"ios\"+function(e,i){for(var o=(i=i.replace(\".\",\"_\")).indexOf(\"_\"),n=\"\";o>0;)n+=\" \"+e+i.substring(0,o),o=i.indexOf(\"_\",o+1);return n+=\" \"+e+i}(\"ios\",RegExp.$2):\"\")+\" \"+(/(ip(ad|od|hone))/gi.test(a)?RegExp.$1:\"\"):r(\"playbook\")?\"playbook\":r(\"kindle|silk\")?\"kindle\":r(\"playbook\")?\"playbook\":r(\"mac\")?\"mac\"+(/mac os x ((\\d+)[.|_](\\d+))/.test(a)?\" mac\"+RegExp.$2+\" mac\"+RegExp.$1.replace(\".\",\"_\"):\"\"):r(\"win\")?\"win\"+(r(\"windows nt 6.2\")?\" win8\":r(\"windows nt 6.1\")?\" win7\":r(\"windows nt 6.0\")?\" vista\":r(\"windows nt 5.2\")||r(\"windows nt 5.1\")?\" win_xp\":r(\"windows nt 5.0\")?\" win_2k\":r(\"windows nt 4.0\")||r(\"WinNT4.0\")?\" win_nt\":\"\"):r(\"freebsd\")?\"freebsd\":r(\"x11|linux\")?\"linux\":\"\",/[; |\\[](([a-z]{2})(\\-[a-z]{2})?)[)|;|\\]]/i.test(a)?(\"lang_\"+RegExp.$2).replace(\"-\",\"_\")+(\"\"!=RegExp.$3?(\" lang_\"+RegExp.$1).replace(\"-\",\"_\"):\"\"):\"\",r(\"ipad|iphone|ipod\")&&!r(\"safari\")?\"ipad_app\":\"\"];function R(){var e=window.outerWidth||w.clientWidth,a=window.outerHeight||w.clientHeight;i.orientation=e<a?\"portrait\":\"landscape\",w.className=w.className.replace(/ ?orientation_\\w+/g,\"\").replace(/ [min|max|cl]+[w|h]_\\d+/g,\"\");for(var r=n-1;r>=0;r--)if(e>=o[r]){i.maxw=o[r];break}for(var t in widthClasses=\"\",i)widthClasses+=\" \"+t+\"_\"+i[t];return w.className=w.className+widthClasses,widthClasses}window.onresize=R,R();var $=E.join(\" \")+\" js \";return w.className=($+w.className.replace(/\\b(no[-|_]?)?js\\b/g,\"\")).replace(/^ /,\"\").replace(/ +/g,\" \"),$}showLog=!0,css_browser_selector(navigator.userAgent);\n\n//# sourceURL=webpack://amatsuchi/./node_modules/css-browser/lib/browser-selector-min.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const burasageParagraphProcess = (burasageTargetList, para) => {\n    let initialInnnerHTML = para.innerHTML + \"\";\n    burasageTargetList.forEach((targetStr) => {\n        initialInnnerHTML = initialInnnerHTML.replace(`<span class=\"auto-burasage\">${targetStr}</span>`, targetStr)\n    });\n    let delimiterList = [];\n    Array.prototype.forEach.call(initialInnnerHTML, (char) => {\n        if (burasageTargetList.includes(char)) {\n            delimiterList.push(char);\n        }\n    })\n    // TODO: 処理が厳しい場合、スキップするよう処理を追加\n    let splitList = initialInnnerHTML.split(/。|、|」|』|〟/); // ぶら下げ文字追加時はここを編集\n    para.innerHTML = initialInnnerHTML;\n    let resultInnerHTML = \"\";\n    for (let j = 0; j < splitList.length; j++) {\n        targetStr = delimiterList[j];\n        // j番目の文字列の後ろの「。」はぶら下げの方が良いか検証。\n        resultInnerHTML += splitList[j];\n        if (j == splitList.length - 1) {\n            // 最後の要素のとき、句読点は足さず終了\n            para.innerHTML = resultInnerHTML;\n            break;\n        }\n        para.innerHTML = resultInnerHTML + targetStr;\n        // 現在のwidth、innerHTMLを保存\n        const currentInnerHTML = para.innerHTML + \"\";\n        const currentWidth = para.clientWidth;\n        // ぶら下げを代入してみる\n        para.innerHTML = resultInnerHTML + `<span class=\"auto-burasage\">${targetStr}</span>`;\n        // 新しいwidthを測定\n        const newWidth = para.clientWidth;\n        // newWidth >= currentWidth のとき、戻す\n        if (newWidth >= currentWidth) {\n            para.innerHTML = currentInnerHTML;\n            resultInnerHTML += targetStr;\n        } else {\n            resultInnerHTML += `<span class=\"auto-burasage\">${targetStr}</span>`;\n        }\n    }\n}\n\nconst burasage = (amatsuchi) => {\n    console.debug(\"burasage\")\n\n    const paras = amatsuchi.getElementsByTagName(\"p\");\n    for (let i = 0; i < paras.length; i++) {\n        const burasageTargetList = [\"。\", \"、\", \"」\", \"』\", \"〟\"] // ぶら下げ文字追加時はここを編集\n        const para = paras[i];\n        if (!para.classList.contains('burasage-off')) {\n            burasageParagraphProcess(burasageTargetList, para);\n        }\n    }\n}\n\nconst debounce = (fn, interval) => {\n    var timer\n    return function () {\n        clearTimeout(timer)\n        timer = setTimeout(function () {\n            fn()\n        }, interval)\n    }\n}\n\nconst amatsuchiProcess = (amatsuchi) => {\n    let lastHeight = window.innerHeight;\n    burasage(amatsuchi);\n    window.addEventListener('resize', function () {\n        if (lastHeight != window.innerHeight) {\n            debounce(burasage(amatsuchi), 1000);\n            lastHeight = window.innerHeight;\n        }\n    })\n}\n\nconst amaFloatDisplayNoneOnMobile = () => {\n    let timeoutId;\n    console.log(\"0\")\n    const scrollTartget = document.getElementsByTagName(\"body\")[0];\n    console.log(scrollTartget)\n    scrollTartget.addEventListener('scroll', (event) => {\n        console.log(\"set\")\n        document.getElementById(\"ama-float\").style.display = \"none\"\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(function () {\n            var scroll_x = window.scrollX;\n            document.getElementById(\"ama-float\").style.display = \"block\"\n            document.getElementById(\"ama-float\").style.right = `calc(100% - 24px - 41px - ${scroll_x}px)`;\n        }, 100);\n    });\n}\n\nconst main = () => {\n    const amatsuchis = document.getElementsByClassName('amatsuchi');\n    for (let i = 0; i < amatsuchis.length; i++) {\n        const amatsuchi = amatsuchis[i];\n        if (amatsuchi.classList.contains('burasage')) {\n            amatsuchiProcess(amatsuchi);\n        }\n    }\n\n    if (document.getElementById(\"ama-float\") && document.getElementsByTagName(\"html\")[0].classList.contains(\"mobile\")) {\n        amaFloatDisplayNoneOnMobile();\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    __webpack_require__(/*! css-browser */ \"./node_modules/css-browser/lib/browser-selector-min.js\");\n    main();\n});\n\n//# sourceURL=webpack://amatsuchi/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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