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
        const imageWidth = this.image.naturalWidth;
        const imageHeight = this.image.naturalHeight;
        const xOffset = (this.canvas.width - imageWidth) / 2;
        const yOffset = (this.canvas.height - imageHeight) / 2;
        this.ctx.drawImage(this.image, xOffset, yOffset);
    }
}
