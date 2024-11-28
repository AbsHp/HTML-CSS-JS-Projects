$(function () {
    const numberOfStars = 20;

    for (let i = 0; i < numberOfStars; i++) {
        $('.congrats').append(`<div class="blob fa fa-star ${i}"></div>`);
    }

    animateText();
    animateBlobs();
});

$('.congrats').click(function () {
    reset();
    animateText();
    animateBlobs();
});

function reset() {
    $('.blob').each(function () {
        gsap.set($(this), { x: 0, y: 0, opacity: 1 });
    });

    gsap.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
}

function animateText() {
    gsap.from($('h1'), {
        duration: 0.8,
        scale: 0.4,
        opacity: 0,
        rotation: 15,
        ease: "back.out(4)"
    });
}

function animateBlobs() {
    const xSeed = _.random(350, 380);
    const ySeed = _.random(120, 170);

    $('.blob').each(function () {
        const $blob = $(this);
        const speed = _.random(1, 5);
        const rotation = _.random(5, 100);
        const scale = _.random(0.8, 1.5);
        const x = _.random(-xSeed, xSeed);
        const y = _.random(-ySeed, ySeed);

        gsap.to($blob, {
            duration: speed,
            x: x,
            y: y,
            opacity: 0,
            rotation: rotation,
            scale: scale,
            ease: "power1.out",
            onStart: function () {
                $blob.css('display', 'block');
            },
            onComplete: function () {
                $blob.css('display', 'none');
            }
        });
    });
}