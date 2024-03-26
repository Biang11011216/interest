function check_n(){
    var act = document.querySelector('.carousel-item.active');
    var cur = act.querySelector('video');   
    if (!cur.paused) {
        cur.pause();
    }
    var next = act.nextElementSibling; 
    if (!next) {
        next = document.querySelector('.carousel-item:first-child');
    }
    var next_v = next.querySelector('video');
    next_v.load();
    
}
function check_p(){
    var act = document.querySelector('.carousel-item.active');
    var cur = act.querySelector('video');  
    if (!cur.paused) {
        cur.pause();
    }
    var prev = act.previousElementSibling;
    if (!prev) {
        prev = document.querySelector('.carousel-item:last-child');
    }
    var prev_v = prev.querySelector('video');
    prev_v.load();
    
}
var timer;
window.onload=function(){
    timer = setInterval(() =>{
    var act = document.querySelector('.carousel-item.active');
    var autob = document.querySelector('.carousel-control-next');
    var cur = act.querySelector('video');
    if (cur.paused) {
        autob.click();
    }
    },10000)
} 