import { toggleAnimation } from './demo.js';

console.log(Demo);

var toggle = false;

const mainTL = gsap.timeline({paused:true});
mainTL.add(toggleAnimation());

$("#Dog-Copy").on("click", function(){
    if(toggle === false){

        mainTL.play();
        toggle = true;

    }else{
        mainTL.reverse();
       toggle = false;
    }
})