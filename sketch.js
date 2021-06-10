let pends = [];
let approx = [];
let max;
let dt = 1;
let frame = 60;
let blueAngle = Math.PI / 15;
let redAngle = Math.PI / 10;
let blue, red;

function setup() {
    createCanvas(800, 400);
    //pend.init();
    pends.push(new Pendulum(200, 10, 200, blueAngle));
    pends.push(new Pendulum(200, 10, 200, redAngle));
    pends.forEach(pend => pend.init());

    approx.push(new Approx(600, 10, 200, blueAngle));
    approx.push(new Approx(600, 10, 200, redAngle));
    approx.forEach(pend => pend.init());
    //console.log(pend);

    blue = createInput().position(200, 410);
    red = createInput().position(200, 440);
    createP('Enter new blue angle (PI / x):').position(0, 395);
    createP('Enter new red angle (PI / x):').position(0, 425);
    createButton('Restart with new angles').position(0, 470).mousePressed(restart);
    max = PI / 15;
    frameRate(frame);
}

function draw() {
    background(220);
    fill(0);
    strokeWeight(4);
    line(400, 0, 400, height);
    textSize(25);
    text('Using sin(x)', 10, 50);
    pends.forEach((pend, index) => {
        text(`${(index == 0) ? ('Blue') : ('Red')} starting angle: pi/${PI / pend.maxAngle}`, 10, 300 + 25 * (index + 1));
        strokeWeight(1);
        if (index == 0) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        circle(pend.pivot.x + pend.x, pend.pivot.y + pend.y, 40);
        fill(0);
        line(pend.pivot.x, pend.pivot.y, pend.pivot.x + pend.x, pend.pivot.y + pend.y);
        pend.update(dt);
        if (pend.angle > pend.maxAngle) {
            pend.angle = pend.maxAngle;
        }
    });

    text('Using sin(x)=x', 410, 50);
    approx.forEach((pend, index) => {
        strokeWeight(1);
        if (index == 0) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        circle(pend.pivot.x + pend.x, pend.pivot.y + pend.y, 40);
        fill(0);
        line(pend.pivot.x, pend.pivot.y, pend.pivot.x + pend.x, pend.pivot.y + pend.y);
        pend.update(dt);
        if (pend.angle > pend.maxAngle) {
            pend.angle = pend.maxAngle;
            pend.velocity = 0;
        }
    });

    textSize(10);
    text('*air resistence and friction are neglected', 600, 380);
    //console.log(pends[0].velocity.x);
}

function restart() {
    blueAngle = PI / parseFloat(blue.value());
    redAngle = PI / parseFloat(red.value());

    pends = [];
    approx = [];
    pends.push(new Pendulum(200, 10, 200, blueAngle));
    pends.push(new Pendulum(200, 10, 200, redAngle));
    pends.forEach(pend => pend.init());

    approx.push(new Approx(600, 10, 200, blueAngle));
    approx.push(new Approx(600, 10, 200, redAngle));
    approx.forEach(pend => pend.init());
}