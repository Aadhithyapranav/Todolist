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
index.html
```


<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>My To-Do List</h1>

        <div class="input-box">
            <input type="text" id="taskInput"
                   placeholder="Enter your task">

            <button onclick="addTask()">Add</button>
        </div>

        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>

</body>
</html>

```
style.css
```


body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
}

.container {
    width: 400px;
    margin: 100px auto;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
}

h1 {
    text-align: center;
    color: #6c63ff;
}

.input-box {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    background: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

ul {
    padding: 0;
}

li {
    list-style: none;
    background: #eee;
    padding: 12px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
}

li.completed span {
    text-decoration: line-through;
    color: gray;
}

.delete {
    background: red;
}


```
script.js
```


function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    // Complete task
    span.onclick = function() {
        li.classList.toggle("completed");
    };

    // Delete button
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete";

    button.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


```

## OUTPUT
![alt text](<Screenshot 2026-11-17 145502.png>)
![alt text](<Screenshot 2026-11-17 145516.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.