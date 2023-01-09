const main = () => {
    const TinySegmenter = require('tiny-segmenter');
    let segmenter = new TinySegmenter();
    const paragraphMsg = document.getElementsByTagName('p');
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
        const newSeg = '<span style="display:inline-block" role="presentation">' + joinComma(segs).join('</span><span style="display:inline-block" role="presentation">') + "</span>";
        paragraphMsg[i].innerHTML = newSeg;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
});