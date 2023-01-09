const main = () => {
    const mikan = require('mikanjs');
    const paragraphMsg = document.getElementsByTagName('p');
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