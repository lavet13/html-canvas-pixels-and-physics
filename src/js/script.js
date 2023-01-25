import Effect from './effect';

window.addEventListener('load', e => {
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');
    const image1 = document.querySelector('#image1');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const effect = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw(ctx);
    console.log(effect);
});

function animate() {}
