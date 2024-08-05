class Player {
    constructor(x, y, size, speed, ctx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.ctx = ctx;
        this.keys = {};
    }

    handleKeyDown(event) {
        this.keys[event.key] = true;
    }

    handleKeyUp(event) {
        this.keys[event.key] = false;
    }

    update(walls) {
        let newX = this.x;
        let newY = this.y;

    
        if (this.keys['ArrowUp']) newY -= this.speed;
        if (this.keys['ArrowDown']) newY += this.speed;
        if (this.keys['ArrowLeft']) newX -= this.speed;
        if (this.keys['ArrowRight']) newX += this.speed;

       
        if (!this.checkCollision(newX, newY, walls) && !this.isOutOfBounds(newX, newY)) {
            this.x = newX;
            this.y = newY;
        }
    }

    checkCollision(x, y, walls) {
        for (let wall of walls) {
            if (x < wall.x + wall.width &&
                x + this.size > wall.x &&
                y < wall.y + wall.height &&
                y + this.size > wall.y) {
                return true;
            }
        }
        return false;
    }

    isOutOfBounds(x, y) {
       
        if (x < 0 || x + this.size > this.ctx.canvas.width ||
            y < 0 || y + this.size > this.ctx.canvas.height) {
            return true;
        }
        return false;
    }

    draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
