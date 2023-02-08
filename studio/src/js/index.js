import Placeholders from "./placeholders";
import Slider from "./slider";
import Scroll from "../utils/scroll";

//
import { constants, instances } from "../store";

constants.isDevice = "ontouchstart" in window;
constants.isDevice && document.body.classList.add("is-device");
//
document.documentElement.style.setProperty(
  "--vh",
  `${window.innerHeight * 0.01}px`
);

instances.scroll = new Scroll();
instances.scroll.init();

const placeholders = new Placeholders();
placeholders.init();

instances.slider = new Slider();
instances.slider.init();
