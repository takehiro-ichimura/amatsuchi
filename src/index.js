const main = () => {
    // TODO: 文末にのみ適用したい
    // TODO: - などのローテート時の変換を入れる
    const amaTextContents = document.getElementsByClassName('ama-text-content');
    if (amaTextContents) {
        console.log(amaTextContents)
        for (let i = 0; i < amaTextContents.length; i++) {
            const classes = amaTextContents[i].className.split(' ')
            console.log(classes)
            if (classes.includes('tiny')) {
                tinySegmenter(amaTextContents[i]);
            } else if (classes.includes('mikan')) {
                mikanSegmenter(amaTextContents[i]);
            }
        }
    }
}

const tinySegmenter = (element) => {
    const TinySegmenter = require('tiny-segmenter');
    let segmenter = new TinySegmenter();
    const paragraphMsg = element.getElementsByTagName('p');
    for (let i = 0; i < paragraphMsg.length; i++) {
        let segs = segmenter.segment(paragraphMsg[i].textContent);
        const joinComma = (segs) => {
            const newSegs = [];
            for (let i = 0; i < segs.length; i++) {
                if (segs[i] === "。" || segs[i] === "、") {
                    newSegs[newSegs.length - 1] = newSegs[newSegs.length - 1] + segs[i];
                } else {
                    newSegs.push(segs[i]);
                }
            }
            return newSegs;
        }
        const SPAN_FORMER = '<span style="display:inline-block" role="presentation">';
        const newSeg = SPAN_FORMER + joinComma(segs).join('</span>' + SPAN_FORMER) + "</span>";
        paragraphMsg[i].innerHTML = newSeg;
    }
}

const mikanSegmenter = (element) => {
    const mikan = require('mikanjs');
    const paragraphMsg = element.getElementsByTagName('p');
    for (let i = 0; i < paragraphMsg.length; i++) {
        console.log(paragraphMsg[i].textContent)
        const segContents = mikan(paragraphMsg[i].textContent);
        console.log(segContents);
        paragraphMsg[i].innerHTML = segContents;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
});