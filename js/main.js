// --- CALCULATOR FUNCTIONALITY ---

function mainCalculate() {
    readNumberPad()
    // const number_list = readNumberPad(); 
    // console.log(number_list);
    return;
};

// --- FUNCTIONS TO READ BUTTONS ---

// -------- global variables --------
// Selecting number pad key elements
const numpad_key = document.querySelectorAll('#num-pad');

// Selecting function key elements
const decimal_key = document.querySelector('#decimal');
const negate_key = document.querySelector('#negate');
const caret_key = document.querySelector('#caret');
const open_bracket = document.querySelector('#open_bracket');
const close_bracket = document.querySelector('#close_bracket');

// Selecting operation key elements
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

function readNumberPad() {
    // NOTE: del once done, this is for dev purposes
    let count = 0;

    // Reading numpad selections
    let number_list = [];
    numpad_key.forEach(function(button) {
        button.addEventListener('click', function() {
            number_list.push(parseInt(this.innerHTML));
            count = count + 1;
            console.log(typeof(parseInt(this.innerHTML))); // delete
        });
    });

    add.addEventListener('click', function() {
        // Print counter value
        console.log(count);
       
        // Reset counter
        count = 0;

        // Exit
        return;
    });
         

};

function readFunctionKeys() {

};

function readOperationKeys() {
};

// main
mainCalculate();
