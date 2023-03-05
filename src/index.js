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
    let splitList = initialInnnerHTML.split(/。|、/); // shallow copy
    para.innerHTML = initialInnnerHTML;
    let resultInnerHTML = "";
    for (let j = 0; j < splitList.length - 1; j++) {
        targetStr = delimiterList[j];
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
        // newWidth >= currentWidth のとき、戻す
        if (newWidth >= currentWidth) {
            para.innerHTML = currentInnerHTML;
            resultInnerHTML += targetStr;
        } else {
            resultInnerHTML += `<span class="auto-burasage">${targetStr}</span>`;
        }
    }
}

const burasage = (amatsuchi) => {
    console.debug("burasage")

    const paras = amatsuchi.getElementsByTagName("p");
    for (let i = 0; i < paras.length; i++) {
        const burasageTargetList = ["。", "、"]
        const para = paras[i];
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
        }
    })
}

const main = () => {
    const amatsuchis = document.getElementsByClassName('amatsuchi');
    for (let i = 0; i < amatsuchis.length; i++) {
        const amatsuchi = amatsuchis[i];
        console.log(amatsuchi.classList)
        if (amatsuchi.classList.contains('burasage')) {
            amatsuchiProcess(amatsuchi);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
    require("css-browser");
});