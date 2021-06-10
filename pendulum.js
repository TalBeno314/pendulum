class Pendulum {
    velocity = 0;
    acceleration = 0;

    constructor(x, y, length, angle) {
        this.pivot = {
            x: x,
            y: y
        }
        this.length = length;
        this.angle = angle;
        this.maxAngle = angle;
    }

    x;
    y;

    init() {
        this.x = this.length * Math.sin(this.angle);
        this.y = this.length * Math.cos(this.angle);
    }

    update(dt) {
        let k = 0.25
        this.acceleration = -Math.sin(this.angle) / this.length;
        this.velocity += this.acceleration * dt;
        this.angle += this.velocity * dt;
        this.init();
        //this.angle = Math.atan(this.x / this.y);
    }
}

class Approx {
    velocity = 0;
    acceleration = 0;

    constructor(x, y, length, angle) {
        this.pivot = {
            x: x,
            y: y
        }
        this.length = length;
        this.angle = angle;
        this.maxAngle = angle;
    }

    x;
    y;

    init() {
        this.x = this.length * Math.sin(this.angle);
        this.y = this.length * Math.cos(this.angle);
    }

    update(dt) {
        let k = 0.25
        this.acceleration = - /*Math.sin*/ (this.angle) / this.length;
        this.velocity += this.acceleration * dt;
        this.angle += this.velocity * dt;
        this.init();
        //this.angle = Math.atan(this.x / this.y);
    }
}