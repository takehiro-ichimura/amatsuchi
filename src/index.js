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
    // TODO: 処理が厳しい場合、スキップするよう処理を追加
    let splitList = initialInnnerHTML.split(/。|、|」|』|〟|）|\)/); // ぶら下げ文字追加時はここを編集
    para.innerHTML = initialInnnerHTML;
    let resultInnerHTML = "";
    for (let j = 0; j < splitList.length; j++) {
        targetStr = delimiterList[j];
        // j番目の文字列の後ろの「。」はぶら下げの方が良いか検証。
        resultInnerHTML += splitList[j];
        if (j == splitList.length - 1) {
            // 最後の要素のとき、句読点は足さず終了
            para.innerHTML = resultInnerHTML;
            break;
        }
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
        const burasageTargetList = ["。", "、", "」", "』", "〟", "）", ")"] // ぶら下げ文字追加時はここを編集
        const para = paras[i];
        if (!para.classList.contains('burasage-off')) {
            burasageParagraphProcess(burasageTargetList, para);
        }
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

const amaFloatDisplayNoneOnMobile = () => {
    let timeoutId;
    const scrollTartget = document.getElementsByTagName("body")[0];
    scrollTartget.addEventListener('scroll', (event) => {
        document.getElementById("ama-float").style.display = "none"
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            var scroll_x = window.scrollX;
            document.getElementById("ama-float").style.display = "block"
            document.getElementById("ama-float").style.right = `calc(100% - 24px - 41px - ${scroll_x}px)`;
        }, 100);
    });
}

const main = () => {
    const amatsuchis = document.getElementsByClassName('amatsuchi');
    for (let i = 0; i < amatsuchis.length; i++) {
        const amatsuchi = amatsuchis[i];
        if (amatsuchi.classList.contains('burasage')) {
            amatsuchiProcess(amatsuchi);
        }
    }

    if (document.getElementById("ama-float") && document.getElementsByTagName("html")[0].classList.contains("mobile")) {
        amaFloatDisplayNoneOnMobile();
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    require("css-browser");
    main();
});