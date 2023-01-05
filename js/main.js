// Read number pad

function readNumberPad() {
    const numpad_key = document.querySelectorAll('#num-pad');

    numpad_key.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log(`${this.innerHTML} was clicked`);
        });
    });
};

function readFunctionKeys() {
    const decimal_key = document.querySelector('#decimal');
    const negate_key = document.querySelector('#negate');
    const caret_key = document.querySelector('#caret');
    const open_bracket = document.querySelector('#open_bracket');
    const close_bracket = document.querySelector('#close_bracket');

    decimal_key.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    negate_key.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    caret_key.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    open_bracket.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    close_bracket.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

};

function readOperationKeys() {
    const add = document.querySelector('#add');
    const sub = document.querySelector('#sub');
    const mul = document.querySelector('#mul');
    const div = document.querySelector('#div');

    add.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    sub.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    mul.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });

    div.addEventListener('click', function() {
        console.log(`${this.innerHTML}was clicked`);
    });
};

// main
readNumberPad();
readFunctionKeys();
readOperationKeys();
