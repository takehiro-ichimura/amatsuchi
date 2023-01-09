const main = () => {
    const TinySegmenter = require('tiny-segmenter');
    let segmenter = new TinySegmenter();
    const paragraphMsg = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphMsg.length; i++) {
        console.log(paragraphMsg[i].textContent)
        const segs = segmenter.segment(paragraphMsg[i].textContent);
        console.log(segs.join('|'))
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    main();
});