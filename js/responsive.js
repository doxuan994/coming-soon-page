/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/

function responsiveFrame() {
    let frameWrapper = document.querySelector('.frameWrapper');
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');


    let frameWrapperClientHeight = frameWrapper.clientHeight;
    let secondClientHeight = second.clientHeight;
    let thirdClientHeight = third.clientHeight;


    // Landscape screen.
    if (frameWrapperClientHeight >= secondClientHeight) {
        let diff = secondClientHeight - frameWrapperClientHeight;

        // Fixed for Mobile Landscape
        if (thirdClientHeight < 150) {
            frameWrapper.style.top = diff + 36 + 'px';
        } else {
            frameWrapper.style.top = diff + 66 + 'px';
        }
    }
    // Portrait screen.
    else {
        let diff = secondClientHeight - frameWrapperClientHeight;
        // Fixed iPad Pro.
        if (thirdClientHeight > 450) {
            frameWrapper.style.top = diff + 80 + 'px';
        } else {
            frameWrapper.style.top = diff + 66 + 'px';
        }
    }
}

function responsiveFrameMobile() {
    let frameWrapperMobile = document.querySelector('.frameWrapperMobile');
    let second = document.querySelector('.second');

    let frameWrapperMobileClientHeight = frameWrapperMobile.clientHeight;
    let secondClientHeight = second.clientHeight;

    let diff = secondClientHeight - frameWrapperMobileClientHeight;

    frameWrapperMobile.style.top = diff + 26 + 'px';
}



/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/
window.addEventListener('resize', responsiveFrame);
window.addEventListener('resize', responsiveFrameMobile);


window.onload = function() {
    responsiveFrame();
    responsiveFrameMobile();
};
