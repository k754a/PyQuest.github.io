class Background {
    constructor(imageSrc, canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () => {
            this.draw();
        };
    }

    draw() {
        const pattern = this.ctx.createPattern(this.image, 'repeat');
        this.ctx.fillStyle = pattern;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
