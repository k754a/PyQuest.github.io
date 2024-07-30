//classes
class Spaceship{
    constructor(config)
    {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init()
    {
        console.log("Load",this);
    }


}