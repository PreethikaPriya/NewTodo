import React from "react";

const TodoList = props => (
    <div>
        <h3> To do list Items </h3>
        {props.list.map( ( todo_item, index ) => {
            return <p key={ `todo_item-${ index }` }> {(index+1) + ")"} { todo_item }</p>;
        })}
    </div>
)

export default TodoList;


