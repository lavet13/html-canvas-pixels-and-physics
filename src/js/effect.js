import Particle from './particle';

export default class Effect {
    particlesArray = [];

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init() {
        for (let i = 0; i < 10; i++) {
            this.particlesArray.push(new Particle(this));
        }
    }

    draw(context) {
        this.particlesArray.forEach(particle => particle.draw(context));
    }
}
