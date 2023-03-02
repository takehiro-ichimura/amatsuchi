const burasage = (amatsuchi) => {
    console.log("burasage")
    const paras = amatsuchi.getElementsByTagName("p");
    console.log(paras);
    for (let i = 0; i < paras.length; i++) {
        const para = paras[i];
        console.log("***PARA[" + i + "] " + para);
        const splitList = (para.innerHTML + "").split("。"); // deep copy
        let resultInnerHTML = "";
        for (let j = 0; j < splitList.length - 1; j++) {
            console.log("[eta] " + j)
            // j番目の文字列の後ろの「。」はぶら下げの方が良いか検証。
            resultInnerHTML += splitList[j];
            para.innerHTML = resultInnerHTML + "。";
            // 現在のwidth、innerHTMLを保存
            const currentInnerHTML = para.innerHTML + "";
            const currentWidth = para.clientWidth;
            // ぶら下げを代入してみる
            para.innerHTML = resultInnerHTML + '<span class="burasage">。</span>';
            // 新しいwidthを測定
            const newWidth = para.clientWidth;
            console.log(currentWidth)
            console.log(newWidth)
            // newWidth >= currentWidth のとき、戻す
            if (newWidth >= currentWidth) {
                para.innerHTML = currentInnerHTML;
                resultInnerHTML += "。";
            } else {
                console.log("採用")
                resultInnerHTML += '<span class="burasage">。</span>';
            }
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