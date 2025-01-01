class parallaxTiltEffect {
    constructor({element, tiltEffect}) {
    this.element = element;
    this.container = this.element.querySelector(".container");
    this.size = [300, 360];
    [this.w, this.h] = this.size;
    this.tiltEffect = tiltEffect;
    this.mouseOnComponent = false;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);
    this.init();
    }
    handleMouseMove(event) {
    const {offsetX, offsetY} = event;
    let X;
    let Y;
    if (this.tiltEffect === "reverse") {
    X = ((offsetX - (this.w/2)) / 3) / 3;
    Y = (-(offsetY - (this.h/2)) / 3) / 3;
    }
    