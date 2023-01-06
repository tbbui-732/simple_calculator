// -------- global variables --------
// Selecting number pad key elements
const numpad_key = document.querySelectorAll('#num-pad');

// Selecting function key elements
// const decimal_key = document.querySelector('#decimal');
// const negate_key = document.querySelector('#negate');
// const caret_key = document.querySelector('#caret');
// const open_bracket = document.querySelector('#open_bracket');
// const close_bracket = document.querySelector('#close_bracket');

// Selecting operation key elements
// const add = document.querySelector('#add');
// const sub = document.querySelector('#sub');
// const mul = document.querySelector('#mul');
// const div = document.querySelector('#div');
function readNumberPad() {
    const operation_key = document.querySelectorAll('.function');
    const enter_key = document.querySelector('#enter');

    // Reading numpad selections
    let number_list = [];
    numpad_key.forEach(function(button) {
        button.addEventListener('click', function() {
            number_list.push(parseInt(this.innerHTML));
            console.log(typeof(parseInt(this.innerHTML))); // NOTE: del
        });
    });
    
    // Selecting operation
    operation_key.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log(this.id + " operation has been selected"); // NOTE: del 
            number_list.push(this.id);
        });
    });

    // Calculating
    enter_key.addEventListener('click', function(){
        console.log("enter has been selected"); // NOTE: del 
        console.log(number_list);

        // End function
        return;
    });

    // End function
    return;
};

// main
readNumberPad();
