const getmap = document.querySelector(".map-container");
var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    circleidx++;
    // console.log(e.target)
    if(e.target.classList.contains('map-container')){
        const cx = e.clientX; //window ကနေကွာတဲ့ အကွာအဝေးကိုယူတာ
        const cy = e.clientY;
        // console.log(cx,cy);

        const mapleft = e.target.offsetLeft; //မြေပုံရဲ့ လက်ရှိ ရှိနေတဲ့နေရာ
        const maptop = e.target.offsetTop;
        // console.log(mapleft,maptop);

        const curx = cx - mapleft;
        const cury = cy - maptop;
        // console.log(curx,cury);

        const circle = document.createElement('span');
        circle.id = circleidx;
        circle.classList.add('circle');
        // console.log(circle);

        // insert location with current in style
        circle.style.left = `${curx}px`;
        circle.style.top = `${cury}px`;

        circle.style.setProperty('--small-color','darkblue');
        circle.style.setProperty('--medium-color','steelblue');
        circle.style.setProperty('--large-color','skyblue')

        // e.target.appendChild(circle);
        this.appendChild(circle);
    }
    removepointer(e);
})

function removepointer(e){
    // console.log(e.target.id)
    if(e.target.id > 0){
        e.target.remove();
    }
}