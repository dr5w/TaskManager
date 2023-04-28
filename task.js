// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
let userInput = prompt(menu);

// Loops and continues to the menu until the user ends/closes the Task Manager (AKA Until the user enters CLOSE (UPPERCASE or lowercase))
while (userInput.toUpperCase() !== `CLOSE`){

  // CODE TO COMPLETE TASK MANAGER SHOULD BE WRITTEN HERE

  // Checks if user entered TASKS (UPPERCASE or lowercase)
  if (userInput.toUpperCase() === `TASKS`){

    // The For Of loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks String variable
    for (task of tasks) {

      // Using \n to create a new line (AKA Line break) after each task
      showTasks += `${task}\n`;
    }

    // Display the current tasks to the user
    alert(showTasks);

    // Sets the value of the showTasks String variable back to an empty String
    showTasks = ``;
  }

  // Checks if user entered NEW (UPPERCASE or lowercase)
  if (userInput.toUpperCase() === `NEW`){

    // Prompts the user to enter a new task and stores their response
    newTask = prompt(`Please enter the new task:`);

    // Continues looping and prompting the user until something is entered (NOTE: If the user does NOT type anything and just clicks OK, then the value the returned returned will be an empty string)
    // Also, if the user only enters a space or spaces the the value returned will also be an empty string since the Trim method is used here
    while (newTask.trim() === ``){
      newTask = prompt(`Please enter the new task:`);
    }

    // Adds the user's entry as a new item at the end of the tasks array
    tasks.push(newTask);

    // Alerts the user their new task has been added
    alert(`"${newTask}" has been added!`);
  }

  // Checks if user entered REMOVE (UPPERCASE or lowercase)
  if (userInput.toUpperCase() === `REMOVE`){

    // Concatenates each task/item in the tasks array to the showTasks String variable. Also, sets/displays a number for each task.
    for (i = 0; i < tasks.length; i++){

      // Adding 1 to i (AKA The index) so the numbers will start displaying at 1. Also, using \n to create a new line (AKA Line break)
      showTasks += `${i + 1}: ${tasks[i]}\n`;
    }

    // Prompts the user to enter a number and stores their response to the num variable
    // Using \n to create a new line (AKA Line Break)
    // Subtracting 1 from the user's entry to that it matches the index of the item that user wants to remove from the tasks array
    // Just like ParseInt, JavaScript will attempt to convert a String into a Number when you try to Subtract from it. So ParseInt is NOT necessary here.
    num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;

    // Loop that continues looping until the user enters a valid response (AKA Number)
    // Verifies the user entered in a whole number (AKA Not a decimal) that is one of options in prompt (AKA Within the number range from 1 to the length of the tasks array)
    // The 1st condition (Math.floor(num) !== num) checks to see if the user entered in a decimal
    // The 2nd condition (num < 0) checks to see if the user entered in 0 (Zero) or a negative number
    // The 3rd condition (num >= tasks.length) checks to see if the user entered in a number that is higher than the length of the tasks array (AKA Higher the highest number displayed in the prompt)
    // The 4th condition (!num) checks to see if the user did NOT enter in a number (AKA A value that cannot be converted to a number)
    // The 5th condition (&& num !== 0) is used in case the user entered in 1 which would converted to 0 and would cause the loop to run without this extra condition
    while ((Math.floor(num) !== num || num < 0 || num >= tasks.length || !num) && num !== 0){

      alert(`Not a valid entry`);
      num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
    }

    // Removes the task/item selected by the user from the tasks array. Also, set the task/item that was removed to the REMOVED variable (NOTE: Splice returns the value(s) that is removed as an item(s) in an array)
    removed = tasks.splice(num , 1);

    // Alerts user with the task/item that has been removed (NOTE: Using index on the REMOVED variable here because splice returns the value that is removed as an item in an array)
    alert(`${removed[0]} has been removed`);

    // Sets the value of the showTasks String variable back to an empty String
    showTasks = ``;
  }

  // Displays the menu again
  // ???
  userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using the Task Manager`);
