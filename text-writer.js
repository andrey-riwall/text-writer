function textWriter(classEl, speed=200) {
    if (typeof classEl == "string") {
        let el = document.querySelector(classEl);
        let text = el.getAttribute('data-text');
        let i = 0;
        let textWriter = setInterval(function () {
            el.textContent += text[i];
            i = i + 1;
            if ( i > text.length - 1 ) {
                clearInterval(textWriter);
            }
        }, speed);
    } else {
        console.error('please specify an element')
    }
}

