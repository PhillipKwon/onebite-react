import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <div className="list">
      <h4>Todo List 📋</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilteredData().map((todo) => {
          return (
            <TodoItem key={`todo${todo.id}`} {...todo} onUpdate={onUpdate} />
          );
        })}
      </div>
    </div>
  );
};

export default List;
