import {gsap} from "gsap";

const toggleTL = gsap.timeline();

toggleTL.to("#background", {duration: 0.5, fill:"#95D6FA"})
    .to("#dog-button", {duration: 0.5, fill:"#FFE5A1"})
    .to("#cat-button", {duration: 0.5, fill:"#F9BB28"});

export function toggleAnimation(){
    return toggleTL;

}