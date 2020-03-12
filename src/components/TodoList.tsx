import React from "react";

interface propsResultShape {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<propsResultShape> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  ); //key ={} is a special feature of react. it allows me to distinguish the repeated elements
};

export default TodoList;
