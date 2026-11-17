# Ex03 To-Do List using JavaScript
## Name: AADHITHYAA L
## Reg No: 212224220003
## Date:17/11/2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
INDEX.HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="calculator">

        <h2>Simple Calculator</h2>

        <input type="text" id="display">

        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="addValue('/')">/</button>
            <button onclick="addValue('*')">*</button>
            <button onclick="deleteValue()">DEL</button>

            <button onclick="addValue('7')">7</button>
            <button onclick="addValue('8')">8</button>
            <button onclick="addValue('9')">9</button>
            <button onclick="addValue('-')">-</button>

            <button onclick="addValue('4')">4</button>
            <button onclick="addValue('5')">5</button>
            <button onclick="addValue('6')">6</button>
            <button onclick="addValue('+')">+</button>

            <button onclick="addValue('1')">1</button>
            <button onclick="addValue('2')">2</button>
            <button onclick="addValue('3')">3</button>
            <button onclick="calculate()">=</button>

            <button onclick="addValue('0')">0</button>
            <button onclick="addValue('.')">.</button>
        </div>

    </div>

    <script src="script.js"></script>

</body>
</html>

```
style.css
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f7f6;
}

.calculator {
    background: white;
    padding: 25px;
    border-radius: 10px;
    width: 320px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #2c3e50;
}

#display {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: right;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #3498db;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background: #2980b9;
}

```
script.js
```

const display = document.getElementById('display');

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!/^[0-9+\-*/. ]+$/.test(display.value)) {
            throw new Error("Invalid");
        }

        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();
    }
    catch {
        display.value = 'Error';
    }
}

```

## OUTPUT
![alt text](<Screenshot 2026-11-17 115001.png>)
![alt text](<Screenshot 2026-11-17 115012.png>)
![alt text](<Screenshot 2026-11-17 115021.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.