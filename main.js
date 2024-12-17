let bars = document.getElementById('bars');
let x = document.getElementById('close');
let nav = document.getElementById('nav');



bars.onclick = function(){
    bars.style.display = 'none'
    x.style.display = 'block'
    nav.style.display = 'block'
}
x.onclick = function(){
    bars.style.display = 'block'
    x.style.display = 'none'
    nav.style.display = 'none'
}

