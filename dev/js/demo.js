import {gsap} from "gsap";

const toggleTL = gsap.timeline();

toggleTL.to("#cat-cylinder", {duration: 1, fill:"#95D6FA"})
    .to("#Dog-Copy", {duration: 1, fill:"#FFE5A1"});

export function toggleAnimation(){
    return toggleTL;

}