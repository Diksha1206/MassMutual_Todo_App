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
           
           //let unCheckCount=(prevState.totalItems)-(prevState.countCheck)
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
    
    console.log(todotext)
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todotext, completed: false})
    
   // todosData.push({id:10, text: todotext, completed: false})
    this.setState({
        todos: todos,  
        nextId: ++this.state.nextId ,
        countUncheck: ++this.state.countUncheck,
        totalItems: ++this.state.totalItems    
    })

}



count(){

}

    render(){
       // const jokeComponent = jokesData.map(joke => <Joke key={joke.id}  question={joke.question} answer={joke.answer}/>)
       //let count=0;

        
        
       
       
       /* const totalItem = this.state.todos.map(itemT =>{
             if(itemT.completed === true)
             {
                 this.count = count +1
             }
            return count;
        })*/
        
        




        const todosItem = this.state.todos.map(item => <TodoItem key={item.id}  item={item} handleChange={this.handleChange} />)
        return(
    
            <div>
            <p>Item count:{this.state.totalItems}</p>
            <p>Unchecked count:{this.state.countUncheck}</p>
            
            <p>Checked count:{this.state.countCheck}</p>
            

  

            <input type="text" value={this.state.value} onChange={this.handleInput}/>
            <button onClick={() => {this.addTodo(this.state.value); this.count()}}>New Todo</button>
            <br/>
            <br/>
            <br/>
            <br/>
            {todosItem}            
            
            </div>
        )
    }

}






// Class-based component
// Learning about map, map from Json like Array,
// Use Joke tag, props, passing data between components and 
//class based components

/*
class App extends React.Component{
render()
{
    const jokeComponent = jokesData.map(joke => <Joke key={joke.id}  question={joke.question} answer={joke.answer}/>)

    const todosItem = todosData.map(item => <TodoItem key={item.id}  item={item}/>)
    return(

        <div>
        {todosItem}
        <Headclass username="diksha" />
        </div>
    )
}
}

// Class-based Component
class Headclass extends React.Component{
render(){
    return(
<div>
    <h1>In the Headclass Class-based component</h1> 
    <p>{this.props.username}</p>   
</div>

    )
}


}
*/

// Practicing State 
/*
class App extends React.Component{
constructor(){
    super()
    this.state = {
        name: "Diksha",
        age: 24
    }
}


    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>

            </div>

        )
    }


}
*/

// Practising State
/*
class App extends React.Component{
constructor(){
    super()
    this.state ={
        isLoggedin: false
    }
}



render(){
let wordDisplay;
if(this.state.isLoggedin === true )
{
    wordDisplay = "in"
}
else{
    wordDisplay = "out"
}


    return (
        <div>
            <p>I am logged: {wordDisplay}</p>
        </div>
    )
}



}
*/


// Implementing a counter

/*
class App extends React.Component{
constructor(){
    super()
    this.state ={
        count: 0
    }
    this.handleChange = this.handleChange.bind(this )
}


handleChange(){
    this.setState(prevState =>{

        return{
            count: prevState.count +  1 
        }

    })
}

render(){
    return(
        <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleChange}>Change</button> 


        </div>

    )
}


}*/




export default App