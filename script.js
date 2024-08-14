    const textInputDOM = document.getElementById("todo-input");
    const btnAddTodoDOM = document.getElementById("add-todo");
    const todosDOM = document.querySelector("#todos");
    const btnClearDOM = document.getElementById("clear");

    let textInputValue = "";
    let todos = [];

    btnAddTodoDOM.addEventListener("click", (e) => {
        e.preventDefault();
        let id = todos.length + 1;
        let title = textInputDOM.value;
        const todo = new Todo(id,title)
        todos=[...todos, todo];
        todos.reverse();
        UI.alert("Todo eklendi.");
        console.log(todos);
        UI.clearInput();
        UI.displayTodos();
    });

    class Todo{
        constructor(id,title){
            this.id = id;
            this.title = title;
        }
    }

    class UI{
        static displayTodos(){
            let result = "";

        if(todos.length === 0){
            todosDOM.innerHTML = "Liste Boş!"  
        }else{        todos.map((item)  =>  {
            result +=
           `<li class="border px-4 py-3 flex justify-between">
                <span>${item.title}</span>
                <button class= "remove text-red-400" data-id="${item.id}">Sil</button>
            </li> ` ;
        } );

        todosDOM.innerHTML = result;
            
        }
        }

        static clearInput(){
            textInputDOM.value = "";
        }

        static alert(text){
            window.alert(text);

        }

        static removeTodo(){
            todosDOM.addEventListener("click", (e) => {
                if(e.target.classList.contains("remove")){
                    e.target.parentElement.remove();
                    let btnId = e.target.dataset.id;
                    UI.removeArrayTodo(btnId);  
                }   

            })

        }

        

        static removeArrayTodo(id){
            todos = todos.filter((item)=> item.id !== +id);
            UI.alert("todo silindi");
            UI.displayTodos();  
        }

        static clearTodos(){
            btnClearDOM.addEventListener("click", () => {
                todos=[];
                UI.displayTodos()
            })
        }
    }

    UI.removeTodo();
    UI.displayTodos(); 
    UI.clearTodos(); 
    
