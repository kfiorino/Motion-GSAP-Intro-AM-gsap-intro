import {gsap} from "gsap";

const toggleTL = gsap.timeline();

toggleTL.to("#background", {duration: 0.05, fill:"#95D6FA"})
    .to("#cat-button", {duration: 0.05, fill:"#D8D8D8"})
    .to("#dog-button", {duration: 0.05, fill:"#3575B9"});
    

export function toggleAnimation(){
    return toggleTL;

}