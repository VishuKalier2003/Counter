const dec = -1; // Constants for the evaluation of values
const inc = 1;
const set = 0;
var sum = 0;
var show = document.getElementById('display');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');

increase.addEventListener('click', function() {
    /*Incrementing sum value by a const inc*/
    sum = sum + inc;
    increase = sum;
    if (sum > 0) {
        /*style element to give CSS properties*/
        show.style.color = 'blue';
    }
    if (sum === 0) { show.style.color = 'green'; }
    if (increase < 0) {
        show.textContent = -increase;
    } else {
        show.textContent = increase;
    }
});

decrease.addEventListener('click', function() {
    sum = sum + dec; // Decrementing sum by a given amount
    decrease = sum;
    if (sum < 0) {
        // If sum less than 0 style it to the red to give CSS properties
        show.style.color = 'red';
    }
    if (sum === 0) {
        show.style.color = 'green';
    }
    // Text content to show only the data and not the tags or other information
    if (decrease > 0) {
        show.textContent = decrease;
    } else {
        show.textContent = -decrease;
    }
});

reset.addEventListener('click', function() {
    reset = sum = set;
    show.style.color = 'green';
    show.textContent = reset;
});