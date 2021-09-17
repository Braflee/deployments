function getData(){
    axios.get("https://api.vschool.io/bradduffy/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        let div = document.createElement('div')
        document.getElementById('todoList').appendChild(div)
        div.classList.add('listItem')

        const chBox = document.createElement('input')
        chBox.setAttribute('type', 'checkbox')
        div.appendChild(chBox)

        const titl = document.createElement('h1')
        titl.textContent = data[i].title
        div.appendChild(titl)
        
        const desc = document.createElement('h3')
        desc.textContent = data[i].description
        div.appendChild(desc)
        
        const pri = document.createElement('h3')
        pri.textContent = data[i].price
        div.appendChild(pri)
        
        const imgU = document.createElement("img")
        imgU.src = data[i].imgUrl
        div.appendChild(imgU)
        
        const button = document.createElement('button')
        button.textContent = 'Delete'
        div.appendChild(button)
        
        chBox.addEventListener('change', (e) => {
            e.preventDefault()
            if(chBox.checked === true){
                titl.style.textDecoration = 'line-through'
                desc.style.textDecoration = 'line-through'
                pri.style.textDecoration = 'line-through'
                axios.put("https://api.vschool.io/bradduffy/todo/" + data[i]._id, {"completed": true})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                titl.style.textDecoration = 'none'
                desc.style.textDecoration = 'none'
                pri.style.textDecoration = 'none'
                axios.put(`https://api.vschool.io/bradduffy/todo/${data[i]._id}`, {"completed": false})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        })
        if (data[i].completed === true) {
            titl.style.textDecoration = 'line-through'
            desc.style.textDecoration = 'line-through'
            pri.style.textDecoration = 'line-through'
            chBox.checked = true
        }

        button.addEventListener('click', (e) =>{
            axios.delete(`https://api.vschool.io/bradduffy/todo/${data[i]._id}`)
                .then(res => {
                    getData()
                    console.log(res)
                })
                .catch(err => console.log(err))
        })
    } 
}

function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document.todoForm
todoForm.addEventListener("submit", function (e){
    e.preventDefault()

    const newTodo = {
       title: todoForm.title.value,
       description: todoForm.description.value,
       price: todoForm.price.value,
       imgUrl: todoForm.imgUrl.value

    } 

    axios.post("https://api.vschool.io/bradduffy/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""

})

