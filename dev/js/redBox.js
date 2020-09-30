import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".red-box", {duration:boxSpeed, x:400});

    return tl;



}
