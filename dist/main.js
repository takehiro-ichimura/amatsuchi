(()=>{var e={733:()=>{showLog=!0,function(e){var t={},n=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],i=n.length,a=e.toLowerCase(),r=function(e){return RegExp(e,"i").test(a)},o="gecko",s="webkit",p="chrome",d="firefox",g="safari",l="opera",c="android",x="blackberry",E=document.documentElement,w=[!/opera|webtv/i.test(a)&&/msie\s(\d+)/.test(a)?"ie ie"+(/trident\/4\.0/.test(a)?"8":RegExp.$1):r("firefox/")?o+" "+d+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+d+RegExp.$2+" "+d+RegExp.$2+"_"+RegExp.$4:""):r("gecko/")?o:r("opera")?l+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(a)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$3:""):r("konqueror")?"konqueror":r("blackberry")?x+(/Version\/(\d+)(\.(\d+)+)/i.test(a)?" "+x+RegExp.$1+" "+x+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(a)?" "+x+RegExp.$2+(RegExp.$3?" "+x+RegExp.$2+RegExp.$3:""):""):r("android")?c+(/Version\/(\d+)(\.(\d+))+/i.test(a)?" "+c+RegExp.$1+" "+c+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(a)?" device_"+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):r("chrome")?s+" "+p+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+p+RegExp.$2+(RegExp.$4>0?" "+p+RegExp.$2+"_"+RegExp.$4:""):""):r("iron")?s+" iron":r("applewebkit/")?s+" "+g+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+g+RegExp.$2+" "+g+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(a)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+g+"2_0":"312"==RegExp.$1?" "+g+"1_3":"125"==RegExp.$1?" "+g+"1_2":"85"==RegExp.$1?" "+g+"1_0":"":""):r("mozilla/")?o:"",r("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?"mobile":"",r("j2me")?"j2me":r("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(a)?"ios"+function(e,t){for(var n=(t=t.replace(".","_")).indexOf("_"),i="";n>0;)i+=" ios"+t.substring(0,n),n=t.indexOf("_",n+1);return i+" ios"+t}(0,RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(a)?RegExp.$1:""):r("playbook")?"playbook":r("kindle|silk")?"kindle":r("playbook")?"playbook":r("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(a)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):r("win")?"win"+(r("windows nt 6.2")?" win8":r("windows nt 6.1")?" win7":r("windows nt 6.0")?" vista":r("windows nt 5.2")||r("windows nt 5.1")?" win_xp":r("windows nt 5.0")?" win_2k":r("windows nt 4.0")||r("WinNT4.0")?" win_nt":""):r("freebsd")?"freebsd":r("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(a)?("lang_"+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" lang_"+RegExp.$1).replace("-","_"):""):"",r("ipad|iphone|ipod")&&!r("safari")?"ipad_app":""];function $(){var e=window.outerWidth||E.clientWidth,a=window.outerHeight||E.clientHeight;t.orientation=e<a?"portrait":"landscape",E.className=E.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(var r=i-1;r>=0;r--)if(e>=n[r]){t.maxw=n[r];break}for(var o in widthClasses="",t)widthClasses+=" "+o+"_"+t[o];return E.className=E.className+widthClasses,widthClasses}window.onresize=$,$();var R=w.join(" ")+" js ";E.className=(R+E.className.replace(/\b(no[-|_]?)?js\b/g,"")).replace(/^ /,"").replace(/ +/g," ")}(navigator.userAgent)}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}(()=>{const e=(e,t)=>{let n=t.innerHTML+"";e.forEach((e=>{n=n.replace(`<span class="auto-burasage">${e}</span>`,e)}));let i=[];Array.prototype.forEach.call(n,(t=>{e.includes(t)&&i.push(t)}));let a=n.split(/。|、|」|』|〟/);t.innerHTML=n;let r="";for(let e=0;e<a.length;e++){if(targetStr=i[e],r+=a[e],e==a.length-1){t.innerHTML=r;break}t.innerHTML=r+targetStr;const n=t.innerHTML+"",o=t.clientWidth;t.innerHTML=r+`<span class="auto-burasage">${targetStr}</span>`,t.clientWidth>=o?(t.innerHTML=n,r+=targetStr):r+=`<span class="auto-burasage">${targetStr}</span>`}},t=t=>{console.debug("burasage");const n=t.getElementsByTagName("p");for(let t=0;t<n.length;t++){const i=["。","、","」","』","〟"],a=n[t];e(i,a)}},i=e=>{let n=window.innerHeight;t(e),window.addEventListener("resize",(function(){n!=window.innerHeight&&(t(e),n=window.innerHeight)}))};document.addEventListener("DOMContentLoaded",(function(e){(()=>{const e=document.getElementsByClassName("amatsuchi");for(let t=0;t<e.length;t++){const n=e[t];n.classList.contains("burasage")&&i(n)}})(),n(733)}))})()})();