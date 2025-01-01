class parallaxTiltEffect {
    constructor({element, tiltEffect}) {
    this.element = element;
    this.container = this.element.querySelector(".container");
    this.size = [300, 360];
    [this.w, this.h] = this.size;
    this.tiltEffect = tiltEffect;
    this.mouseOnComponent = false;
    