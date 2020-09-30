import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function blueBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".blue-box", {duration:boxSpeed, x:400});

    return tl;

}