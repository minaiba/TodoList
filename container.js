
function addTodo()  {

    let task = textIn.value 
    let date = setdate.value
    if(task !== '') {
   
      TodosArray.push({
         text:task,
         checked: false,
         date
      })
      localStorage.setItem('todos', JSON.stringify(TodosArray) )

      rendderTodo()

       textIn.value = '';
    }
}

function doneTodo(e) {
    let index = e.target.parentNode.getAttribute( 'key' )
    let newTodo = [...TodosArray]
    let element = newTodo[index].checked
    TodosArray[index].checked = !element 
    localStorage.setItem('todos', JSON.stringify(newTodo))
 
 
    let isDone = e.target.parentNode.classList.contains('done') 
    isDone
    ? e.target.parentNode.classList.remove('done')
    : e.target.parentNode.classList.add('done')
 }
 
 
 function deleteTodo(e) {
    let index = e.target.parentNode.getAttribute( 'key' )
    TodosArray.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(TodosArray));
 
 
    e.target.parentNode.remove()
 }
 