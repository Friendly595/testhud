document.querySelectorAll('.circular-progress').forEach(function (el) {
    const progress = el.getAttribute('data-progress');
    const circle = el.querySelector('.progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100 * circumference);

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;
});

