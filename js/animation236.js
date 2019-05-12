/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/





/*******************************************************************************
*
* Using JS to create typewriter animation effect.
* Work for any array string input.
*
*******************************************************************************/
let i = 0;
function typeWriter(id, inputArray, elementIndex) {
    let idInput = document.getElementById(id);
    let cursor = idInput.querySelector('.cursor');
    cursor.style.display = 'inline-block';

    let firstline = idInput.querySelector('.firstline');
    let aString = inputArray[elementIndex];

    // If full string hasn't yet been typed out, continue typing.
    if (i < aString.length) {
        firstline.innerText = firstline.innerText + aString.charAt(i);
    }
    i++;

    // Duration of 4s.
    setTimeout(typeWriter, 100, id, inputArray, elementIndex);
}





/*******************************************************************************
*
* It depends on the cookie,
* CTA text will show or
* the text in number 6 shows.
*
*
*
******************************************************************************/
let textArray = ["Want a cool logo, video, website or app?", "Let's build something wonderful! ❤️."];
function txtAppear() {
    let emailForm = document.getElementById('emailForm');

    // Number 6
    // After the user hits send, the page redirect to Formspree reCAPTCHA page.
    // When users are not a robot, redirect back to the original page.
    // Here the text entry field animates out (animate to a point) and
    // the following text appears: Let's build something wonderful! ❤️.
    if (getCookie('sent') >= 1) {
        setTimeout(typeWriter, 500, 'txtIn6', textArray, 1);
    } else {
        // Number 2
        // Animated call to action (CTA) text: Want a cool logo, video, website, or app?
        // Text animation begins 0.5s after page loads. Animation style: typewriter.
        // Run the loop after 0.5s delay.
        setTimeout(typeWriter, 500, 'ctaTxtWrapper', textArray, 0);
    }
}






/*******************************************************************************
*
* Button animates to view 0.25s after CTA text animation is complete.
*
******************************************************************************/
function btnAppear() {
    // Number 3
    // Animated CTA button below CTA text.
    // Button animates to view 0.25s after CTA text animation is complete
    // Run the addCtaBtn function after 0.25s delay.
    let ctaBtn = document.getElementById('ctaBtn');
    ctaBtn.style.display = 'block';
}

function btnChangeColorandTxt() {
    // Number 7
    // About 1s after the text in 6 appears,
    // the link with text ‘re-send form’, appears below the text.

    let ctaBtn = document.getElementById('ctaBtn');
    ctaBtn.innerText = 'Re-send form';
    ctaBtn.style.display = 'block';
    ctaBtn.style.backgroundColor = '#108AF3';

}

function showBtn() {
    if (getCookie('sent') >= 1) {
        setTimeout(btnChangeColorandTxt, 5000);
    } else {
        setTimeout(btnAppear, 4250);
    }
}







/*******************************************************************************
*
* cookies handling
*
******************************************************************************/
function setCookies(cname, value) { document.cookie = cname + "=" + value; }
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}











/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/
// Number 2 or number 6
txtAppear();

// Number 3 or number 7
showBtn();



// Submit form handling.
let emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', function() {
    if (typeof(localStorage.sent) == "undefined") {
        localStorage.sent = 1;

        let value = localStorage.sent;
        setCookies('sent', value);
    } else {
        localStorage.sent++

        let value = localStorage.sent;
        setCookies('sent', value);
    }
}, false);
