const burasage = (amatsuchi) => {
    console.log("burasage")
    const paras = amatsuchi.getElementsByTagName("p");
    console.log(paras);
    for (let i = 0; i < paras.length; i++) {
        const para = paras[i];
        console.log("***PARA[" + i + "] " + para);
        const splitList = (para.innerHTML + "").split("。"); // deep copy
        let resultInnerHTML = ""

        for (let j = 0; j < splitList.length; j++) {
            console.log("[eta] " + j)
            // 後ろからj番目の文字列の後ろの「。」はぶら下げの方が良いか検証。
            resultInnerHTML = splitList[splitList.length - j - 1] + resultInnerHTML;
            console.log("resultrHTML1")
            console.log(resultInnerHTML)
            // 現在のwidth、innerHTMLを保存
            const currentInnerHTML = para.innerHTML + "";
            const currentWidth = para.clientWidth;
            // ぶら下げを代入してみる
            para.innerHTML = splitList.slice(0, splitList.length - j - 1).join("。") + '<span class="burasage">。</span>' + resultInnerHTML;
            console.log("paraInnnerHTML")
            console.log(para.innerHTML)
            // 新しいwidthを測定
            const newWidth = para.clientWidth;
            // newWidth >= currentWidth のとき、戻す
            console.log(newWidth)
            console.log(currentWidth)
            if (newWidth >= currentWidth) {
                para.innerHTML = currentInnerHTML;
                resultInnerHTML = "。" + resultInnerHTML;
            } else {
                console.log("採用")
                resultInnerHTML = '<span class="burasage">。</span>' + resultInnerHTML;
            }
            console.log("resultrHTML2")
            console.log(resultInnerHTML)
        }
    }
}

const amatsuchiProcess = (amatsuchi) => {
    burasage(amatsuchi);
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