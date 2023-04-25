let $todoInput
let $alertInfo
let $addBtn
let $ulList
let $newTask
let $allNewTasks
let $idNumber = 0
let $editedTodo
let $completeTask
let $editTask
let $cancelTask
let $clearAllBtn
let $popup
let $savePopup
let $closePopup
let $popupInput
let $errorPopup
let $root = document.documentElement
let $redColorBtn
let $greenColorBtn
let $orangeColorBtn

const main = () => {
	prepareDOMElement()
	prepareDOMEvent()
}

const prepareDOMElement = () => {
	$todoInput = document.querySelector('.input')
	$alertInfo = document.querySelector('.error')
	$addBtn = document.querySelector('.add-btn')
	$ulList = document.querySelector('.todo-box ul')
	$allTasks = document.getElementsByTagName('li')
	$completeTask = document.querySelector('.complete')
	$editTask = document.querySelector('.edit')
	$cancelTask = document.querySelector('.cancel')
	$clearAllBtn = document.querySelector('.clear-all')
	$popup = document.querySelector('.popup')
	$popupInput = document.querySelector('.popup-input')
	$errorPopup = document.querySelector('.error-popup')
	$savePopup = document.querySelector('.save-btn')
	$closePopup = document.querySelector('.close-btn')
	$redColorBtn = document.querySelector('.red')
	$greenColorBtn = document.querySelector('.green')
	$orangeColorBtn = document.querySelector('.orange')
}

const prepareDOMEvent = () => {
	$addBtn.addEventListener('click', addNewTask)
	$todoInput.addEventListener('keyup', enterCheck)
	$ulList.addEventListener('click', checkClick)
	$clearAllBtn.addEventListener('click', clearAllTodoo)
	$savePopup.addEventListener('click', changeTodo)
	$closePopup.addEventListener('click', closeTodo)
	$redColorBtn.addEventListener('click', redTodo)
	$greenColorBtn.addEventListener('click', greenTodo)
	$orangeColorBtn.addEventListener('click', orangeTodo)
}

const addNewTask = () => {
	if ($todoInput.value !== '') {
		$idNumber++
		$newTask = document.createElement('li')
		$newTask.innerText = $todoInput.value
		$newTask.setAttribute('id', `todo-${$idNumber}`)
		$ulList.appendChild($newTask)
		$todoInput.value = ''
		$alertInfo.style.visibility = 'hidden'
		createToolsArea()
	} else {
		$alertInfo.style.visibility = 'visible'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('edit-btns')
	$newTask.appendChild(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fa-regular fa-square-check complete"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square edit"></i>'

	const cancelBtn = document.createElement('button')
	cancelBtn.classList.add('cancel')
	cancelBtn.innerHTML = '<i class="fa-solid fa-trash-can cancel"></i>'

	toolsPanel.appendChild(completeBtn)
	toolsPanel.appendChild(editBtn)
	toolsPanel.appendChild(cancelBtn)
}

const checkClick = e => {
	if (e.target.classList.value !== '') {
		if (e.target.closest('button').classList.contains('complete')) {
			e.target.closest('li').classList.toggle('completed')
			e.target.closest('button').classList.toggle('completed')
		} else if (e.target.closest('button').classList.contains('edit')) {
			if (e.target.closest('button').classList.contains('edit')) {
				editTodo(e)
			}
		} else if (e.target.closest('button').classList.contains('cancel')) {
			deleteTask(e)
		}
	}
}

const editTodo = e => {
	const oldTodo = e.target.closest('li').id
	$editedTodo = document.getElementById(oldTodo)
	$popupInput.value = $editedTodo.firstChild.textContent
	$popup.classList.toggle('show')
}

const changeTodo = () => {
	if ($popupInput.value !== '') {
		$editedTodo.firstChild.textContent = $popupInput.value
		$popup.classList.remove('show')
	} else {
		$errorPopup.style.visibility = 'visible'
	}
}

const closeTodo = () => {
	$popup.classList.remove('show')
	$errorPopup.style.visibility = 'hidden'
}

const deleteTask = e => {
	const deleteTodo = e.target.closest('li')
	deleteTodo.remove()
}

const clearAllTodoo = () => {
	$ulList.innerHTML = ''
	$popup.classList.remove('show')
}

const enterCheck = () => {
	if (event.keyCode === 13) {
		addNewTask()
	}
}

// ======== COLOR CHANGES ================

// :root {
// 	--bg-color: linear-gradient(315deg, #772f1a 0%, #f2a65a 74%);
// 	--main-color: rgb(242, 166, 90);
// 	--main-color-hover: rgba(242, 166, 90, 0.7);
// 	--text-color: #fff;
// 	--border-color: #fff;
// 	--todo-bg-color: #333;
// }

const redTodo = () => {
	$root.style.setProperty('--bg-color', 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)')
	$root.style.setProperty('--main-color', 'red')
	$root.style.setProperty('--main-color-hover', 'rgba(161, 5, 5, 0.7)')
}

const greenTodo = () => {
	$root.style.setProperty('--bg-color', 'linear-gradient(315deg, #63d471 0%, #233329 74%)')
	$root.style.setProperty('--main-color', 'green')
	$root.style.setProperty('--main-color-hover', 'rgba(0, 128, 0, 0.7)')
}
const orangeTodo = () => {
	$root.style.setProperty('--bg-color', 'linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)')
	$root.style.setProperty('--main-color', 'rgb(242, 166, 90)')
	$root.style.setProperty('--main-color-hover', 'rgba(242, 166, 90, 0.7)')
}




document.addEventListener('DOMContentLoaded', main)
