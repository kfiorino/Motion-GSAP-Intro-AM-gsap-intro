import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function yellowBoxAnimation(){

    var tl = gsap.timeline();
    tl.to(".yellow-box", {duration:boxSpeed, x:400});

    return tl;

}