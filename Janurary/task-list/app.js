// TODO JS

// array of active and inactive tasks
const taskArray = [];

// select input element
const task = document.querySelector('input');

task.addEventListener('keyup', function(event) {
	// Enter Key
	if (event.keyCode === 13) {
		pushTask(event);
	}
});

// push array function
const pushTask = (input) => {
	taskArray.push(input.target.value);
	console.log(taskArray);
	task.value = '';
};

// loop through an array and create unordered list
const taskLoop = (array) => {
	// loop through each array element
	// append with a html element create
	for (let item of array) {
	}
};

taskLoop(taskArray);
