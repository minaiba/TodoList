let container = document.createElement( 'div' )
container.className = 'container'
document.body.append(container)

let h1 = document.createElement( 'h1' )
h1.innerHTML = 'Todo-list'
container.append(h1)

let mainblock = document.createElement('div')
mainblock.className = 'mainblock'
container.append(mainblock)

let div = document.createElement('div')
mainblock.append(div)

let textIn = document.createElement('input')
textIn.setAttribute('placeholder', 'Введите текст')
textIn.className = 'textIn'
div.append(textIn)

let setdate = document.createElement('input')
setdate.setAttribute('type' , 'date')
div.append(setdate)

let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'add'
div.append(addBtn)

let list = document.createElement('ul')
mainblock.append(list)





