
window.onload = function onReady(){
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

		var confirmDelete = checkbox.addEventListener('click', someFunction);		

		function someFunction(){
			alert('Remove Item?');
		}

		function removeItem(){
			if(checkbox.input === true){
				alert('yes');
			}
		}

	});	

		
}

