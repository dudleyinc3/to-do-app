
/*window.onload = function onReady(){
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');

	

		addToDoForm.addEventListener('submit', event => {
			event.preventDefault();
			let title = newToDoText.value;
			let newLi = document.createElement('li');
			let checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			newLi.textContent = title;
			newLi.appendChild(checkbox);
			toDoList.appendChild(newLi);
			newToDoText.value = '';

	const deleteBtn = document.createElement('button')
		deleteBtn.innerHTML = '<span>Delete</span>';

		newLi.appendChild(deleteBtn);

		deleteBtn.addEventListener('click', () => {
			toDoList.removeChild(newLi);
		});
	});			
}
*/

/*function onReady(){

	let toDos = [];
	
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');


	

	function createNewToDo(){
		if (!newToDoText.value) {return}

		toDos.push({
			title: newToDoText.value,
			complete: false
		});
		newToDoText.value = '';
		renderTheUI;
	}

	function renderTheUI(){
		const toDoList = document.getElementById('toDoList');
		toDoList.textContent = '';

		toDos.forEach(function(toDo){
			const newToDo = document.createElement('li');
			const checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			const title = document.createElement('span');
			newLi.textContent = toDo.title;

			toDoList.appendChild(newLi);
			newLi.appendChild(checkbox);

			});
	}


		addToDoForm.addEventListener('submit', event =>{
			event.preventDefault();
			createNewToDo();
			newToDoText.value = '';
	});

		renderTheUI();
	}
*/



function onReady(){
	let toDos = [];
	let id = 0;

	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');

	function createNewToDo(){
	let title = newToDoText.value;
		if (!newToDoText.value) {return;}
		for (var i = 0; i < toDos.length; i++){
			id = toDos[i];
			//alert([i]);  //** it is incrementing with ea. todo
		}
		toDos.push({
			title: newToDoText.value,
			complete: false,
			id: id.value
		});

		newToDoText.value = '';

		renderTheUI();
	}

	function renderTheUI(){
		const toDoList = document.getElementById('toDoList');
		
		toDoList.textContent = '';

		toDos.forEach(function(toDo) {
			const newLi = document.createElement('li');
			const checkbox = document.createElement('input');
			const deleteBtn = document.createElement('button');
			deleteBtn.innerHTML = '<span>Delete</span>';
			checkbox.type = "checkbox";
			

			newLi.textContent = toDo.title;

			toDoList.appendChild(newLi);
			newLi.appendChild(checkbox);
			newLi.appendChild(deleteBtn);


			
			

			deleteBtn.addEventListener('click', event => {

				//alert('works');
				function deleteToDo(id){
				toDo = toDos.filter(event => toDo.id !== id);
			}
				
				deleteToDo(toDo.id);


				renderTheUI();


				// REMOVES CHECKMARK INPUT??

				/*Create a deleteToDo function that accepts an id 
				as a parameter. In this function, remove the to-do 
				from the ToDos array using the .filter() array method.
				Pass .filter() a callback function that compares the id
				of each item in the to-do list with the id parameter. 
				The callback function should return true if the IDs don't match, 
				and false if the IDs do match: toDos = toDos.filter(item => item.id !== id);
				*/

			/*	Inside the event listener for the delete button, 
				call the deleteToDo function and pass it toDo.id.
			Finally, inside the event listener, call renderTheUI() 
			to update the UI.
			*/

			});
		});
	}

	addToDoForm.addEventListener('submit', event => {
		event.preventDefault();
		createNewToDo();
		newToDoText.value = '';
	});




	renderTheUI();
}



window.onload = function() {
  onReady();
};



























