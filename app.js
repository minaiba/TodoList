// let textIn = document.querySelector('.textIn')
// let addBtn = document.querySelector('#addBtn')
// let list = document.querySelector('ul')

let TodosArray = localStorage.getItem( 'todos' ) == null
? []
: [...JSON.parse(localStorage.getItem('todos'))]

// console.log(TodosArray);

addBtn.addEventListener('click', addTodo);

function createItem(todo, id) {
   let items = 
   `
   <li key="${id}" class="${ todo.checked ? 'taskItem done' : 'taskItem'}"/>
   ${todo.text} ${todo.date ? todo.date : ''}
   <img class="btn" src="./img/g.png" onclick='doneTodo(event)' />
   <img class="btn" src="./img/34627.png" onclick='deleteTodo(event)' />
   `
   return items 
}

function rendderTodo() {
   list.innerHTML = ''
   // TodosArray.map( ( todo, id ) => {
   //    let li = document.createElement('li')    
   //    li.className = 'taskItem';
   //    li.id = id

   //    let doneBtn = document.createElement('img')
   //    doneBtn.className = 'btn'
   //    doneBtn.src = './img/1828710.png'
   //    doneBtn.addEventListener('click', doneTodo)

   //    let deleteBtn = document.createElement('img')
   //    deleteBtn.className = 'btn'
   //    deleteBtn.src = './img/34627.png'
   //    deleteBtn.addEventListener('click', deleteTodo)

   //    li.append(todo.text)
   //    li.append(doneBtn);        
   //    li.append(deleteBtn);       
   //    list.append(li)
   // })
   let items = []
   TodosArray.length
   ? TodosArray.map( (todo, id) => {
      items.unshift( createItem( todo, id ) )
      list.innerHTML = items.join( '' )
   })
   : list.append( 'no task' )
}
// итерация кылып ли ге чыгарып берет
rendderTodo()





// аргумент и параметр = (e)
// target = выбирать то что хочешь 
// parentNode = выбирать всех и всё
