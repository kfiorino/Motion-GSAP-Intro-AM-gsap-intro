import {gsap} from "gsap";

const CatSwitchTL = gsap.timeline();
CatSwitchTL.from("#cat-img", {duration:1, x=100, ease: "none"}); 

export function CatSwitchAnimation(){
    return CatSwitchTL;
}