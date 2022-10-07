const SwitchToggle = document.querySelector('input[type="checkbox"]');      //* <input type="checkbox">
const ToggleIcon = document.getElementById('toggle-icon');
const NAV = document.getElementById('nav');

SwitchToggle.addEventListener('change',SwitchMode);                         //*มีการเปลี่ยนแปลงที่ตัวแปล SwitchToggle ที่อ้างอิงกับ Element input[type="checkbox"]


function SwitchMode(event){
    if(event.target.checked){
        // console.log("Dark Mode");
        document.documentElement.setAttribute('data-theme','dark');         //* เปลี่ยน data-theme ใน CSS ให้เป็นชื่อ "dark"
        DarkMode_Func(); 
        ImageSwitchMode('dark');
    }
    else{
        // console.log("Light Mode");
        document.documentElement.setAttribute('data-theme','light');        //* เปลี่ยน data-theme ใน CSS ให้เป็นชื่อ "Light" !! ซึ่งในกรณีนี้ ไม่มี data-theme ชื่อ light ใน CSS จึงเปลี่ยนกลับคืนเป็นค่า Default (root::)
        LightMode_Func();
        ImageSwitchMode('light');
    }
}

// ! ---> #toggle-icon ---> #toggle-icon[0] = .toggle-text , #toggle-icon[1] = .fa-sun หรือ .fa-moon
function DarkMode_Func(){
    ToggleIcon.children[0].textContent = "Dark Mode";                       //* เปลี่ยนคำ
    ToggleIcon.children[1].classList.replace('fa-sun','fa-moon');           //* repalce ชื่อ , classList : ชื่อคลาส
    NAV.style.backgroundColor = 'rgb(0 0 0 / 40%)';                         //* เปลี่ยน backgroundColor ในตัวแปล NAV ที่อ้างอิง Element nav โดยเปลี่ยนที่ไฟล์ประเภท style (CSS)
}
function LightMode_Func(){
    ToggleIcon.children[0].textContent = "Light Mode";
    ToggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    NAV.style.backgroundColor = 'rgb(255 255 255 / 40%)';

}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const Image1 = document.getElementById('image1');
const Image2 = document.getElementById('image2');
const Image3 = document.getElementById('image3');

function ImageSwitchMode(Mode){
    Image1.src = `img/Robot_${Mode}.svg`;
    Image2.src = `img/WebDev_${Mode}.svg`;
    Image3.src = `img/japanese_${Mode}.svg`;
}


