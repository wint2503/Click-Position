const getmap = document.querySelector(".map-container");
var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    circleidx++;
    // console.log('hello')
    const cx = e.clientX; //window ကနေကွာတဲ့ အကွာအဝေးကိုယူတာ
    const cy = e.clientY;
    // console.log(cx,cy);

    const mapleft = e.target.offsetLeft;
    const maptop = e.target.offsetTop;
    // console.log(mapleft,maptop);

    const curx = cx - mapleft;
    const cury = cy - maptop;
    // console.log(curx,cury);

    const circle = document.createElement('span');
    circle.id = circleidx;
    circle.classList.add('circle');
    console.log(circle);

    circle.style.left = `${curx}px`;
    circle.style.top = `${cury}px`;

    e.target.appendChild(circle);
})