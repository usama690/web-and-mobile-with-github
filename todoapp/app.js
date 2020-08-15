var list = document.getElementById('list')
function addToList() {
    var todo_item = document.getElementById('todo-item')

    
    // create li tag with text node 
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute('class','text-lg')
    li.appendChild(liText)

    // create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    delBtn.setAttribute('class','btn btn-primary mt-2 ml-5')
    delBtn.setAttribute('onclick','deleteItem(this)')
    delBtn.appendChild(delText)

    li.appendChild(delBtn)
    
    // create edit button 
    
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    editBtn.setAttribute('class','btn btn-secondary mt-2 ml-1')
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.appendChild(editText)
    
    li.appendChild(editBtn)
    
    list.appendChild(li)

    todo_item.value = ""

    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}

function editItem(e) {
    var val = prompt ('Enter updated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val ;


}