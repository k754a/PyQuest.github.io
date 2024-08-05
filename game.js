document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector(".game-canvas");
    const ctx = canvas.getContext("2d");

  
    canvas.width = 352;
    canvas.height = 198;

  
    const background = new Background("/Images/Floors/floor.png", canvas);

    const walls = [
        new Wall(50, 50, 20, 100),
        new Wall(200, 100, 20, 100)
    ];

    // Initialize player
    const player = new Player(30, 30, 20, 5, ctx);

  
    document.addEventListener('keydown', (event) => player.handleKeyDown(event));
    document.addEventListener('keyup', (event) => player.handleKeyUp(event));


    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        background.draw();

        walls.forEach(wall => wall.draw(ctx)); 
        player.update(walls); 
        player.draw(); 

        requestAnimationFrame(gameLoop); 
    }

    gameLoop(); 
});
