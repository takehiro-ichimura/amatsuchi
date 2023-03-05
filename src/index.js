const burasageParagraphProcess = (burasageTargetList, para) => {
    let initialInnnerHTML = para.innerHTML + "";
    burasageTargetList.forEach((targetStr) => {
        initialInnnerHTML = initialInnnerHTML.replace(`<span class="auto-burasage">${targetStr}</span>`, targetStr)
    });
    let delimiterList = [];
    Array.prototype.forEach.call(initialInnnerHTML, (char) => {
        if (burasageTargetList.includes(char)) {
            delimiterList.push(char);
        }
    })
    console.log(delimiterList);
    let splitList = initialInnnerHTML.split(/。|、/); // shallow copy
    para.innerHTML = initialInnnerHTML;
    console.log(splitList)
    let resultInnerHTML = "";
    for (let j = 0; j < splitList.length - 1; j++) {
        targetStr = delimiterList[j];
        console.log("[eta] " + j)
        // j番目の文字列の後ろの「。」はぶら下げの方が良いか検証。
        resultInnerHTML += splitList[j];
        para.innerHTML = resultInnerHTML + targetStr;
        // 現在のwidth、innerHTMLを保存
        const currentInnerHTML = para.innerHTML + "";
        const currentWidth = para.clientWidth;
        // ぶら下げを代入してみる
        para.innerHTML = resultInnerHTML + `<span class="auto-burasage">${targetStr}</span>`;
        // 新しいwidthを測定
        const newWidth = para.clientWidth;
        console.log(currentWidth)
        console.log(newWidth)
        // newWidth >= currentWidth のとき、戻す
        if (newWidth >= currentWidth) {
            para.innerHTML = currentInnerHTML;
            resultInnerHTML += targetStr;
        } else {
            console.log("採用")
            resultInnerHTML += `<span class="auto-burasage">${targetStr}</span>`;
        }
    }
}

const burasage = (amatsuchi) => {
    console.log("burasage")
    const paras = amatsuchi.getElementsByTagName("p");
    console.log(paras);
    for (let i = 0; i < paras.length; i++) {
        const burasageTargetList = ["。", "、"]
        const para = paras[i];
        console.log("***PARA[" + i + "] " + para);
        burasageParagraphProcess(burasageTargetList, para);
    }
}

const debounce = (fn, interval) => {
    var timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn()
        }, interval)
    }
}

const amatsuchiProcess = (amatsuchi) => {
    let lastHeight = window.innerHeight;
    burasage(amatsuchi);
    window.addEventListener('resize', function () {
        if (lastHeight != window.innerHeight) {
            debounce(burasage(amatsuchi), 1000);
            lastHeight = window.innerHeight;
            console.log("height changed: " + lastHeight)
        }
    })
}

const main = () => {
    const amatsuchis = document.getElementsByClassName('amatsuchi');
    for (let i = 0; i < amatsuchis.length; i++) {
        const amatsuchi = amatsuchis[i];
        amatsuchiProcess(amatsuchi);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
    require("css-browser");
});