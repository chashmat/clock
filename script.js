
let style = document.createElement("style");
document.head.appendChild(style);
sheet = style.sheet;

// clock
let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.min');
let secHand = document.querySelector('.sec');

function clock(){
    let date = new Date();

    let hour = date.getHours() % 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();


    let hourDeg = (hour * 30) + (0.5 * min);
    let minDeg = min * 6;
    let secDeg = sec * 6;

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minHand.style.transform = 'rotate(' + minDeg + 'deg)';
    secHand.style.transform = 'rotate(' + secDeg + 'deg)';

    let hour2 = date.getHours();
    if (hour2 < 12 && hour2 >= 0){
        document.querySelector('.clock').setAttribute("title", hour2 + ':' + min + " AM");
    }
    if (hour2 >= 12 && hour2 < 23){
        document.querySelector('.clock').setAttribute("title", hour2 + ':' + min + " PM");
    }
    
    setTimeout(clock, 1000);
}
clock();

// AM PM function
function amPm(){
    let date = new Date();
    let hour = date.getHours();
    let am = document.querySelector('.am');
    let pm = document.querySelector('.pm');
    if (hour < 12 && hour >= 0) {
        am.style.display = 'block';
        pm.style.display = 'none';
    }
    if (hour >= 12 && hour <= 23) {
        pm.style.display = 'block';
        am.style.display = 'none';
    }
    setTimeout(amPm, 1000);
}
amPm();

let themesArea = document.querySelector('#main-theme');

// btn
let hand_styles_btn = document.querySelector('#hand-styles-btn');
let face_styles_btn = document.querySelector('#face-styles-btn');
let am_pm_styles_btn = document.querySelector('#am-pm-styles-btn');
let bg_styles_btn = document.querySelector('#background-styles-btn');

// area
let hand_styles = document.querySelector('#hand-styles');
let plate_styles = document.querySelector('#plate-styles');
let am_pm_styles = document.querySelector('#am-pm-styles');
let bg_styles = document.querySelector('#bg-styles');

// setting btn
function settings() {
    themesArea.style.display = 'block';
}

// close btn
function closeBtn() {
    themesArea.style.display = 'none';
}

// four theme btn
function handStyles(){
    hand_styles.style.display = 'block';
    plate_styles.style.display = 'none';
    am_pm_styles.style.display = 'none';
    bg_styles.style.display = 'none';
}
function faceStyles(){
    hand_styles.style.display = 'none';
    plate_styles.style.display = 'block';
    am_pm_styles.style.display = 'none';
    bg_styles.style.display = 'none';
}
function amPmStyles(){
    hand_styles.style.display = 'none';
    plate_styles.style.display = 'none';
    am_pm_styles.style.display = 'block';
    bg_styles.style.display = 'none';
}
function bgStyles(){
    hand_styles.style.display = 'none';
    plate_styles.style.display = 'none';
    am_pm_styles.style.display = 'none';
    bg_styles.style.display = 'block';
}

// seconed hand input variables
let sec_hand_color = document.querySelector('#input-sec-color');
let stylish_sec = document.querySelector('#sec-stylish-border');
let sec_shadow = document.querySelector('#sec-shad');
let sec_shadow_color = document.querySelector('#sec-shad-color');
let sec_shadow_blur = document.querySelector('#sec-shad-blur');
let sec_shadow_spread = document.querySelector('#sec-shad-spread');
let sec_glow = document.querySelector('#sec-hide-show');
let spn_blur_sec = document.querySelector('#sec-shad-blur-span');
let spn_spread_sec = document.querySelector('#sec-shad-spread-span');



function secShadow() {
    if (sec_shadow.checked == true) {
        sec_glow.style.display = 'block';
    }
    if (sec_shadow.checked == false) {
        sec_glow.style.display = 'none';
    }
}
function secStylish() {
    if (stylish_sec.checked == true) {
        sheet.addRule('#sc::before','border-radius: 50% 50% 0 0');
    }
    if (stylish_sec.checked == false) {
        sheet.addRule('#sc::before','border-radius: 0');
    }
}
function secBlur() {
    let sec_blur = sec_shadow_blur.value;
    spn_blur_sec.innerHTML = sec_blur;
}
function secSpread() {
    let sec_spread = sec_shadow_spread.value;
    spn_spread_sec.innerHTML = sec_spread;
}

// min hand input variables
let min_hand_color = document.querySelector('#input-min-color');
let min_curve = document.querySelector('#border-curve-min');
let stylish_min = document.querySelector('#min-stylish-border');
let min_shadow = document.querySelector('#shad-min');
let min_shadow_color = document.querySelector('#min-shad-color');
let min_shadow_blur = document.querySelector('#min-shad-blur');
let min_shadow_spread = document.querySelector('#min-shad-spread');
let min_glow = document.querySelector('#min-hide-show');
let spn_blur_min = document.querySelector('#min-shad-blur-span');
let spn_spread_min = document.querySelector('#min-shad-spread-span');



function minShadow() {
    if (min_shadow.checked == true){
        min_glow.style.display = 'block';
    }
    if (min_shadow.checked == false) {
        min_glow.style.display = 'none';
    }
}
function minStylish() {
    if (stylish_min.checked == true) {
        sheet.addRule('#mn::before','border-radius: 50% 50% 0 0');
    }
    if (stylish_min.checked == false) {
        sheet.addRule('#mn::before','border-radius: 6px 6px 0 0');
    }
}
function minCurve() {
    if (min_curve.checked == true) {
        sheet.addRule('#mn::before','border-radius: 6px 6px 0px 0px');
    }
    if (min_curve.checked == false) {
        sheet.addRule('#mn::before','border-radius: 0');
    }
}
function minBlur() {
    let min_blur = min_shadow_blur.value;
    spn_blur_min.innerHTML = min_blur;
}
function minSpread() {
    let min_spread = min_shadow_spread.value;
    spn_spread_min.innerHTML = min_spread;
}

// hour hand input variables
let hour_hand_color = document.querySelector('#input-hour-color');
let hour_curve = document.querySelector('#border-curve-hour');
let stylish_hour = document.querySelector('#hr-stylish-border');
let hour_shadow = document.querySelector('#shad-hr');
let hour_shadow_color = document.querySelector('#hr-shad-color');
let hour_shadow_blur = document.querySelector('#hr-shad-blur');
let hour_shadow_spread = document.querySelector('#hr-shad-spread');
let hour_glow = document.querySelector('#hr-hide-show');
let spn_blur_hour = document.querySelector('#hr-shad-blur-span');
let spn_spread_hour = document.querySelector('#hr-shad-spread-span');

function hrShadow() {
    if (hour_shadow.checked == true) {
        hour_glow.style.display = 'block';
    }
    if (hour_shadow.checked == false) {
        hour_glow.style.display = 'none';
    }
}
function hrStylish() {
    if (stylish_hour.checked == true) {
        sheet.addRule('#hr::before','border-radius: 50% 50% 0 0');
    }
    if (stylish_hour.checked == false) {
        sheet.addRule('#hr::before','border-radius: 6px 6px 0 0');
    }
}
function hrCurve() {
    if (hour_curve.checked == true) {
        sheet.addRule('#hr::before','border-radius: 6px 6px 0 0');
    }
    if (hour_curve.checked == false) {
        sheet.addRule('#hr::before','border-radius: 0px');
    }
}
function hrBlur() {
    let hour_blur = hour_shadow_blur.value;
    spn_blur_hour.innerHTML = hour_blur;
}
function hrSpread() {
    let hour_spread = hour_shadow_spread.value;
    spn_spread_hour.innerHTML = hour_spread;
}
// clock background
let clock_face = document.querySelector('.clock');

function img1() {
    clock_face.style.background = '#fff url(clock.jpg)';
    clock_face.style.backgroundPosition = '-1px 3px';
    clock_face.style.backgroundSize = 'cover';
}
function img2() {
    clock_face.style.background = '#fff url(Clock-plate-1.png)';
    clock_face.style.backgroundPosition = '-57px 3px';
    clock_face.style.backgroundSize = 'cover';
}
function img3() {
    clock_face.style.background = '#fff url(Clock-plate-2.png)';
    clock_face.style.backgroundPosition = '-2px -2px';
    clock_face.style.backgroundSize = '310px';
}
function img4() {
    clock_face.style.background = '#fff url(Clock-plate-3.png)';
    clock_face.style.backgroundPosition = '11px 7px';
    clock_face.style.backgroundSize = '289px';
}
function img5() {
    clock_face.style.background = '#fff url(Clock-plate-4.png)';
    clock_face.style.backgroundPosition = '-21px -21px';
    clock_face.style.backgroundSize = '352px';
}
function img6() {
    clock_face.style.background = '#fff url(Clock-plate-5.jpg)';
    clock_face.style.backgroundPosition = '-41px 6px';
    clock_face.style.backgroundSize = '395px';
}
function img7() {
    clock_face.style.background = '#fff url(Clock-plate-6.png)';
    clock_face.style.backgroundPosition = '-39px -43px';
    clock_face.style.backgroundSize = '387px';
}
function img8() {
    clock_face.style.background = '#fff url(Clock-plate-7.png)';
    clock_face.style.backgroundPosition = '-3px -3px';
    clock_face.style.backgroundSize = '314px';
}
function img9() {
    clock_face.style.background = '#fff url(Clock-plate-8.png)';
    clock_face.style.backgroundPosition = '-45px 4px';
    clock_face.style.backgroundSize = '401px';
}
function img10() {
    clock_face.style.background = '#fff url(Clock-plate-9.png)';
    clock_face.style.backgroundPosition = '-118px -74px';
    clock_face.style.backgroundSize = '460px';
}
function img11() {
    clock_face.style.background = '#fff url(Clock-plate-10.png)';
    clock_face.style.backgroundPosition = '-17px 1px';
    clock_face.style.backgroundSize = '352px';
}

// am input variables
let am_bg_color = document.querySelector('#am-bg-color');
let am_txt_color = document.querySelector('#am-txt-color');
let am_curve = document.querySelector('#am-curve');

let am_bar = document.querySelector('.am');

function amCurve() {
    if (am_curve.checked == true) {
        am_bar.style.borderRadius = '25%';
    }
    if (am_curve.checked == false) {
        am_bar.style.borderRadius = '0%';
    }
}

// pm input variables
let pm_bg_color = document.querySelector('#pm-bg-color');
let pm_txt_color = document.querySelector('#pm-txt-color');
let pm_curve = document.querySelector('#pm-curve');

let pm_bar = document.querySelector('.pm');

function pmCurve() {
    if (pm_curve.checked == true) {
        pm_bar.style.borderRadius = '25%';
    }
    if (pm_curve.checked == false) {
        pm_bar.style.borderRadius = '0%';
    }
}

// background themes
let body = document.querySelector('body');
let main_theme = document.querySelector('#main-theme');
let content = document.querySelector('#content');
let section = [document.querySelector('.fi'), document.querySelector('.la')];
let btn = document.querySelectorAll('button');
let spn = document.querySelectorAll('span');
function blue() {
    body.style.backgroundColor = '#071f43';
    main_theme.style.backgroundColor = 'dodgerblue';
    content.style.backgroundColor = '#071f43';
    section[0].style.backgroundColor = '#255784';
    section[1].style.backgroundColor = '#255784';
    btn[0].className = 'theme-btn btn1 blue-btn';
    for (i = 0; i <= 1; i++) {
        spn[i].style.background = 'linear-gradient(90deg, transparent, #2196f3)';
    }
    for (i = 2; i < 6; i++) {
        btn[i].className = 'hbtn-blue';
    }
    for (i = 6; i < 8; i++) {
        btn[i].className = 'button1-blue';
    }
    btn[1].className = 'close-btn-blue';
}
function red() {
    body.style.backgroundColor = '#430707';
    main_theme.style.backgroundColor = '#f32121';
    content.style.backgroundColor = '#430707';
    section[0].style.backgroundColor = '#842525';
    section[1].style.backgroundColor = '#842525';
    btn[0].className = 'theme-btn btn1 red-btn';
    for (i = 0; i <= 1; i++) {
        spn[i].style.background = 'linear-gradient(90deg, transparent, #f32121)';
    }
    for (i = 2; i < 6; i++) {
        btn[i].className = 'hbtn-red';
    }
    for (i = 6; i < 8; i++) {
        btn[i].className = 'button1-red';
    }
    btn[1].className = 'close-btn-red';
}
function green() {
    body.style.backgroundColor = '#204f01';
    main_theme.style.backgroundColor = '#28c621';
    content.style.backgroundColor = '#204f01';
    section[0].style.backgroundColor = '#298425';
    section[1].style.backgroundColor = '#298425';
    btn[0].className = 'theme-btn btn1 green-btn';
    for (i = 0; i <= 1; i++) {
        spn[i].style.background = 'linear-gradient(90deg, transparent, #26f321)';
    }
    for (i = 2; i < 6; i++) {
        btn[i].className = 'hbtn-green';
    }
    for (i = 6; i < 8; i++) {
        btn[i].className = 'button1-green';
    }
    btn[1].className = 'close-btn-green';
}
function yellow() {
    body.style.backgroundColor = '#433b07';
    main_theme.style.backgroundColor = '#e8f321';
    content.style.backgroundColor = '#433b07';
    section[0].style.backgroundColor = '#818425';
    section[1].style.backgroundColor = '#818425';
    btn[0].className = 'theme-btn btn1 yellow-btn';
    for (i = 0; i <= 1; i++) {
        spn[i].style.background = 'linear-gradient(90deg, transparent, #e8f321)';
    }
    for (i = 2; i < 6; i++) {
        btn[i].className = 'hbtn-yellow';
    }
    for (i = 6; i < 8; i++) {
        btn[i].className = 'button1-yellow';
    }
    btn[1].className = 'close-btn-yellow';
}

function apply() {
    // hands color
    let sec_color = sec_hand_color.value;
    let min_color = min_hand_color.value;
    let hour_color = hour_hand_color.value;

    sheet.addRule('#sc::before','background-color: ' + sec_color);

    sheet.addRule('#mn::before','background-color: ' + min_color);

    sheet.addRule('#hr::before','background-color: ' + hour_color);

    sheet.addRule('.clock::before','background-color: ' + hour_color);

    // am txt color
    let am_text = am_txt_color.value;
    am_bar.style.color = am_text;
    // am bg color
    let am_bg = am_bg_color.value;
    am_bar.style.backgroundColor = am_bg;

    // pm txt color
    let pm_text = pm_txt_color.value;
    pm_bar.style.color = pm_text;
    // pm bg color
    let pm_bg = pm_bg_color.value;
    pm_bar.style.backgroundColor = pm_bg;

    // sec shadow color
    if (sec_shadow.checked == false) {
        sheet.addRule('#sc::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    }
    if (sec_shadow.checked == true) {
        let color_shadow_sec = sec_shadow_color.value;
        let blur_shadow_sec = sec_shadow_blur.value;
        let spread_shadow_sec = sec_shadow_spread.value;
        sheet.addRule('#sc::before','box-shadow: 0px 0px ' + blur_shadow_sec + 'px ' + spread_shadow_sec + 'px ' + color_shadow_sec);
    }

    // min shadow color
    if (min_shadow.checked == false) {
        sheet.addRule('#mn::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    }
    if (min_shadow.checked == true) {
        let color_shadow_min = min_shadow_color.value;
        let blur_shadow_min = min_shadow_blur.value;
        let spread_shadow_min = min_shadow_spread.value;
        sheet.addRule('#mn::before','box-shadow: 0px 0px ' + blur_shadow_min + 'px ' + spread_shadow_min + 'px ' + color_shadow_min);
    }
    
    // hour shadow color
    if (hour_shadow.checked == false) {
        sheet.addRule('#hr::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    }
    if (hour_shadow.checked == true) {
        let color_shadow_hour = hour_shadow_color.value;
        let blur_shadow_hour = hour_shadow_blur.value;
        let spread_shadow_hour = hour_shadow_spread.value;
        sheet.addRule('#hr::before','box-shadow: 0px 0px ' + blur_shadow_hour + 'px ' + spread_shadow_hour + 'px ' + color_shadow_hour);
    }
}

function setDefault() {
    // button & background default color
    body.style.backgroundColor = '#071f43';
    main_theme.style.backgroundColor = 'dodgerblue';
    content.style.backgroundColor = '#071f43';
    section[0].style.backgroundColor = '#255784';
    section[1].style.backgroundColor = '#255784';
    btn[0].className = 'theme-btn btn1 blue-btn';
    for (i = 0; i < 3; i++) {
        spn[i].style.background = 'linear-gradient(90deg, transparent, #2196f3)';
    }
    for (i = 2; i < 6; i++) {
        btn[i].className = 'hbtn-blue';
    }
    for (i = 6; i < 8; i++) {
        btn[i].className = 'button1-blue';
    }
    btn[1].className = 'close-btn-blue';



    
    // hands default color
    sheet.addRule('#sc::before','background-color: #ff6767;');
    sheet.addRule('#mn::before','background-color: #b4b4b4;');
    sheet.addRule('#hr::before','background-color: #848484');
    sheet.addRule('.clock::before','background-color: #848484');

    // sec shadow default color and border radius
    sheet.addRule('#sc::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    sheet.addRule('#sc::before','border-radius: 0px');
    // min shadow default colora nd border radius
    sheet.addRule('#mn::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    sheet.addRule('#mn::before','border-radius: 6px 6px 0 0');
    // hour shadow default color
    sheet.addRule('#hr::before','box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0)');
    sheet.addRule('#hr::before','border-radius: 6px 6px 0 0');

    // am default txt color
    am_bar.style.color = '#fff';
    // am default bg color
    am_bar.style.backgroundColor = '#fe006b';
    // am default curve
    am_bar.style.borderRadius = '25%';

    // pm default txt color
    pm_bar.style.color = '#fff';
    // pm default bg color
    pm_bar.style.backgroundColor = '#2297f6';
    // pm default curve
    pm_bar.style.borderRadius = '25%';

    // default clock face
    clock_face.style.background = '#fff url(clock.jpg)';
    clock_face.style.backgroundPosition = '-1px 3px';
    clock_face.style.backgroundSize = 'cover';
}