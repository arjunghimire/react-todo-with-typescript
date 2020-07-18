import * as React from "react";

interface Props {
  name: string;
  age?: number;
}

const TodoList: React.FC<{ name?: string }> = ({ name }) => {
  return <div>{name}</div>;
};

export default TodoList;
