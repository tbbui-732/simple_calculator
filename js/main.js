// Function that calculates given input
// Calculation sequence contains strings
function calculateArr(arr) {
    let num1 = ""
    let num2 = ""
    const operator = ["+", "-", "*", "/"]

    // Concatenate values for num1
    let i = 0
    while (!operator.includes(arr[i])) {
        num1 += arr[i]; 
        i++;
    }

    // Store operator value
    const op = arr[i];
    i++;

    // Concatenate values for num2
    while (i < arr.length) {
        num2 += arr[i]; 
        i++;
    }

    num1 = parseInt(num1, 10)
    num2 = parseInt(num2, 10)

    // Checking for invalid inputs
    if (isNaN(num1) || isNaN(num2)) {
        console.log("invalid input!")
        return undefined
    }

    // Calculate value
    switch (op) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}

// Function gets user input
const buttons = document.querySelectorAll('button'); 
const values = []; // create an empty array to store the values
let result

buttons.forEach(button => { // attach a click event listener to each button
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    const value = event.target.id;  // extract the value from the button's id attribute
    console.log(value)

    if (value === 'enter') {        // if the clicked button is the "enter" button
        console.log(values);        // print out the array
        buttons.forEach(button => 
            button.removeEventListener('click', handleClick)); // remove all event listeners
        
        // Calculate array and display results
        result = calculateArr(values)
        console.log(result)

        // Display results onto screen
        const resultDiv = document.getElementById('display-result')
        resultDiv.innerHTML = result
    } 
    else {
        values.push(value);         // add the value to the array
    }
}

