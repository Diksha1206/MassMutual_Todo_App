import React from "react"
import todosData from "../todosData";

function TodoItem(props){
const completedStyle ={
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

return (
    <div>
        <input type="checkbox" checked={props.item.completed}
        onChange = {() =>props.handleChange(props.item.id) }

        />
        <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            
        
    </div>
)

}


export default TodoItem

