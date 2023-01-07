// TODO - Create a single event listener for every single button -> improve performance

function getUserInput() {
    return new Promise(resolve => {
        // Reading numpad selections
        const numpad_key = document.querySelectorAll('#num-pad');
        let number_list = [];
        numpad_key.forEach(function(button) {
            button.addEventListener('click', function() {
                console.log(this.innerHTML + " selected");
                number_list.push(parseInt(this.innerHTML));
            });
        });

        // Selecting operation key
        const operation_key = document.querySelectorAll('.function');
        operation_key.forEach(function(button) {
            button.addEventListener('click', function() {
                console.log(this.id + " operation selected");
                number_list.push(this.id);
            });
        });

        // End function
        const enter_key = document.querySelector('#enter');
        enter_key.addEventListener('click', function(){
            console.log("enter key selected");
            console.log(number_list);
            resolve(number_list);
        });
    });
};

function calculateResult(reg1, reg2, op) {
    let result = null;
    switch (op) {
        case "add":
            result = reg1 + reg2;
            break;
        case "sub":
            result = reg1 - reg2;
            break;
        case "div":
            result = reg1 / reg2;
            break;
        case "mul":
            result = reg1 * reg2;
            break;
    };
    return result;
};

function inputToEquation(arr) {
    let reg1 = "";
    let reg2 = "";
    let op = "";

    let i = 0;
    let operations = ['add', 'sub', 'mul', 'div'];
    
    // Get first register
    while (!operations.includes(arr[i])) {
        reg1 += arr[i];
        i++;
    };
    reg1 = parseInt(reg1);
    console.log("reg1: " + reg1);
    
    // Get operation type
    op = arr[i];
    i++;
    console.log("op: " + op);
    
    // Get second register
    while (i < arr.length) {
        reg2 += arr[i];
        i++;
    };
    reg2 = parseInt(reg2);
    console.log("reg2: " + reg2);
    
    let result = calculateResult(reg1, reg2, op);
    return result;
}

async function main() {
    let input_arr = getUserInput();
    let result = inputToEquation(input_arr);
    console.log("input arr: " + input_arr);
    console.log("result: " + result);

    return result;
};

main();
