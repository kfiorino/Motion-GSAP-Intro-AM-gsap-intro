import {gsap} from "gsap";

const CatSwitchTL = gsap.timeline();
CatSwitchTL.from("#cat-img", {duration:1, ease: "none"})
    .to("#cat-img", {duration:1, x:195, ease: "none"});

export function CatSwitchAnimation(){
    return CatSwitchTL;
}