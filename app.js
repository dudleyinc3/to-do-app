function onReady(){
	const addToDoForm =document.getElementById('addToDoForm');
	addToDoForm.addEventListener('submit', event => {
	event.preventDefault();
	let title = newToDoText.value;
	let newLi = document.createElement('li');
	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	});
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');
}

