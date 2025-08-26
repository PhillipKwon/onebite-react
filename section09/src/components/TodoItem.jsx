import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div className="todo-item_content">Todo...</div>
      <div className="todo-item_date">2025-09-12</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
