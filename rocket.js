const canvas = document.getElementById('rocketCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rocket = {
    x: canvas.width / 2,
    y: canvas.height,
    width: 30,
    height: 60,
    speed: 2,
    draw: function() {
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x - this.width / 2, this.y - this.height, this.width, this.height);

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(this.x - this.width / 2, this.y - this.height);
        ctx.lineTo(this.x + this.width / 2, this.y - this.height);
        ctx.lineTo(this.x, this.y - this.height - 20);
        ctx.closePath();
        ctx.fill();
    },
    update: function() {
        this.y -= this.speed;
        if (this.y + this.height < 0) {
            this.y = canvas.height;
        }
    }
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rocket.update();
    rocket.draw();
    requestAnimationFrame(animate);
}

animate();
