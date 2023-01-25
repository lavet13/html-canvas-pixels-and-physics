export default class Particle {
    constructor(effect) {
        this.effect = effect;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.size = 5;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}
