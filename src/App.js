import React from "react"
import ReactDOM from "react-dom"
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component{
    constructor(){
        super() 
        this.state = {
            todos: todosData,
            value: '', 
            countCheck: 0,
            countUncheck:0,
            totalItems: 0,
            nextId:0

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleInput = this.handleInput.bind(this)        
    }

    handleChange(id)
    {
       this.setState (prevState=>{
           let count=0
           let itemcount = prevState.totalItems
           let result =0
           const updatedTodos=prevState.todos.map(todos => {
            if(todos.id === id)
            {
                todos.completed = !todos.completed
            }
            if(todos.completed === true){
                count++                
            }                                             
            return todos
         })
         return {
             todos: updatedTodos,
             countCheck: count,
             countUncheck: prevState.totalItems-count             
         }         
       })

       
    }

handleInput(e){
this.setState({value: e.target.value})
}


addTodo(todotext)
{
  if(todotext!= '')
  { 
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todotext, completed: false})
    this.setState({
        todos: todos,  
        nextId: ++this.state.nextId ,
        countUncheck: ++this.state.countUncheck,
        totalItems: ++this.state.totalItems    
    })
  }
}





    render(){      
        const todosItem = this.state.todos.map(item => <TodoItem key={item.id}  item={item} handleChange={this.handleChange} />)
        return(  
          <div>
      <h1 class="center title">My TODO App</h1>
        <div class="flow-right controls">
            <span>Item count: <span id="item-count">{this.state.totalItems}</span></span>
            <span>Unchecked count: <span id="unchecked-count">{this.state.countUncheck}</span></span>
            <span>Checked count: <span id="checked-count">{this.state.countCheck}</span></span>
        </div>
            
        <br></br>    
        <input type="text" value={this.state.value} onChange={this.handleInput}/>        
        <button class="button center" onClick={() => this.addTodo(this.state.value)}>New Todo</button>

        <br/>

        <ul id="todo-list" class="todo-list"> {todosItem} </ul>
                                    
        </div>
        )
    }
}
export default App