// TODO JS

// array of active and inactive tasks
const tasks = [ 'yes', 'np', 43, 'fdff' ];

// select input element
const task = document.querySelector('input');

task.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		pushTask(event);
	}
});

// push array function
const pushTask = (event) => {
	tasks.push(event.target.value);
	console.log(tasks);
	task.value = '';
};

// loop through an array and create unordered list
const renderTasks = (array) => {

	if (array.length === 0) {
		return `No Tasks yet!`
	} else {
		for (let j = 0; j > array.length; j++)
		let li = document.createElement('li')
		
		
	}



	// let getList = document.getElementById(listId);
	// return array.forEach(function(item) {
	// 	let li = document.createElement('li');
	// 	getList.append(li);
	// 	li.innerHTML += item;
	// });
};

// call array in to DOM
renderTasks(tasks);

