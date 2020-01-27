const todoList = [];
const doneList = [];

const task = document.querySelector('input');

task.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		moveTask(event);
	}
});

// push array function
const moveTask = (todo) => {
	todoList.push(todo);
	console.log(todoList);
};

// loop through an array
const taskLoop = (array) => {
	// loop through each array element
	// append with a html element create
};

// TODO JS
// clear input after enter

// TODO HTML
// append li and ul
