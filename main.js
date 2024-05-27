const audio = new Audio("dog-bark4.mp3");
var px=0;
var d=1;
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
setInterval(() => {
    px+=d;
    if(px==95){
        d=d*-1;
        $("#imgD").css("transform","rotateY(360deg)");
    }else if(px==0){
        d=d*-1;
        $("#imgD").css("transform","rotateY(180deg)");
    }
    $("#imgD").css("left",px+"%");
}, 300);

$("#imgD").click(function(){
    console.log(456)
    audio.play();
})