//import * as Demo from './demo.js';

import {gsap} from "gsap";

import {redBoxAnimation} from "./redBox.js"
import {blueBoxAnimation} from "./blueBox.js"
import {yellowBoxAnimation} from "./yellowBox.js"
//console.log(Demo);

const mainTL = gsap.timeline({paused:true});

mainTL.add(redBoxAnimation(), "startBoxes")
    .add(blueBoxAnimation(), "startBoxes")
    .addLabel("yellow")
    .seek("yellow")
    .add(yellowBoxAnimation(), "startBoxes")
    .play();

